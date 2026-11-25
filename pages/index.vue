<script setup lang="ts">
import GcIcon from '~/components/site/GcIcon.vue'
import SiteFooter from '~/components/site/SiteFooter.vue'
import SiteHeader from '~/components/site/SiteHeader.vue'

definePageMeta({ layout: 'bare' })

declare global {
    interface Window {
        turnstile?: {
            render: (
                container: HTMLElement,
                options: { sitekey: string; action: string }
            ) => void
        }
        onTurnstileLoad?: () => void
    }
}

const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const turnstileContainer = ref<HTMLElement | null>(null)
const hasContactError = computed(() => route.query.contact === 'erreur')
const yearsOfCraft = new Date().getFullYear() - 2011

const references = [
    'Éléphant Bleu',
    'Eurométropole de Strasbourg',
    'Institut Henri Poincaré',
    'Wolfberger',
    'iTurf',
    'DDEC',
]

const sideProjects = [
    {
        href: 'https://tcgbag.com/',
        icon: 'cards',
        title: 'TCGBag',
        description:
            'Suit la valeur d’une collection Pokémon et One Piece, au prix du marché du jour.',
    },
    {
        href: 'https://auto-sorting-spotify-liked-songs.netlify.app',
        icon: 'music',
        title: 'Tri des titres Spotify',
        description:
            'Range automatiquement vos titres likés dans des playlists par genre.',
    },
    {
        href: 'https://codepen.io/gcazin',
        icon: 'monitor',
        title: 'Windows 10 en pur CSS',
        description:
            'Le bureau de Windows 10 recréé sans une ligne de JavaScript.',
    },
    {
        href: 'https://colibri-pma-hope.myshopify.com',
        icon: 'bag',
        title: 'Colibri PMA Hope',
        description: 'Une boutique en ligne sur Shopify, claire et rassurante.',
    },
    {
        href: 'https://beta-slimys.netlify.app',
        icon: 'star',
        title: 'Slimys',
        description: 'Le site vitrine d’un projet de collection numérique.',
    },
] as const

const services = [
    {
        icon: 'browser',
        title: 'Sites sur mesure',
        description:
            'Un site vitrine ou institutionnel rapide, bien référencé, et que vous pouvez mettre à jour vous-même.',
    },
    {
        icon: 'flag',
        title: 'Applications & produits',
        description:
            'Plateformes, espaces clients, SaaS : je construis l’application complète, de la base de données à l’interface.',
    },
    {
        icon: 'refresh',
        title: 'Refonte & renfort',
        description:
            'Moderniser un site existant ou renforcer votre équipe le temps d’un projet, en télétravail.',
    },
] as const

const technologies = [
    'Laravel',
    'PHP',
    'React',
    'Next.js',
    'VueJS',
    'TypeScript',
    'Tailwind',
    'Figma',
]

const experiences = [
    {
        period: 'Depuis 2024',
        title: 'Développeur web freelance',
        description:
            'Sites et applications pour des agences et des entreprises, et mes propres produits.',
    },
    {
        period: '2020 — 2022',
        title: 'Développeur web chez Diatem',
        description:
            'Interfaces interactives et sites pour les clients de l’agence.',
    },
    {
        period: '2020',
        title: 'Stage chez Armatis',
        description: 'Une app mobile pour organiser les repas entre collègues.',
    },
    {
        period: '2019',
        title: 'Stage chez Mesconcierges',
        description: 'Un site construit avec le framework Cocorico.',
    },
    {
        period: '2018',
        title: 'Stage à la mairie d’Échinghen',
        description: 'Le site de la commune — mon tout premier projet pro.',
    },
]

const socials = [
    { href: 'https://www.linkedin.com/in/guillaume-cazin', label: 'LinkedIn' },
    { href: 'https://github.com/gcazin', label: 'GitHub' },
    { href: 'https://codepen.io/gcazin', label: 'CodePen' },
]

const renderTurnstile = () => {
    if (window.turnstile === undefined || turnstileContainer.value === null) {
        return
    }

    window.turnstile.render(turnstileContainer.value, {
        sitekey: runtimeConfig.public.turnstileSiteKey,
        action: 'contact',
    })
}

onMounted(() => {
    if (window.turnstile !== undefined) {
        renderTurnstile()
    } else {
        window.onTurnstileLoad = renderTurnstile
    }
})

