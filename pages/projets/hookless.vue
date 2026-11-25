<script setup lang="ts">
import CtaBand from '~/components/site/CtaBand.vue'
import GcIcon from '~/components/site/GcIcon.vue'
import ThemeToggle from '~/components/site/ThemeToggle.vue'

definePageMeta({ layout: 'bare' })

const facts = [
    { label: 'Rôle', value: 'Conception & développement' },
    { label: 'Plateformes', value: 'Navigateur · Mobile · Web' },
    { label: 'Année', value: '2026' },
]

const steps = [
    {
        title: 'Vous naviguez',
        description:
            'Hookless reste discret en arrière-plan, dans le navigateur ou sur le téléphone.',
    },
    {
        title: 'Il repère l’imitation',
        description:
            'Le site visité se fait passer pour une banque ou un service public ? Hookless le détecte.',
    },
    {
        title: 'Il vous arrête',
        description:
            'Une alerte plein écran s’affiche avant que vous ne saisissiez un mot de passe ou une carte.',
    },
]

const deliverables = [
    {
        label: 'Conception',
        description:
            'Le parcours, le ton du message d’alerte, l’identité Hookless.',
    },
    {
        label: 'Extension',
        description: 'La détection dans le navigateur et l’alerte plein écran.',
    },
    { label: 'App mobile', description: 'La même protection sur téléphone.' },
    {
        label: 'Site',
        description:
            'hookless.gcazin.com, pour présenter et installer l’outil.',
    },
]

useHead({
    title: 'Hookless, étude de cas — Guillaume Cazin',
    meta: [
        {
            name: 'description',
            content:
                'Étude de cas : Hookless, extension de navigateur et app mobile qui repèrent les faux sites de banques et de services publics avant la saisie d’un mot de passe ou d’une carte.',
        },
    ],
})
</script>

<template>
    <header class="wrap case-header">
        <a class="btn pill pill-sm pill-outline" href="/#projets"
            ><GcIcon name="arrowLeft" :size="16" :stroke-width="2" />Tous les
            projets</a
        >
        <ThemeToggle />
    </header>

    <main>
        <section class="wrap case-hero">
            <p class="rv d1 eyebrow">Étude de cas · Produit personnel</p>
            <h1 class="rv d2 display case-title">
                Hookless, pour ne plus
                <span class="ul">mordre à l’hameçon</span>.
            </h1>
            <p class="rv d3 lead case-lead">
                Une extension de navigateur et une app mobile qui repèrent les
                faux sites de banques et de services publics, et vous arrêtent
                avant que vous ne donniez un mot de passe ou un numéro de carte.
            </p>
            <dl class="rv d4 facts">
                <div v-for="fact in facts" :key="fact.label" class="chip fact">
                    <dt class="muted">{{ fact.label }}</dt>
                    <dd>{{ fact.value }}</dd>
                </div>
            </dl>
        </section>

        <section class="wrap">
            <div class="rv d4 case-visual">
                <div class="fl1 case-shield" aria-hidden="true">
                    <GcIcon name="shield" :size="44" :stroke-width="2" />
                </div>
                <div class="case-screen">
                    <NuxtImg
                        src="/images/projects/hookless.webp"
                        alt="Capture de Hookless"
                        class="case-screen-image"
                        width="1200"
                        height="750"
                    />
                </div>
            </div>
        </section>

        <section class="wrap section-gap case-split">
            <div class="sr">
                <p class="eyebrow">Le problème</p>
                <h2 class="title case-heading">
                    Un faux site ressemble trait pour trait au vrai.
                </h2>
            </div>
            <div class="sr case-prose">
                <p class="lead">
                    Logo, couleurs, formulaire : les pages qui imitent une
                    banque ou un service public sont devenues très
                    convaincantes. Quand on s’en rend compte, il est souvent
                    trop tard — les identifiants ou la carte sont déjà partis.
                </p>
                <p class="lead">
                    L’idée de Hookless : intervenir au seul moment qui compte,
                    juste avant la saisie, avec un message impossible à ignorer.
                </p>
            </div>
        </section>

        <section class="wrap section-gap">
            <div class="sr">
                <p class="eyebrow">Comment ça marche</p>
                <h2 class="title case-heading">Trois temps, zéro réglage.</h2>
            </div>
            <ol class="steps">
                <li
                    v-for="(step, index) in steps"
                    :key="step.title"
                    class="card sr panel step"
                >
                    <span
                        class="step-number"
                        :class="{
                            'step-number-last': index === steps.length - 1,
                        }"
                        >{{ index + 1 }}</span
                    >
                    <h3 class="step-title">{{ step.title }}</h3>
                    <p class="muted step-description">{{ step.description }}</p>
                </li>
            </ol>
        </section>

        <section class="wrap section-gap case-delivered">
            <div class="sr">
                <p class="eyebrow">Ce que j’ai fait</p>
                <h2 class="title case-heading">Le produit de bout en bout.</h2>
            </div>
            <dl class="deliverables">
                <div
                    v-for="deliverable in deliverables"
                    :key="deliverable.label"
                    class="sr deliverable"
                >
                    <dt class="deliverable-label">{{ deliverable.label }}</dt>
                    <dd class="muted deliverable-description">
                        {{ deliverable.description }}
                    </dd>
                </div>
            </dl>
        </section>
    </main>

    <CtaBand
        title="Envie d’un produit aussi soigné&#8239;?"
        secondary-href="https://hookless.gcazin.com"
        secondary-label="Essayer Hookless"
        back-to-portfolio
    />
