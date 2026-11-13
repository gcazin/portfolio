import { BRANDS } from './brands.js';
import { isIpAddress, isSameOrSubdomain, parseHostname } from './domain.js';
import { toUnicode } from './punycode.js';

export const Level = Object.freeze({
    Ignored: 'ignored',
    Trusted: 'trusted',
    Official: 'official',
    Neutral: 'neutral',
    Warning: 'warning',
    Danger: 'danger',
});

export const WARNING_THRESHOLD = 30;
export const DANGER_THRESHOLD = 60;
const SUBSTRING_KEYWORD_MIN_LENGTH = 7;

const SUSPICIOUS_TLDS = new Set([
    'buzz', 'cfd', 'click', 'cyou', 'icu', 'info', 'live', 'monster', 'online', 'rest',
    'sbs', 'shop', 'site', 'support', 'top', 'xyz', 'zip', 'mov', 'lol', 'qpon',
]);

/**
 * Link shorteners hide the real destination: harmless in the browser (the redirect is
 * analysed on arrival) but a strong signal in a link received by SMS.
 */
const URL_SHORTENERS = new Set([
    'bit.ly', 'buff.ly', 'cutt.ly', 'is.gd', 'ow.ly', 'rb.gy', 'rebrand.ly', 's.id', 'shorturl.at',
    't.co', 't.ly', 'tiny.cc', 'tinyurl.com', 'urlz.fr', 'v.gd',
]);

const SENSITIVE_WORDS = [
    'account', 'amende', 'auth', 'bloque', 'client', 'colis', 'compte', 'confirm', 'connexion',
    'espace', 'facture', 'livraison', 'login', 'paiement', 'payment', 'remboursement',
    'secure', 'securite', 'signin', 'suivi', 'support', 'suspendu', 'update', 'verif',
];

/**
 * Visually confusable characters mapped to the ASCII letter they imitate.
 */
const CONFUSABLES = {
    'а': 'a', 'е': 'e', 'о': 'o', 'р': 'p', 'с': 'c', 'у': 'y', 'х': 'x', 'і': 'i', 'ј': 'j',
    'ѕ': 's', 'ԁ': 'd', 'ɡ': 'g', 'ӏ': 'l', 'һ': 'h', 'ԛ': 'q', 'ԝ': 'w', 'ο': 'o', 'α': 'a',
    'ν': 'v', 'ρ': 'p', 'ι': 'i', 'κ': 'k', 'τ': 't', 'υ': 'u', 'ı': 'i',
};

/**
 * Reduces a label to the shape a human perceives, so "paypa1", "pаypal" (Cyrillic а)
 * and "rnicrosoft" collapse onto the brand they imitate.
 */
export function skeleton(label) {
    return [...label.normalize('NFD').replace(/\p{M}/gu, '')]
        .map((character) => CONFUSABLES[character] ?? character)
        .join('')
        .replace(/rn/g, 'm')
        .replace(/vv/g, 'w')
        .replace(/0/g, 'o')
        .replace(/[1i|]/g, 'l')
        .replace(/-/g, '');
}