useHead({
    title: 'Guillaume Cazin — Développeur web freelance',
    script: [
        {
            src: 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onTurnstileLoad',
            async: true,
            defer: true,
        },
    ],
})
</script>

<template>
    <SiteHeader />

    <section id="top" class="wrap hero">
        <div class="hero-text">
            <div class="rv d1 availability">
                <span class="pulse availability-dot"></span>
                Disponible pour de nouveaux projets
            </div>
            <h1 class="rv d2 display hero-title">
                Des sites et des apps qu’on a
                <span class="ul">envie d’utiliser</span>.
            </h1>
            <p class="rv d3 lead hero-lead">
                Je suis Guillaume, développeur web freelance à Boulogne-sur-Mer.
                Je transforme vos idées en produits en ligne soignés, rapides et
                simples à faire évoluer — du premier croquis à la mise en ligne.
            </p>
            <div class="rv d4 hero-actions">
                <a class="btn pill pill-navy" href="#contact"
                    >Parlons de votre projet<GcIcon
                        class="arr"
                        name="arrowUpRight"
                        :size="18"
                        :stroke-width="2"
                /></a>
                <a class="btn pill pill-outline" href="/cv/">Voir mon CV</a>
            </div>
        </div>

        <div class="rv d3 hero-visual">
            <div class="fl2 hero-bubble" aria-hidden="true"></div>
            <div class="hero-frame">
                <svg
                    class="spin hero-rings"
                    aria-hidden="true"
                    width="78%"
                    viewBox="0 0 200 200"
                >
                    <circle
                        cx="100"
                        cy="100"
                        r="96"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                        stroke-dasharray="3 9"
                    />
                    <circle
                        cx="100"
                        cy="100"
                        r="64"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                    />
                </svg>
                <NuxtImg
                    src="/images/misc/avatar.webp"
                    class="hero-photo"
                    alt="Guillaume Cazin"
                    width="280"
                    height="280"
                />
            </div>
            <div class="fl1 hero-stat">
                <div class="hero-stat-value">{{ yearsOfCraft }}+ ans</div>
                <div class="hero-stat-label">à fabriquer du web</div>
            </div>
            <div class="fl3 hero-location">
                <GcIcon name="pin" :size="16" :stroke-width="2" />
                Boulogne-sur-Mer · 100 % à distance
            </div>
        </div>
    </section>

    <section aria-label="Ils m’ont fait confiance" class="mqw marquee">
        <div class="mq marquee-track">
            <template v-for="copy in 2" :key="copy">
                <template
                    v-for="reference in references"
                    :key="`${copy}-${reference}`"
                >
                    <span :aria-hidden="copy === 2 ? 'true' : undefined">{{
                        reference
                    }}</span>
                    <span aria-hidden="true" class="marquee-star">✦</span>
                </template>
            </template>
        </div>
    </section>

    <section id="projets" class="wrap section-gap">
        <div class="sr section-head">
            <div>
                <p class="eyebrow">Projets</p>
                <h2 class="title heading-gap">
                    Quelques projets<br />dont je suis fier.
                </h2>
            </div>
            <p class="muted section-intro">
                Des produits que j’ai imaginés et que je fais vivre, et des
                réalisations pour des clients.
            </p>
        </div>

        <div class="grid-featured">
            <article class="card sr panel featured">
                <div class="thumb featured-thumb thumb-tint">
                    <div class="thumb-in featured-art">
                        <div
                            class="art-disc art-disc-navy"
                            aria-hidden="true"
                        ></div>
                        <div class="art-pill" aria-hidden="true"></div>
                        <span class="featured-name">x-memes</span>
                    </div>
                </div>
                <div class="featured-body">
                    <p class="eyebrow eyebrow-muted">
                        Produit · Site + app iOS
                    </p>
                    <h3 class="featured-title">
                        La bibliothèque de mèmes francophone
                    </h3>
                    <p class="muted">
                        Retrouver, partager et télécharger le bon mème en deux
                        secondes, sur le web comme sur iPhone.
                    </p>
                    <div class="featured-links">
                        <a class="btn text-link" href="https://x-memes.com"
                            >x-memes.com<GcIcon
                                class="arr"
                                name="arrowUpRight"
                                :size="16"
                                :stroke-width="2"
                        /></a>
                    </div>
                </div>
            </article>

            <article class="card sr panel featured">
                <div class="thumb featured-thumb thumb-navy">
                    <div class="thumb-in featured-art">
                        <div class="art-ring" aria-hidden="true"></div>
                        <div class="art-shield" aria-hidden="true">
                            <GcIcon
                                name="shield"
                                size="42%"
                                :stroke-width="2"
                            />
                        </div>
                        <span class="featured-name featured-name-inverted"
                            >Hookless</span
                        >
                    </div>
                </div>
                <div class="featured-body">
                    <p class="eyebrow eyebrow-muted">
                        Produit · Extension + app mobile
                    </p>
                    <h3 class="featured-title">Ne plus mordre à l’hameçon</h3>
                    <p class="muted">
                        Repère les faux sites de banques et de services publics,
                        et vous prévient avant que vous ne tapiez un mot de
                        passe ou un numéro de carte.
                    </p>
                    <div class="featured-links">
                        <a
                            class="btn pill pill-sm pill-navy"
                            href="/projets/hookless/"
                            >Voir l’étude de cas<GcIcon
                                class="arr"
                                name="arrowRight"
                                :size="16"
                                :stroke-width="2"
                        /></a>
                        <a class="text-link" href="https://hookless.gcazin.com"
                            >hookless.gcazin.com</a
                        >
                    </div>
                </div>
            </article>
        </div>

        <div class="grid-side">
            <a
                v-for="project in sideProjects"
                :key="project.title"
                class="card sr panel side-card"
                :href="project.href"
            >
                <span aria-hidden="true" class="side-icon"
                    ><GcIcon :name="project.icon"
                /></span>
                <span class="side-title">{{ project.title }}</span>
                <span class="muted side-description">{{
                    project.description
                }}</span>
            </a>
        </div>
    </section>

    <section id="services" class="wrap section-gap">
        <div class="sr">
            <p class="eyebrow">Services</p>
            <h2 class="title heading-gap services-title">
                Ce que je peux faire pour vous.
            </h2>
        </div>
        <div class="grid-services">
            <div
                v-for="service in services"
                :key="service.title"
                class="card sr service"
            >
                <span aria-hidden="true" class="service-icon"
                    ><GcIcon :name="service.icon" :size="24"
                /></span>
                <h3 class="service-title">{{ service.title }}</h3>
                <p class="muted service-description">
                    {{ service.description }}
                </p>
            </div>
        </div>
        <div class="sr chips">
            <span class="muted chips-label">Avec, entre autres :</span>
            <span
                v-for="technology in technologies"
                :key="technology"
                class="chip"
                >{{ technology }}</span
            >
        </div>
    </section>

    <section id="parcours" class="wrap section-gap parcours">
        <div class="sr parcours-intro">
            <p class="eyebrow">Parcours</p>
            <h2 class="title heading-gap">De la mairie aux grands comptes.</h2>
            <div class="stats">
                <div class="stat">
                    <div class="stat-value">47+</div>
                    <div class="muted stat-label">projets sur GitHub</div>
                </div>
                <div class="stat">
                    <div class="stat-value">1 060+</div>
                    <div class="muted stat-label">commits</div>
                </div>
            </div>
        </div>
        <ol class="timeline">
            <li
                v-for="(experience, index) in experiences"
                :key="experience.title"
                class="sr timeline-item"
            >
                <span
                    aria-hidden="true"
                    class="timeline-dot"
                    :class="{ 'timeline-dot-current': index === 0 }"
                ></span>
                <div class="timeline-body">
                    <p
                        class="eyebrow"
                        :class="{ 'eyebrow-muted': index !== 0 }"
                    >
                        {{ experience.period }}
                    </p>
                    <h3 class="subtitle timeline-title">
                        {{ experience.title }}
                    </h3>
                    <p class="muted timeline-description">
                        {{ experience.description }}
                    </p>
                </div>
            </li>
        </ol>
    </section>

    <section id="contact" class="band-outer contact">
        <div class="band sr">
            <div class="fl1 contact-bubble" aria-hidden="true"></div>
            <div class="fl2 contact-blob" aria-hidden="true"></div>
            <div class="contact-inner">
                <div class="contact-text">
                    <p class="eyebrow contact-eyebrow">Contact</p>
                    <h2 class="contact-title">
                        Une idée ou un projet en tête&#8239;?
                    </h2>
                    <p class="contact-lead">
                        Racontez-moi ce que vous imaginez, on en discute autour
                        d’un café — virtuel ou à Boulogne.
                    </p>
                    <dl class="contact-details">
                        <div>
                            <dt class="eyebrow contact-eyebrow">E-mail</dt>
                            <dd>
                                <a href="mailto:contact@guillaume-cazin.fr"
                                    >contact@guillaume-cazin.fr</a
                                >
                            </dd>
                        </div>
                        <div>
                            <dt class="eyebrow contact-eyebrow">Horaires</dt>
                            <dd>Du lundi au vendredi, 9 h – 18 h</dd>
                        </div>
                    </dl>
                    <div class="contact-socials">
                        <a
                            v-for="social in socials"
                            :key="social.label"
                            class="btn pill pill-sm pill-ghost-band"
                            :href="social.href"
                            >{{ social.label }}</a
                        >
                    </div>
                </div>

                <form
                    name="contact"
                    method="POST"
                    action="/api/contact"
                    class="contact-form"
                >
                    <p class="honeypot" aria-hidden="true">
                        <label>
                            Ne pas remplir ce champ :
                            <input
                                name="bot-field"
                                tabindex="-1"
                                autocomplete="off"
                            />
                        </label>
                    </p>
                    <div class="field">
                        <label for="last_name">Nom</label>
                        <input
                            id="last_name"
                            name="last_name"
                            type="text"
                            required
                            maxlength="100"
                            autocomplete="family-name"
                        />
                    </div>
                    <div class="field">
                        <label for="first_name">Prénom</label>
                        <input
                            id="first_name"
                            name="first_name"
                            type="text"
                            required
                            maxlength="100"
                            autocomplete="given-name"
                        />
                    </div>
                    <div class="field">
                        <label for="email">E-mail</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autocomplete="email"
                        />
                    </div>
                    <div class="field">
                        <label for="telephone"
                            >Téléphone
                            <span class="optional">(facultatif)</span></label
                        >
                        <input
                            id="telephone"
                            name="telephone"
                            type="tel"
                            maxlength="100"
                            autocomplete="tel"
                        />
                    </div>
                    <div class="field full">
                        <label for="message"
                            >Votre projet en quelques mots</label
                        >
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows="5"
                            maxlength="5000"
                        ></textarea>
                    </div>
                    <div class="full consent">
                        <input
                            id="agree"
                            name="agree"
                            type="checkbox"
                            required
                        />
                        <label for="agree" class="muted"
                            >J’accepte que mes données servent à me recontacter,
                            conformément à la
                            <a href="/privacy-policy/"
                                >politique de confidentialité</a
                            >.</label
                        >
                    </div>
                    <div ref="turnstileContainer" class="full"></div>
                    <p
                        v-if="hasContactError"
                        class="full form-error"
                        role="alert"
                    >
                        Le message n’a pas pu être envoyé. Vérifiez les champs
                        puis réessayez.
                    </p>
                    <div class="full">
                        <button class="btn pill pill-navy submit" type="submit">
                            Envoyer le message<GcIcon
                                class="arr"
                                name="arrowUpRight"
                                :size="18"
                                :stroke-width="2"
                            />
                        </button>
                    </div>
                </form>
            </div>
            <SiteFooter />
        </div>
    </section>
