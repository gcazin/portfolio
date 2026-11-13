/**
 * Multi-label public suffixes where the registrable domain is one label deeper.
 * A deliberately small subset of the Public Suffix List, focused on what matters here.
 */
const MULTI_LABEL_SUFFIXES = new Set([
    'gouv.fr',
    'asso.fr',
    'com.fr',
    'nom.fr',
    'co.uk',
    'org.uk',
    'com.au',
    'com.br',
    'co.jp',
    'co.in',
]);

/**
 * Free hosting platforms: anyone can get a subdomain, so the subdomain is the "owner".
 */
export const HOSTING_PLATFORMS = new Set([
    '000webhostapp.com',
    'appspot.com',
    'azurewebsites.net',
    'blogspot.com',
    'carrd.co',
    'firebaseapp.com',
    'framer.website',
    'github.io',
    'glitch.me',
    'godaddysites.com',
    'herokuapp.com',
    'netlify.app',
    'ngrok-free.app',
    'ngrok.io',
    'onrender.com',
    'pages.dev',
    'r2.dev',
    'replit.app',
    'square.site',
    'surge.sh',
    'vercel.app',
    'web.app',
    'webflow.io',
    'weebly.com',
    'wixsite.com',
    'workers.dev',
]);

export function isIpAddress(hostname) {
    return /^\d{1,3}(\.\d{1,3}){3}$/.test(hostname) || hostname.includes(':') || hostname.startsWith('[');
}

/**
 * @returns {{ registrable: string, label: string, suffix: string, subdomains: string[], onHostingPlatform: boolean }}
 */
export function parseHostname(hostname) {
    const labels = hostname.toLowerCase().replace(/\.$/, '').split('.');
    let suffixLength = 1;

    for (const candidate of [...HOSTING_PLATFORMS, ...MULTI_LABEL_SUFFIXES]) {
        const candidateLength = candidate.split('.').length;
        if (labels.length > candidateLength && labels.slice(-candidateLength).join('.') === candidate) {
            suffixLength = Math.max(suffixLength, candidateLength);
        }
    }

    const suffix = labels.slice(-suffixLength).join('.');
    const label = labels.length > suffixLength ? labels[labels.length - suffixLength - 1] : labels[0];

    return {
        registrable: labels.slice(-(suffixLength + 1)).join('.'),
        label,
        suffix,
        subdomains: labels.slice(0, Math.max(labels.length - suffixLength - 1, 0)),
        onHostingPlatform: HOSTING_PLATFORMS.has(suffix),
    };
}

export function isSameOrSubdomain(hostname, domain) {
    return hostname === domain || hostname.endsWith(`.${domain}`);
}
