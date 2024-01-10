<script>
import Text from '../components/elements/Text.vue'
import Section from '../components/layout/Section.vue'
import SkillCard from '../components/cards/SkillCard.vue'
import Button from '../components/elements/Button.vue'
import Subtitle from '../components/elements/Subtitle.vue'
import ExperienceCard from '../components/cards/ExperienceCard.vue'
import Badge from '../components/elements/Badge.vue'
import Typed from 'typed.js'
import Icon from '../components/elements/Icon.vue'
import Projects from '../components/misc/Projects.vue'
import Card from '../components/cards/Card.vue'
import References from '../components/misc/References.vue'
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
import BlobBackground from '../components/misc/BlobBackground.vue'

export default {
    name: 'Home',

    components: {
        BlobBackground,
        References,
        Card,
        Projects,
        Icon,
        Text,
        Section,
        SkillCard,
        Button,
        Subtitle,
        ExperienceCard,
        Badge,
        Navbar,
        Footer,
    },

    data() {
        return {
            url: null,
            typed: null,
            skills: ['Full-stack', 'Laravel', 'VueJS', 'PHP', 'JS'],
            skillsSection: {
                development: [],
                tools: [],
                workflow: [],
            },
            projectCategory: 'all',
            scrollTop: 0,
            scrollTopPositionButtonAppear: 250,
        }
    },
    mounted() {
        document.title = 'Accueil - Portfolio de Guillaume Cazin'
        this.getTyped().then((typed) => {
            this.typed = typed
        })
        window.addEventListener('scroll', this.getScrollTop)
    },
    methods: {
        async getTyped() {
            return new Promise((successCallback) => {
                const typed = new Typed('.element', {
                    strings: this.skills,
                    typeSpeed: 150,
                    loop: true,
                })
                successCallback(typed)
            })
        },
        getScrollTop() {
            this.scrollTop = document.documentElement.scrollTop
        },
        scrollToTop() {
            const url = window.location.href

            this.url = this.removeAnchor(url)

            window.scrollTo({
                top: 0,
            })
        },
        removeAnchor(url) {
            const index = url.indexOf('#')

            if (index !== -1) {
                return url.substring(0, index)
            }

            return url
        },
    },
}
</script>

