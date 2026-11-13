const EXPLICIT_URL = /https?:\/\/[^\s<>"'«»]+/i;
const BARE_DOMAIN = /(?:^|[\s(«"'])((?:[a-z0-9¡-￿](?:[a-z0-9¡-￿-]*[a-z0-9¡-￿])?\.)+[a-z¡-￿]{2,}(?:\/[^\s<>"'«»]*)?)/i;
const TRAILING_PUNCTUATION = /[.,;:!?)\]}»"']+$/;

/**
 * Finds the first link in free text such as an SMS ("Votre colis est bloqué : ameli-colis.fr/x").
 *
 * @returns {string|null} an absolute http(s) URL
 */
export function extractFirstUrl(text) {
    if (!text) {
        return null;
    }
    const explicit = text.match(EXPLICIT_URL);
    if (explicit) {
        return explicit[0].replace(TRAILING_PUNCTUATION, '');
    }
    const bare = text.match(BARE_DOMAIN);
    if (bare) {
        return `https://${bare[1].replace(TRAILING_PUNCTUATION, '')}`;
    }
    return null;
}
