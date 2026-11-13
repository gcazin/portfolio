import { analyzeUrl, Level } from './src/lib/analyzer.js';
import { extractFirstUrl } from './src/lib/links.js';

const LABELS = {
    [Level.Danger]: 'Arnaque probable',
    [Level.Warning]: 'Lien suspect',
    [Level.Official]: 'Site officiel',
    [Level.Neutral]: 'Rien de suspect détecté',
};

const form = document.getElementById('try-form');
const input = document.getElementById('try-input');
const result = document.getElementById('try-result');

function check(text) {
    const url = extractFirstUrl(text);
    const verdict = url ? analyzeUrl(url) : null;
    result.hidden = false;
    if (!verdict || verdict.level === Level.Ignored) {
        result.dataset.level = 'neutral';
        document.getElementById('try-title-result').textContent = 'Aucun lien trouvé dans ce texte.';
        document.getElementById('try-host').textContent = '';
        document.getElementById('try-reasons').replaceChildren();
        return;
    }
    result.dataset.level = verdict.level;
    document.getElementById('try-title-result').textContent = LABELS[verdict.level] ?? LABELS[Level.Neutral];
    document.getElementById('try-host').textContent = verdict.hostname;
    const reasons = verdict.level === Level.Official ? [`Ce domaine appartient bien à ${verdict.brand}.`] : verdict.reasons.map((reason) => reason.message);
    document.getElementById('try-reasons').replaceChildren(...reasons.map((text) => {
        const item = document.createElement('li');
        item.textContent = text;
        return item;
    }));
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    check(input.value);
});

document.querySelectorAll('[data-example]').forEach((button) => {
    button.addEventListener('click', () => {
        input.value = button.dataset.example;
        check(input.value);
    });
});