<template>
    <!-- Navbar -->
    <Navbar />

    <!-- Hero section -->
    <Section id="hero">
        <BlobBackground hero />
        <div class="isolate pt-8 lg:pt-32 lg:pb-16">
            <div
                class="container mx-auto flex h-full max-w-7xl flex-col items-center gap-24 lg:flex-row lg:gap-0"
            >
                <div class="lg:order-0 order-1 flex flex-1 flex-col gap-6">
                    <Text type="subtitle" class="font-bold uppercase"
                        >👋, je suis</Text
                    >
                    <p
                        class="text-7xl font-extrabold tracking-tight text-blue-500 dark:text-blue-700 lg:text-8xl lg:leading-normal"
                    >
                        Guillaume
                    </p>
                    <Text type="subtitle" class="font-bold uppercase">
                        Un freelance
                        <span
                            class="element text-blue-500 dark:text-blue-600"
                            >{{ typed }}</span
                        >
                    </Text>
                    <Button is-link to="cv">Voir mon cv</Button>
                </div>
                <div class="order-0 relative text-center lg:order-1">
                    <img
                        src="/images/misc/blob-tear.svg"
                        class="absolute -bottom-12 -left-10 -z-10 w-40"
                        alt="Background"
                    />
                    <img
                        src="/images/misc/avatar.png"
                        class="avatar-background m-auto w-40 rounded-tl-3xl rounded-br-3xl lg:w-80"
                        alt="Avatar"
                    />
                    <img
                        src="/images/misc/blob-tear.svg"
                        class="absolute -top-12 -right-10 -z-10 w-40"
                        alt="Background"
                    />
                </div>
            </div>
        </div>
    </Section>

    <!-- À propos -->
    <Section
        id="introduction"
        heading="Introduction"
        title="👋 Bonjour !"
        subtitle="Développeur full-stack basé à Boulogne-sur-Mer"
        has-background
    >
        <div class="text-center">
            <div class="m-auto gap-4 text-left lg:flex lg:flex-col">
                <div class="mb-4 flex-1">
                    <Text>
                        Passionné et autodidacte depuis plus de 12 ans dans le
                        développement web, je me suis spécialisé en PHP,
                        notamment avec le framework Laravel, et je suis très à
                        l'aise en JS, en particulier avec VueJS.
                    </Text>
                    <Text>
                        J'ai travaillé sur divers projets, allant de sites web
                        pour petites entreprises à des plateformes spécifiques
                        pour de grandes entreprises.
                    </Text>
                </div>
                <div class="flex-1 md:gap-10 lg:flex">
                    <div class="my-4 flex w-full flex-col gap-4 lg:w-1/3">
                        <Text class="border-b dark:border-b-blue-900">
                            <Icon
                                :outline="false"
                                name="home"
                                class="mr-2 text-blue-500"
                            />
                            Boulogne-sur-Mer
                        </Text>
                        <Text class="border-b dark:border-b-blue-900">
                            <Icon
                                :outline="false"
                                name="mail"
                                class="mr-2 font-bold text-blue-500"
                            />
                            czn.guillaume[at]gmail[dot]com
                        </Text>
                        <Text class="border-b dark:border-b-blue-900">
                            <Icon
                                :outline="false"
                                name="speedometer"
                                class="mr-2 font-bold text-blue-500"
                            />
                            Niveau confirmé (2 ans d'exp.)
                        </Text>
                        <Text>
                            <Icon
                                :outline="false"
                                name="laptop"
                                class="mr-2 font-bold text-blue-500"
                            />
                            Télétravail total
                        </Text>
                    </div>
                    <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
                        <Card title="+12" description="ans de passions" />
                        <Card title="+2" description="ans d'expériences" />
                        <Card title="+47" description="projets GitHub" />
                        <Card title="+514" description="commits sur GitHub" />
                    </div>
                </div>
            </div>
            <Button is-link to="cv" class="mt-10" secondary>Voir mon CV</Button>
        </div>
    </Section>

    <Section
        id="references"
        heading="Projets d'entreprises"
        title="Références"
        description="Projets d'entreprises pour lesquelles j'ai travaillé durant mes expériences professionnelles"
    >
        <BlobBackground invert />
        <References />
    </Section>

    <!-- Expériences -->
    <Section
        id="experiences"
        heading="Formations & diplômes"
        title="Expériences"
        has-background
    >
        <div class="flex flex-col justify-center py-8 lg:py-12">
            <div class="mx-auto w-full lg:max-w-4xl">
                <div class="relative">
                    <div
                        class="absolute left-1/2 hidden h-full w-px -translate-x-1/2 transform bg-blue-500 lg:block"
                    ></div>
                    <div class="space-y-24 lg:space-y-8">
                        <ExperienceCard
                            image="diatem.png"
                            job="Développeur web"
                            company="Diatem"
                            period="Nov. 2020 - Nov. 2022"
                            description="Utilisation de VueJS pour créer des interfaces utilisateur interactives et réactives, Drupal 8 pour construire des sites web à l'aide de son système de gestion de contenu (CMS) et Wordpress 5 pour mettre en œuvre des fonctionnalités avancées et personnalisées sur des sites web. Au cours de cette expérience, j'ai acquis une solide connaissance de ces technologies et j'ai également développé des compétences en matière de travail d'équipe et de communication."
                            :technologies="[
                                'HTML5',
                                'CSS3',
                                'VueJS',
                                'PHP',
                                'Drupal 8',
                                'Wordpress',
                                'Laravel',
                                'jQuery',
                                'API',
                            ]"
                        />
                        <ExperienceCard
                            image="armatis.png"
                            job="Stage en développement web"
                            company="Armatis"
                            period="2020"
                            description="Développement d'une application mobile qui vise à simplifier les repas entre collègues. Cette application, développée en React Native, permet aux utilisateurs de s'organiser facilement pour les repas en groupe, que ce soit au bureau ou en déplacement.