export function levenshtein(a, b) {
    if (a === b) {
        return 0;
    }
    let previous = Array.from({ length: b.length + 1 }, (_, index) => index);
    for (let i = 1; i <= a.length; i++) {
        const current = [i];
        for (let j = 1; j <= b.length; j++) {
            current[j] = Math.min(
                previous[j] + 1,
                current[j - 1] + 1,
                previous[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
            );
        }
        previous = current;
    }
    return previous[b.length];
}

function officialBrandFor(hostname) {
    return BRANDS.find((brand) =>
        [...brand.domains, ...(brand.infraDomains ?? [])].some((domain) => isSameOrSubdomain(hostname, domain)),
    );
}

function keywordMatches(keyword, hostname, tokens, brand) {
    if (tokens.includes(keyword)) {
        return true;
    }
    const allowsSubstring = keyword.includes('-') || (!brand.commonWord && keyword.length >= SUBSTRING_KEYWORD_MIN_LENGTH);
    return allowsSubstring && hostname.includes(keyword);
}

/**
 * Strongest impersonation signal for one brand, or null when the hostname does not evoke it.
 */
function impersonationSignal(brand, parsed, unicodeLabel, hostname, tokens) {
    const signals = [];

    for (const domain of brand.domains) {
        const official = parseHostname(domain);
        if (official.label.length < 5 && brand.commonWord) {
            continue;
        }

        if (parsed.label === official.label && !brand.commonWord) {
            signals.push({ code: 'same-name', weight: 50, message: `Porte le nom de ${brand.name} mais n'est pas son site officiel (${domain}).` });
            continue;
        }

        if (unicodeLabel !== parsed.label && skeleton(unicodeLabel) === skeleton(official.label)) {
            signals.push({ code: 'homoglyph', weight: 80, message: `Utilise des caractères trompeurs pour imiter ${domain}.` });
            continue;
        }

        if (!brand.commonWord && skeleton(parsed.label) === skeleton(official.label)) {
            signals.push({ code: 'lookalike', weight: 70, message: `Ressemble visuellement à ${domain} (${brand.name}).` });
            continue;
        }

        const maxDistance = official.label.length >= 8 ? 2 : 1;
        const distance = levenshtein(parsed.label, official.label);
        if (!brand.commonWord && official.label.length >= 6 && distance > 0 && distance <= maxDistance) {
            signals.push({ code: 'typo', weight: official.label.length >= 8 ? 50 : 25, message: `Nom presque identique à ${domain} (${brand.name}) : probable faute de frappe volontaire.` });
        }
    }

    if (brand.keywords.some((keyword) => keywordMatches(keyword, hostname, tokens, brand))) {
        signals.push({ code: 'brand-keyword', weight: 50, message: `Mentionne ${brand.name} sans être un de ses domaines officiels.` });
    }

    return signals.sort((left, right) => right.weight - left.weight)[0] ?? null;
}

function contextSignals(hostname, parsed, tokens) {
    const signals = [];
    const tld = hostname.split('.').pop();

    if (URL_SHORTENERS.has(parsed.registrable)) {
        signals.push({ code: 'url-shortener', weight: 30, message: `Lien raccourci (${parsed.registrable}) : la vraie destination est cachée.` });
    }

    if (SUSPICIOUS_TLDS.has(tld)) {
        signals.push({ code: 'suspicious-tld', weight: 15, message: `Extension .${tld} très utilisée par les sites frauduleux.` });
    }
    const sensitiveWord = SENSITIVE_WORDS.find((word) => tokens.some((token) => token.includes(word)));
    if (sensitiveWord) {
        signals.push({ code: 'sensitive-word', weight: 20, message: `L'adresse contient «\u00a0${sensitiveWord}\u00a0», un mot typique des arnaques.` });
    }
    if (parsed.onHostingPlatform) {
        signals.push({ code: 'hosting-platform', weight: 10, message: `Hébergé gratuitement sur ${parsed.suffix} : n'importe qui peut y créer un site.` });
    }
    if (hostname.startsWith('xn--') || hostname.includes('.xn--')) {
        signals.push({ code: 'punycode', weight: 20, message: 'Le nom de domaine contient des caractères spéciaux (non latins).' });
    }
    if (parsed.subdomains.length >= 3) {
        signals.push({ code: 'deep-subdomains', weight: 10, message: 'Adresse avec un nombre inhabituel de sous-domaines.' });
    }
    if ((parsed.label.match(/-/g) ?? []).length >= 3) {
        signals.push({ code: 'many-hyphens', weight: 10, message: 'Nom de domaine avec beaucoup de tirets.' });
    }

    return signals;
}

function ageSignal(domainAgeDays) {
    if (domainAgeDays === null || domainAgeDays === undefined) {
        return null;
    }
    if (domainAgeDays < 7) {
        return { code: 'very-new-domain', weight: 50, message: `Nom de domaine créé il y a ${Math.max(0, Math.floor(domainAgeDays))} jour(s).` };
    }
    if (domainAgeDays < 30) {
        return { code: 'new-domain', weight: 30, message: `Nom de domaine créé il y a moins d'un mois (${Math.floor(domainAgeDays)} jours).` };
    }
    return null;
}

export function levelFromScore(score) {
    if (score >= DANGER_THRESHOLD) {
        return Level.Danger;
    }
    if (score >= WARNING_THRESHOLD) {
        return Level.Warning;
    }
    return Level.Neutral;
}

/**
 * @param {string} rawUrl
 * @param {{ trustedDomains?: string[], domainAgeDays?: number|null }} [options]
 * @returns {{ level: string, score: number, hostname: string|null, domain: string|null, brand: string|null, reasons: Array<{ code: string, weight: number, message: string }> }}
 */
export function analyzeUrl(rawUrl, { trustedDomains = [], domainAgeDays = null } = {}) {
    let url;
    try {
        url = new URL(rawUrl);
    } catch {
        return { level: Level.Ignored, score: 0, hostname: null, domain: null, brand: null, reasons: [] };
    }
    if (!['http:', 'https:'].includes(url.protocol) || !url.hostname) {
        return { level: Level.Ignored, score: 0, hostname: null, domain: null, brand: null, reasons: [] };
    }

    const hostname = url.hostname.toLowerCase().replace(/\.$/, '');
    const parsed = parseHostname(hostname);
    const base = { hostname, domain: parsed.registrable };

    if (trustedDomains.some((domain) => isSameOrSubdomain(hostname, domain))) {
        return { ...base, level: Level.Trusted, score: 0, brand: null, reasons: [] };
    }

    const officialBrand = officialBrandFor(hostname);
    if (officialBrand) {
        return { ...base, level: Level.Official, score: 0, brand: officialBrand.name, reasons: [] };
    }

    if (isIpAddress(hostname)) {
        const reasons = [{ code: 'ip-address', weight: 40, message: 'Le site est désigné par une adresse IP brute au lieu d\'un nom.' }];
        return { ...base, level: levelFromScore(40), score: 40, brand: null, reasons };
    }

    const unicodeHostname = toUnicode(hostname);
    const unicodeLabel = parseHostname(unicodeHostname).label;
    const tokens = hostname.split(/[.-]/).filter(Boolean);

    let impersonated = null;
    for (const brand of BRANDS) {
        const signal = impersonationSignal(brand, parsed, unicodeLabel, hostname, tokens);
        if (signal && (!impersonated || signal.weight > impersonated.signal.weight)) {
            impersonated = { brand, signal };
        }
    }

    const reasons = [
        ...(impersonated ? [impersonated.signal] : []),
        ...contextSignals(hostname, parsed, tokens),
        ...[ageSignal(domainAgeDays)].filter(Boolean),
    ];
    const score = reasons.reduce((total, reason) => total + reason.weight, 0);

    return {
        ...base,
        level: levelFromScore(score),
        score,
        brand: impersonated?.brand.name ?? null,
        reasons: reasons.sort((left, right) => right.weight - left.weight),
    };
}