</template>

<style scoped>
.case-header {
    padding-top: 24px;
    padding-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
}

.case-hero {
    padding-top: clamp(24px, 5vw, 72px);
    padding-bottom: clamp(40px, 5vw, 64px);
}

.case-title {
    margin-top: 20px;
    max-width: 1000px;
}

.case-lead {
    margin-top: 28px;
    max-width: 680px;
}

.facts {
    margin: 36px 0 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.fact {
    display: inline-flex;
    gap: 8px;
}

.fact dd {
    margin: 0;
    font-weight: 600;
}

.case-visual {
    position: relative;
    border-radius: 40px;
    background: var(--navy);
    aspect-ratio: 16 / 8;
    min-height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: clamp(24px, 5vw, 72px);
    box-sizing: border-box;
    overflow: hidden;
}

.case-shield {
    position: absolute;
    right: 6%;
    top: 8%;
    z-index: 1;
    width: 96px;
    height: 96px;
    border-radius: 999px;
    background: var(--apricot);
    color: var(--ink-on-apricot);
    display: flex;
    align-items: center;
    justify-content: center;
}

.case-screen {
    width: min(100%, 860px);
    aspect-ratio: 16 / 10;
    border-radius: 20px;
    background: var(--tint);
    overflow: hidden;
    box-shadow: var(--lift);
}

.case-screen-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
}

.case-heading {
    margin-top: 12px;
    max-width: 720px;
}

.case-split {
    display: flex;
    flex-wrap: wrap;
    gap: 32px 64px;
}

.case-split > * {
    flex: 1 1 380px;
}

.case-prose .lead {
    margin: 0 0 20px;
}

.steps {
    margin: clamp(32px, 4vw, 56px) 0 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
    gap: 24px;
}

.step {
    padding: 32px;
}

.step-number {
    width: 48px;
    height: 48px;
    border-radius: 999px;
    background: var(--navy);
    color: var(--on-navy);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 20px;
}

.step-number-last {
    background: var(--apricot);
    color: var(--ink-on-apricot);
}

.step-title {
    margin: 24px 0 0;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 24px;
    letter-spacing: -0.015em;
}

.step-description {
    margin: 10px 0 0;
}

.case-delivered {
    padding-bottom: clamp(80px, 9vw, 128px);
}

.deliverables {
    margin: clamp(32px, 4vw, 56px) 0 0;
    border-top: 1px solid var(--line);
}

.deliverable {
    display: grid;
    grid-template-columns: minmax(0, 220px) minmax(0, 1fr);
    gap: 8px 32px;
    padding: 24px 0;
    border-bottom: 1px solid var(--line);
}

.deliverable-label {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 20px;
}

.deliverable-description {
    margin: 0;
    font-size: 17px;
}

@media (max-width: 640px) {
    .deliverable {
        grid-template-columns: 1fr;
    }
}
</style>