La partie API de l'application a été écrite en PHP avec le framework Lumen, ce qui lui permet d'être rapide et fiable. L'application est conçue pour être facile à utiliser et intuitive.
Les utilisateurs peuvent créer des événements de repas en quelques minutes seulement, et inviter leurs collègues."
                            :technologies="[
                                'React Native',
                                'HTML5',
                                'CSS3',
                                'PHP',
                                'Lumen',
                                'API',
                            ]"
                            right
                        />
                        <ExperienceCard
                            image="echinghen.png"
                            job="Stage en développement web"
                            company="Commune d'Échinghen"
                            period="2018"
                            description="Développement d'un site web vitrine pour une mairie. Conçu en PHP, ce site est destiné à être une plateforme en ligne pour la mairie, offrant aux citoyens un accès facile à des informations importantes sur les services municipaux et les événements en cours."
                            :technologies="['HTML5', 'CSS3', 'PHP']"
                        />
                        <ExperienceCard
                            image="armatis.png"
                            company="Mesconcierges"
                            job="Stage en développement web"
                            period="Nov. 2020 - Nov. 2022"
                            description="Développement d'un site web avec le framework Cocorico basé sur Symfony, qui offre aux utilisateurs une plateforme en ligne pour gérer les services de conciergerie dans leurs locations."
                            :technologies="[
                                'HTML5',
                                'CSS3',
                                'Symfony',
                                'Framework Cocorico',
                            ]"
                            right
                        />
                    </div>
                </div>
            </div>
        </div>
    </Section>

    <!-- Mes compétences -->
    <Section
        heading="Technologies & outils"
        id="competences"
        title="Compétences"
    >
        <BlobBackground />
        <div class="py-10">
            <div class="grid gap-5 text-center lg:grid-cols-3">
                <SkillCard
                    icon="code-slash"
                    color="blue"
                    title="Développement"
                    :skills="[
                        'HTML',
                        'CSS',
                        'Boostrap',
                        'Tailwind',
                        'PHP',
                        'Laravel',
                        'Twig',
                        'Vanilla JS',
                        'VueJS',
                        'jQuery',
                    ]"
                />
                <SkillCard
                    icon="cog"
                    color="purple"
                    title="Outils"
                    :skills="['Figma', 'PhpStorm', 'Code']"
                />
                <SkillCard
                    icon="cog"
                    color="yellow"
                    title="Workflow"
                    :skills="[
                        'Workstation Linux',
                        'Méthodes agile (Scrum, Kanban)',
                        'Versionning Git',
                        'Télétravail',
                    ]"
                    last
                />
            </div>
        </div>
    </Section>

    <!-- Mes projets -->
    <Section
        id="projets"
        heading="Portfolio"
        title="Projets & réalisations"
        description="Exemples de mes travaux en développement web, ainsi que des informations sur les technologies et les outils que j'ai utilisés pour les réaliser."
        has-background
    >
        <Projects :category="projectCategory" />
    </Section>

    <!-- Contact -->
    <Section id="contact">
        <BlobBackground invert />
        <div
            class="relative m-auto max-w-7xl overflow-hidden rounded-lg bg-blue-500 py-10 text-center text-blue-500 dark:bg-blue-700 dark:text-white"
        >
            <div class="relative z-10 flex flex-col gap-5 px-5 lg:pr-10">
                <div class="flex-1">
                    <Text type="title" class="text-white"
                        >Intéressé ? Contactez-moi !</Text
                    >
                </div>
                <div class="flex-1">
                    <Button is-link to="cv" secondary>Prise de contact</Button>
                </div>
            </div>
            <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
            >
                <svg
                    width="818"
                    height="286"
                    viewBox="0 0 818 286"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-center"
                >
                    <circle
                        cx="409"
                        cy="409"
                        r="408.5"
                        stroke="url(#paint0_linear_0:1)"
                    ></circle>
                    <circle
                        cx="409"
                        cy="409"
                        r="349.5"
                        stroke="url(#paint1_linear_0:1)"
                    ></circle>
                    <defs>
                        <linearGradient
                            id="paint0_linear_0:1"
                            x1="-34.5"
                            y1="291.5"
                            x2="851"
                            y2="291.5"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="white" stop-opacity="0.35"></stop>
                            <stop
                                offset="0.218415"
                                stop-color="white"
                                stop-opacity="0"
                            ></stop>
                            <stop
                                offset="0.728079"
                                stop-color="white"
                                stop-opacity="0"
                            ></stop>
                            <stop
                                offset="1"
                                stop-color="white"
                                stop-opacity="0.35"
                            ></stop>
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_0:1"
                            x1="29.4768"
                            y1="308.45"
                            x2="787.24"
                            y2="308.45"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="white" stop-opacity="0.35"></stop>
                            <stop
                                offset="0.218415"
                                stop-color="white"
                                stop-opacity="0"
                            ></stop>
                            <stop
                                offset="0.777261"
                                stop-color="white"
                                stop-opacity="0"
                            ></stop>
                            <stop
                                offset="1"
                                stop-color="white"
                                stop-opacity="0.35"
                            ></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    </Section>

    <!-- Scroll to top -->
    <div
        v-if="scrollTop > scrollTopPositionButtonAppear"
        class="fixed bottom-5 right-5 z-50"
    >
        <Button secondary @click="scrollToTop"
            ><Icon name="chevron-up"
        /></Button>
    </div>

    <Footer has-background />
</template>

<style scoped>
.avatar-background {
    background-color: #0b1120;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23f1f5f9' fill-opacity='0.04'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
