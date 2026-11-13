const BASE = 36;
const T_MIN = 1;
const T_MAX = 26;
const SKEW = 38;
const DAMP = 700;
const INITIAL_BIAS = 72;
const INITIAL_N = 128;

function adapt(delta, numPoints, firstTime) {
    let k = 0;
    delta = firstTime ? Math.floor(delta / DAMP) : delta >> 1;
    delta += Math.floor(delta / numPoints);
    while (delta > ((BASE - T_MIN) * T_MAX) >> 1) {
        delta = Math.floor(delta / (BASE - T_MIN));
        k += BASE;
    }
    return k + Math.floor(((BASE - T_MIN + 1) * delta) / (delta + SKEW));
}

function digitValue(codePoint) {
    if (codePoint >= 48 && codePoint < 58) {
        return codePoint - 22;
    }
    if (codePoint >= 97 && codePoint < 123) {
        return codePoint - 97;
    }
    return BASE;
}

/**
 * Decodes a single Punycode label (without the "xn--" prefix), per RFC 3492.
 */
export function decodeLabel(input) {
    const output = [];
    const basicEnd = input.lastIndexOf('-');
    for (let j = 0; j < Math.max(basicEnd, 0); j++) {
        output.push(input.charCodeAt(j));
    }

    let n = INITIAL_N;
    let bias = INITIAL_BIAS;
    let i = 0;
    for (let index = basicEnd > 0 ? basicEnd + 1 : 0; index < input.length; ) {
        const oldI = i;
        for (let w = 1, k = BASE; ; k += BASE) {
            if (index >= input.length) {
                throw new RangeError('Invalid punycode');
            }
            const digit = digitValue(input.charCodeAt(index++));
            if (digit >= BASE) {
                throw new RangeError('Invalid punycode');
            }
            i += digit * w;
            const t = k <= bias ? T_MIN : k >= bias + T_MAX ? T_MAX : k - bias;
            if (digit < t) {
                break;
            }
            w *= BASE - t;
        }
        const length = output.length + 1;
        bias = adapt(i - oldI, length, oldI === 0);
        n += Math.floor(i / length);
        i %= length;
        output.splice(i++, 0, n);
    }
    return String.fromCodePoint(...output);
}

/**
 * Converts an ASCII hostname (as exposed by URL) to its Unicode form.
 */
export function toUnicode(hostname) {
    return hostname
        .split('.')
        .map((label) => {
            if (!label.startsWith('xn--')) {
                return label;
            }
            try {
                return decodeLabel(label.slice(4));
            } catch {
                return label;
            }
        })
        .join('.');
}