</template>

<style scoped>
.hero {
    padding-top: clamp(32px, 6vw, 88px);
    padding-bottom: clamp(56px, 7vw, 104px);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: clamp(40px, 5vw, 72px);
}

.hero-text {
    flex: 999 1 520px;
    min-width: 0;
}

.availability {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 16px 8px 12px;
    border-radius: 999px;
    background: var(--raised);
    border: 1px solid var(--line);
    font-size: 14px;
    font-weight: 500;
}

.availability-dot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: var(--apricot);
}

.hero-title {
    margin-top: 28px;
}

.hero-lead {
    margin-top: 28px;
    max-width: 540px;
}

.hero-actions {
    margin-top: 36px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.hero-visual {
    flex: 1 1 340px;
    min-width: 0;
    max-width: 480px;
    margin: 0 auto;
    position: relative;
    aspect-ratio: 1 / 1.08;
}

.hero-bubble {
    position: absolute;
    left: -4%;
    top: 6%;
    width: 38%;
    aspect-ratio: 1;
    border-radius: 999px;
    background: var(--tint);
}

.hero-frame {
    position: absolute;
    inset: 8% 4% 4% 14%;
    border-radius: 48px;
    background: var(--navy);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-rings {
    position: absolute;
    opacity: 0.18;
    color: var(--on-navy);
}

.hero-photo {
    position: relative;
    width: 58%;
    height: auto;
    aspect-ratio: 1;
    border-radius: 999px;
    object-fit: cover;
    background: var(--tint);
}

.hero-stat {
    position: absolute;
    right: -2%;
    top: 0;
    padding: 14px 18px;
    border-radius: 20px;
    background: var(--raised);
    border: 1px solid var(--line);
    box-shadow: var(--lift);
}

.hero-stat-value {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 30px;
    line-height: 1;
    letter-spacing: -0.03em;
}

.hero-stat-label {
    font-size: 13px;
    color: var(--muted);
}

.hero-location {
    position: absolute;
    left: 0;
    bottom: 10%;
    padding: 12px 18px;
    border-radius: 999px;
    background: var(--apricot);
    color: var(--ink-on-apricot);
    font-weight: 600;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.marquee {
    overflow: hidden;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    padding: 28px 0;
    background: var(--raised);
}

.marquee-track {
    gap: 64px;
    padding-left: 64px;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: clamp(20px, 2vw, 26px);
    letter-spacing: -0.02em;
    color: var(--muted);
    white-space: nowrap;
}

.marquee-star {
    color: var(--apricot);
}

.section-head {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: 20px;
}

.heading-gap {
    margin-top: 12px;
}

.section-intro {
    margin: 0;
    max-width: 400px;
}

.grid-featured {
    margin-top: clamp(40px, 5vw, 64px);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 480px), 1fr));
    gap: 24px;
}

