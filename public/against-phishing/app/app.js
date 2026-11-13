import { analyzeUrl, Level } from '../src/lib/analyzer.js';
import { extractFirstUrl } from '../src/lib/links.js';
import { domainAgeDays } from '../src/lib/rdap.js';

const COPY = {
    [Level.Danger]: {
        icon: '⛔',
        title: 'Arnaque probable',
        subtitle: (verdict) => (verdict.brand ? `Ce lien imite ${verdict.brand}.` : 'Ce lien présente de forts signes d\'arnaque.'),
        advice: 'N\'ouvrez pas ce lien et ne répondez pas. Transférez le SMS au 33700, puis supprimez-le.',
    },
    [Level.Warning]: {
        icon: '⚠️',
        title: 'Lien suspect',
        subtitle: () => 'Ce lien présente des signes suspects.',
        advice: 'Dans le doute, n\'ouvrez pas ce lien : passez par l\'appli ou l\'adresse officielle du service.',
    },
    [Level.Official]: {
        icon: '✅',
        title: 'Site officiel',
        subtitle: (verdict) => `Ce domaine appartient bien à ${verdict.brand}.`,
        advice: 'Vérifiez quand même que le message est attendu : un vrai lien peut accompagner une fausse histoire.',
    },
    [Level.Neutral]: {
        icon: '🔍',
        title: 'Rien de suspect',
        subtitle: () => 'Aucun signe d\'imitation détecté.',
        advice: 'Ce n\'est pas une garantie : ne donnez jamais vos coordonnées bancaires suite à un SMS.',
    },
};

const form = document.getElementById('check-form');
const input = document.getElementById('input');
const error = document.getElementById('error');
const result = document.getElementById('result');

const localStorageAdapter = {
    async get(key) {
        try {
            const raw = localStorage.getItem(key);
            return raw ? { [key]: JSON.parse(raw) } : {};
        } catch {
            return {};
        }
    },
    async set(values) {
        try {
            for (const [key, value] of Object.entries(values)) {
                localStorage.setItem(key, JSON.stringify(value));
            }
        } catch {
            return;
        }
    },
};

function formatAge(days) {
    if (days < 1) {
        return 'moins d\'un jour';
    }
    if (days < 60) {
        return `${Math.floor(days)} jours`;
    }
    if (days < 730) {
        return `${Math.floor(days / 30)} mois`;
    }
    return `${Math.floor(days / 365)} ans`;
}

function renderVerdict(verdict, ageText) {
    const copy = COPY[verdict.level] ?? COPY[Level.Neutral];
    const isAlarming = [Level.Danger, Level.Warning].includes(verdict.level);
    result.dataset.level = verdict.level;
    result.querySelector('.result-icon').textContent = copy.icon;
    document.getElementById('result-title').textContent = copy.title;
    document.getElementById('result-subtitle').textContent = copy.subtitle(verdict);
    document.getElementById('result-host').textContent = verdict.hostname;
    document.getElementById('result-reasons').replaceChildren(...verdict.reasons.map((reason) => {
        const item = document.createElement('li');
        item.textContent = reason.message;
        return item;
    }));
    document.getElementById('result-age').textContent = ageText;
    document.getElementById('result-advice').textContent = copy.advice;
    document.getElementById('report').hidden = !isAlarming;
    document.getElementById('help').hidden = verdict.level !== Level.Danger;
}

async function check(text) {
    const url = extractFirstUrl(text);
    const firstVerdict = url ? analyzeUrl(url) : null;
    if (!firstVerdict || firstVerdict.level === Level.Ignored) {
        error.textContent = 'Aucun lien trouvé. Collez l\'adresse du site ou le message complet.';
        error.hidden = false;
        return;
    }
    error.hidden = true;

    const needsAge = [Level.Neutral, Level.Warning, Level.Danger].includes(firstVerdict.level);
    renderVerdict(firstVerdict, needsAge ? 'Vérification de l\'âge du domaine…' : '');
    result.hidden = false;
    result.scrollTop = 0;
    document.getElementById('again').focus({ preventScroll: true });

    if (!needsAge) {
        return;
    }
    const ageDays = await domainAgeDays(firstVerdict.domain, localStorageAdapter);
    const verdict = analyzeUrl(url, { domainAgeDays: ageDays });
    renderVerdict(verdict, typeof ageDays === 'number' ? `Nom de domaine créé il y a ${formatAge(ageDays)}.` : '');
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    check(input.value);
});

document.getElementById('paste').addEventListener('click', async () => {
    try {
        input.value = await navigator.clipboard.readText();
        check(input.value);
    } catch {
        input.focus();
        error.textContent = 'Collage automatique impossible : appuyez longuement dans le champ puis « Coller ».';
        error.hidden = false;
    }
});

document.getElementById('again').addEventListener('click', () => {
    result.hidden = true;
    input.value = '';
    history.replaceState(null, '', location.pathname);
    input.focus();
});

const shared = new URLSearchParams(location.search);
const sharedText = [shared.get('url'), shared.get('text'), shared.get('title')].filter(Boolean).join(' ');
if (sharedText) {
    input.value = sharedText;
    check(sharedText);
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
}
