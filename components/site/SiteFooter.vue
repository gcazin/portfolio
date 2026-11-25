<script setup lang="ts">
withDefaults(defineProps<{ backToPortfolio?: boolean }>(), {
    backToPortfolio: false,
})

const currentYear = new Date().getFullYear()
</script>

<template>
    <footer class="footer">
        <div class="footer-inner">
            <span
                >© {{ currentYear }} Guillaume Cazin · SIREN 985 175 728</span
            >
            <a v-if="backToPortfolio" href="/">Retour au portfolio</a>
            <span v-else class="footer-links">
                <a href="/legal-notice/">Mentions légales</a>
                <a href="/privacy-policy/">Confidentialité</a>
            </span>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    position: relative;
    margin-top: auto;
    border-top: 1px solid #ffffff1f;
}

.footer-inner {
    max-width: 1192px;
    margin: 0 auto;
    padding: 24px var(--gutter);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 12px;
    font-size: 14px;
    color: var(--on-band-muted);
}

.footer-links {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.footer a {
    color: var(--on-band-muted);
}

.footer a:hover {
    color: var(--on-band);
}
</style>