.featured {
    padding: 14px;
    display: flex;
    flex-direction: column;
}

.featured-thumb {
    border-radius: 20px;
    aspect-ratio: 16 / 10;
}

.thumb-tint {
    background: var(--tint);
}

.thumb-navy {
    background: var(--navy);
}

.featured-art {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: flex-end;
    padding: 28px;
    box-sizing: border-box;
}

.art-disc {
    position: absolute;
    right: 9%;
    top: 14%;
    width: 34%;
    aspect-ratio: 1;
    border-radius: 999px;
}

.art-disc-navy {
    background: var(--navy);
}

.art-pill {
    position: absolute;
    right: 30%;
    top: 46%;
    width: 22%;
    aspect-ratio: 2 / 1;
    border-radius: 999px;
    background: var(--apricot);
}

.art-ring {
    position: absolute;
    right: 10%;
    top: 12%;
    width: 36%;
    aspect-ratio: 1;
    border-radius: 999px;
    border: 2px solid var(--on-navy);
    opacity: 0.35;
}

.art-shield {
    position: absolute;
    right: 16%;
    top: 22%;
    width: 24%;
    aspect-ratio: 1;
    border-radius: 999px;
    background: var(--apricot);
    color: var(--ink-on-apricot);
    display: flex;
    align-items: center;
    justify-content: center;
}

