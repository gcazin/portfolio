<script setup lang="ts">
import GcIcon from '~/components/site/GcIcon.vue'
import ThemeToggle from '~/components/site/ThemeToggle.vue'

const links = [
    { href: '/#projets', label: 'Projets' },
    { href: '/#services', label: 'Services' },
    { href: '/#parcours', label: 'Parcours' },
    { href: '/#contact', label: 'Contact' },
]

const isMenuOpen = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
    isMenuOpen.value = false
}
</script>

<template>
    <header class="wrap header rv">
        <a href="/" aria-label="Guillaume Cazin, accueil" class="brand">
            <span class="monogram">gc</span>
            <span class="brand-name">Guillaume Cazin</span>
        </a>
        <div class="actions">
            <nav class="navlinks nav" aria-label="Navigation principale">
                <a
                    v-for="link in links"
                    :key="link.href"
                    class="navlink"
                    :href="link.href"
                    >{{ link.label }}</a
                >
            </nav>
            <ThemeToggle />
            <a class="btn navlinks pill pill-sm pill-navy" href="/#contact"
                >Discutons</a
            >
            <button
                type="button"
                class="burger icon-btn burger-btn"
                aria-controls="menu-mobile"
                :aria-expanded="isMenuOpen ? 'true' : 'false'"
                aria-label="Ouvrir le menu"
                @click="toggleMenu"
            >
                <GcIcon name="menu" :stroke-width="2" />
            </button>
        </div>
    </header>

    <div
        v-if="isMenuOpen"
        id="menu-mobile"
        class="sheet menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
    >
        <div class="menu-top">
            <span class="monogram monogram-inverted">gc</span>
            <div class="menu-buttons">
                <ThemeToggle on-navy />
                <button
                    type="button"
                    class="icon-btn close-btn"
                    aria-label="Fermer le menu"
                    @click="closeMenu"
                >
                    <GcIcon name="close" :stroke-width="2" />
                </button>
            </div>
        </div>
        <nav aria-label="Menu mobile" class="menu-links">
            <a
                v-for="(link, index) in links"
                :key="link.href"
                class="mlink menu-link"
                :class="`d${index + 1}`"
                :href="link.href"
                @click="closeMenu"
                >{{ link.label
                }}<span aria-hidden="true" class="menu-index"
                    >0{{ index + 1 }}</span
                ></a
            >
        </nav>
        <div class="mlink d5 menu-footer">
            <a class="pill pill-apricot" href="/#contact" @click="closeMenu"
                >Parlons de votre projet</a
            >
            <a class="menu-mail" href="mailto:contact@guillaume-cazin.fr"
                >contact@guillaume-cazin.fr</a
            >
        </div>
    </div>
</template>

<style scoped>
.header {
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
}

.brand {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    color: var(--ink);
}

.monogram {
    width: 44px;
    height: 44px;
    border-radius: 999px;
    background: var(--navy);
    color: var(--on-navy);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 18px;
    letter-spacing: -0.04em;
}

.monogram-inverted {
    background: var(--on-navy);
    color: var(--navy);
}

.brand-name {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 18px;
    letter-spacing: -0.02em;
}

.actions {
    display: flex;
    align-items: center;
    gap: 12px;
}

.nav {
    display: flex;
    align-items: center;
    gap: 28px;
    margin-right: 12px;
    font-size: 15px;
    font-weight: 500;
}

.burger-btn {
    border: 0;
    background: var(--navy);
    color: var(--on-navy);
}

.menu {
    position: fixed;
    inset: 0;
    z-index: 50;
    background: var(--navy);
    color: var(--on-navy);
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-sizing: border-box;
    overflow: auto;
}

.menu-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.menu-buttons {
    display: flex;
    gap: 10px;
}

.close-btn {
    border: 0;
    background: var(--on-navy);
    color: var(--navy);
}

.menu-links {
    margin-top: 56px;
    display: flex;
    flex-direction: column;
}

.menu-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 0;
    border-bottom: 1px solid #ffffff26;
    color: var(--on-navy);
    text-decoration: none;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 40px;
    line-height: 1;
    letter-spacing: -0.03em;
}

.menu-index {
    font-size: 15px;
    font-family: var(--font-body);
    font-weight: 500;
    opacity: 0.7;
}

.menu-footer {
    margin-top: auto;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.menu-mail {
    text-align: center;
    color: var(--on-navy);
    opacity: 0.85;
}
</style>
