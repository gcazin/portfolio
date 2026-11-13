const RDAP_ENDPOINT = 'https://rdap.org/domain/';
const CACHE_KEY = 'domainAges';
const SUCCESS_TTL_MS = 7 * 24 * 60 * 60 * 1000;
const FAILURE_TTL_MS = 24 * 60 * 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * Extracts the registration date from an RDAP domain response.
 *
 * @returns {string|null} ISO date
 */
export function registrationDate(rdapResponse) {
    const event = (rdapResponse?.events ?? []).find((candidate) => candidate.eventAction === 'registration');
    return event?.eventDate ?? null;
}

/**
 * Age of a registrable domain in days, through the public RDAP registries (the successor of WHOIS).
 * Only the domain name is sent, never the full URL. Results are cached to limit lookups.
 *
 * @returns {Promise<number|null>} null when the registry does not expose the date
 */
export async function domainAgeDays(domain, storage, now = Date.now()) {
    const { [CACHE_KEY]: cache = {} } = await storage.get(CACHE_KEY);
    const cached = cache[domain];
    if (cached && now - cached.checkedAt < (cached.createdAt ? SUCCESS_TTL_MS : FAILURE_TTL_MS)) {
        return cached.createdAt ? (now - Date.parse(cached.createdAt)) / DAY_MS : null;
    }

    let createdAt = null;
    try {
        const response = await fetch(RDAP_ENDPOINT + encodeURIComponent(domain), {
            headers: { Accept: 'application/rdap+json' },
            credentials: 'omit',
        });
        if (response.ok) {
            createdAt = registrationDate(await response.json());
        }
    } catch {
        createdAt = null;
    }

    cache[domain] = { createdAt, checkedAt: now };
    await storage.set({ [CACHE_KEY]: cache });

    return createdAt ? (now - Date.parse(createdAt)) / DAY_MS : null;
}