.featured-name {
    position: relative;
    font-family: var(--font-display);
    font-weight: 700;
    font-size: clamp(40px, 5vw, 64px);
    line-height: 0.9;
    letter-spacing: -0.04em;
    color: var(--ink);
}

.featured-name-inverted {
    color: var(--on-navy);
}

.featured-body {
    padding: 22px 14px 14px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-grow: 1;
}

.featured-body p {
    margin: 0;
}

.featured-title {
    margin: 0;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 30px;
    line-height: 1.15;
    letter-spacing: -0.02em;
}

.featured-links {
    margin-top: auto;
    padding-top: 12px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px 24px;
}

.text-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 44px;
    font-weight: 600;
    text-decoration: none;
}

.grid-side {
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
    gap: 24px;
}

.side-card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 28px;
    text-decoration: none;
    color: var(--ink);
}

.side-card:hover {
    color: var(--ink);
}

.side-icon {
    width: 44px;
    height: 44px;
    border-radius: 999px;
    background: var(--tint);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--navy-ink);
}

.side-title {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 21px;
    letter-spacing: -0.015em;
}

.side-description {
    font-size: 15px;
}

.services-title {
    max-width: 760px;
}

.grid-services {
    margin-top: clamp(40px, 5vw, 64px);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
    gap: 24px;
}

.service {
    padding: 36px 32px;
    border-radius: 28px;
    background: var(--tint);
}

.service-icon {
    width: 52px;
    height: 52px;
    border-radius: 16px;
    background: var(--navy);
    color: var(--on-navy);
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.service-title {
    margin: 24px 0 0;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 24px;
    letter-spacing: -0.015em;
}

.service-description {
    margin: 10px 0 0;
}

.chips {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
}

.chips-label {
    font-size: 14px;
    margin-right: 6px;
}

.parcours {
    padding-bottom: clamp(80px, 9vw, 128px);
    display: flex;
    flex-wrap: wrap;
    gap: 48px;
}

.parcours-intro {
    flex: 1 1 320px;
}

.stats {
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
    max-width: 380px;
}

.stat {
    padding: 20px;
    border-radius: 20px;
    background: var(--raised);
    border: 1px solid var(--line);
}

.stat-value {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 34px;
    line-height: 1;
    letter-spacing: -0.03em;
}

.stat-label {
    margin-top: 6px;
    font-size: 14px;
}

.timeline {
    flex: 999 1 560px;
    min-width: 0;
    margin: 0;
    padding: 0;
    list-style: none;
}

.timeline-item {
    display: flex;
    gap: 24px;
    padding-bottom: 32px;
}

.timeline-item:last-child {
    padding-bottom: 0;
}

.timeline-dot {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    margin-top: 6px;
    border-radius: 999px;
    background: var(--navy);
    box-shadow:
        0 0 0 6px var(--paper),
        0 0 0 7px var(--line);
}

.timeline-dot-current {
    background: var(--apricot);
}

.timeline-body {
    flex: 1;
    padding-bottom: 28px;
    border-bottom: 1px solid var(--line);
}

.timeline-item:last-child .timeline-body {
    padding-bottom: 0;
    border-bottom: 0;
}

.timeline-title,
.timeline-description {
    margin-top: 4px;
}

.timeline-description {
    margin-bottom: 0;
}

.contact-bubble {
    position: absolute;
    right: -80px;
    top: -80px;
    width: 280px;
    height: 280px;
    border-radius: 999px;
    background: #ffffff10;
}

.contact-blob {
    position: absolute;
    right: 18%;
    bottom: -60px;
    width: 140px;
    height: 140px;
    border-radius: 999px;
    background: var(--apricot);
    opacity: 0.9;
}

.contact-inner {
    position: relative;
    max-width: 1192px;
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    padding: clamp(56px, 7vw, 104px) var(--gutter);
    display: flex;
    flex-wrap: wrap;
    gap: 56px;
}

.contact-text {
    flex: 1 1 340px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.contact-eyebrow {
    color: var(--on-band-muted);
}

.contact-title {
    margin: 0;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: clamp(40px, 5.5vw, 72px);
    line-height: 0.98;
    letter-spacing: -0.035em;
}

.contact-lead {
    margin: 0;
    max-width: 420px;
    font-size: 18px;
    color: var(--on-band-muted);
}

.contact-details {
    margin: 12px 0 0;
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.contact-details dd {
    margin: 4px 0 0;
    font-size: 18px;
}

.contact-details a {
    color: var(--on-band);
}

.contact-socials {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.contact-form {
    flex: 1 1 460px;
    min-width: 0;
    background: var(--raised);
    border: 1px solid var(--line);
    color: var(--ink);
    border-radius: 28px;
    padding: clamp(24px, 3vw, 40px);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 18px;
}

.honeypot {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
}

.full {
    grid-column: 1 / -1;
}

.optional {
    font-weight: 400;
    color: var(--muted);
}

.consent {
    display: flex;
    gap: 12px;
    align-items: flex-start;
}

.consent input {
    width: 22px;
    height: 22px;
    margin: 1px 0 0;
    flex-shrink: 0;
    accent-color: var(--navy);
}

.consent label {
    font-size: 14px;
    line-height: 1.5;
}

.form-error {
    margin: 0;
    padding: 12px 16px;
    border-radius: 16px;
    background: #fdecea;
    color: #8a1c12;
    font-weight: 500;
}

.submit {
    height: 54px;
    padding: 0 28px;
    border: 0;
}
</style>
