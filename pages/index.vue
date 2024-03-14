<script setup>
import Typed from 'typed.js'
import { onMounted, ref } from 'vue'
import Card from '~/components/cards/Card.vue'
import ExperienceCard from '~/components/cards/ExperienceCard.vue'
import SkillCard from '~/components/cards/SkillCard.vue'
import Button from '~/components/elements/Button.vue'
import Icon from '~/components/elements/Icon.vue'
import Text from '~/components/elements/Text.vue'
import Section from '~/components/layout/Section.vue'
import Animate from '~/components/misc/Animate.vue'
import BlobBackground from '~/components/misc/BlobBackground.vue'
import Projects from '~/components/misc/Projects.vue'
import References from '~/components/misc/References.vue'
import Input from "~/components/form/Input.vue";
import Stack from "~/components/layout/Stack.vue";
import Textarea from "~/components/form/Textarea.vue";

onMounted(() => {
    document.title = 'Guillaume Cazin - Développeur web freelance'

    getTyped().then((typed) => {
        typed.value = typed
    })

    window.addEventListener('scroll', getScrollTop)
})

const actualYear = useState('actualYear', () => new Date().getFullYear())
const typed = ref(null)
const skills = ['Full-stack', 'Laravel', 'VueJS', 'PHP', 'JS']
const projectCategory = ref('all')
const scrollTop = ref(0)
const scrollTopPositionButtonAppear = 250

const getTyped = async () => {
    return new Promise((successCallback) => {
        const typed = new Typed('.typed', {
            strings: skills,
            typeSpeed: 150,
            loop: true,
        })
        successCallback(typed)
    })
}

const getScrollTop = () => {
    scrollTop.value = document.documentElement.scrollTop
}

const scrollToTop = () => {
    removeAnchor(window.location.href)

    window.scrollTo({
        top: 0,
    })
}

const removeAnchor = (url) => {
    const index = url.indexOf('#')

    if (index !== -1) {
        return url.substring(0, index)
    }

    return url
}
</script>

<template>
    <!-- Hero section -->
    <Section id="hero">
        <div class="isolate pb-8 pt-32 lg:pb-16">
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
                        <span class="typed text-blue-500 dark:text-blue-600">{{
                                typed
                            }}</span>
                    </Text>
                    <div>
                        <Button is-link to="cv">Voir mon cv</Button>
                    </div>
                </div>
                <div class="order-0 relative text-center lg:order-1">
                    <img
                        src="/images/misc/blob-tear.svg"
                        class="absolute -bottom-12 -left-10 -z-10 w-40"
                        alt="Background"
                    />
                    <img
                        src="/images/misc/avatar.webp"
                        class="avatar-background m-auto w-40 rounded-br-3xl rounded-tl-3xl lg:w-80"
                        alt="Avatar"
                    />
                    <img
                        src="/images/misc/blob-tear.svg"
                        class="absolute -right-10 -top-12 -z-10 w-40"
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
                <div class="space-y-4 lg:space-y-8">
                    <div class="flex-1">
                        <Animate type="zoom" to="in">
                            <Text>
                                Passionné et autodidacte depuis plus de 12 ans
                                dans le développement web, je me suis spécialisé
                                en PHP, notamment avec le framework Laravel, et
                                je suis très à l'aise en JS, en particulier avec
                                VueJS.
                            </Text>
                            <Text>
                                J'ai travaillé sur divers projets, allant de
                                sites web pour petites entreprises à des
                                plateformes spécifiques pour de grandes
                                entreprises.
                            </Text>
                        </Animate>
                    </div>
                    <div
                        class="flex flex-1 flex-col gap-4 lg:flex-row lg:gap-8"
                    >
                        <Animate
                            full
                            to="right"
                            class="flex w-full flex-col lg:w-1/3 lg:gap-4"
                        >
                            <Text>
                                <Icon
                                    :outline="false"
                                    name="home"
                                    class="mr-2 text-blue-500"
                                />
                                Boulogne-sur-Mer
                            </Text>
                            <Text>
                                <Icon
                                    :outline="false"
                                    name="mail"
                                    class="mr-2 font-bold text-blue-500"
                                />
                                czn.guillaume[at]gmail[dot]com
                            </Text>
                            <Text>
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
                        </Animate>
                        <Animate to="left">
                            <div
                                class="grid w-full grid-cols-1 gap-4 md:grid-cols-2"
                            >
                                <Card
                                    :title="`+${actualYear - 2011}`"
                                    description="ans de passions"
                                />
                                <Card
                                    :title="`+${actualYear - 2021}`"
                                    description="ans d'expérience"
                                />
                                <Card
                                    title="+47"
                                    description="projets sur GitHub"
                                />
                                <Card
                                    title="+1060"
                                    description="commits sur GitHub"
                                />
                            </div>
                        </Animate>
                    </div>
                    <Animate class="text-center">
                        <Button is-link to="cv" secondary>Voir mon CV</Button>
                    </Animate>
                </div>
            </div>
        </div>
    </Section>

    <!-- Références -->
    <Section
        id="references"
        heading="Projets d'entreprises"
        title="Références"
        description="Projets d'entreprises pour lesquelles j'ai travaillé durant mes expériences professionnelles."
        has-blob-background
        blob-background-is-inverted
    >
        <References />
    </Section>

    <!-- Expériences -->
    <Section
        id="experiences"
        heading="Formations & diplômes"
        title="Expériences"
        has-background
    >
        <div class="flex flex-col justify-center py-4 lg:py-12">
            <div class="mx-auto w-full lg:max-w-4xl">
                <div class="relative">
                    <div
                        class="absolute left-1/2 hidden h-full w-px -translate-x-1/2 transform bg-blue-500 lg:block"
                    ></div>
                    <div class="space-y-8">
                        <ExperienceCard
                            job="Développeur web freelance"
                            period="Freelance (Mars. 2024 - Aujourd'hui)"
                            :technologies="[
                                'HTML5',
                                'CSS3',
                                'VueJS',
                                'PHP',
                                'Laravel',
                                'jQuery',
                                'API',
                            ]"
                        />
                        <ExperienceCard
                            image="diatem.webp"
                            job="Développeur web"
                            company="Diatem"
                            period="CDI de 2 ans (Nov. 2020 - Nov. 2022)"
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
                            right
                        />
                        <ExperienceCard
                            image="armatis.webp"
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
                        />
                        <ExperienceCard
                            image="echinghen.webp"
                            job="Stage en développement web"
                            company="Commune d'Échinghen"
                            period="2018"
                            description="Développement d'un site web vitrine pour une mairie. Conçu en PHP, ce site est destiné à être une plateforme en ligne pour la mairie, offrant aux citoyens un accès facile à des informations importantes sur les services municipaux et les événements en cours."
                            :technologies="['HTML5', 'CSS3', 'PHP']"
                            right
                        />
                        <ExperienceCard
                            image="armatis.webp"
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
                        />
                    </div>
                </div>
            </div>
        </div>
    </Section>

    <!-- Compétences -->
    <Section
        heading="Technologies & outils"
        id="competences"
        title="Compétences"
        has-blob-background
    >
        <div class="py-4 lg:py-8">
            <div class="grid gap-5 text-center lg:grid-cols-3">
                <Animate to="right">
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
                </Animate>
                <SkillCard
                    icon="cog"
                    color="purple"
                    title="Outils"
                    :skills="['Figma', 'PhpStorm', 'Code']"
                />
                <Animate to="left">
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
                </Animate>
            </div>
        </div>
    </Section>

    <!-- Projets -->
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
    <Section
        id="contact"
        heading="Formulaire de contact"
        title="Contactez-moi"
        description="Si vous avez des questions ou des préoccupations, n'hésitez pas à me contacter. Je suis ouvert à toute opportunité de travail correspondant à mes compétences et à mes intérêts."
        has-blob-background
        blob-background-is-inverted
    >
        <div class="flex gap-8">
            <div class="flex-1">
                    <form name="contact" method="POST" netlify>
                        <input type="hidden" name="form-name" value="contact" />

                        <Stack>
                            <div class="bg-blue-800/30 rounded-lg px-4 py-3 shadow">
                                <Stack spacing="2">
                                    <Input id="name" label="Nom" placeholder="Dupont" required />
                                    <Input type="email" id="email" placeholder="john@doe.fr" label="Adresse e-mail" required />
                                    <Textarea id="message" label="Message" placeholder="Bonjour" required />
                                </Stack>
                            </div>

                            <div class="text-right">
                                <Button type="submit">Envoyer</Button>
                            </div>
                        </Stack>
                    </form>
            </div>
            <div class="flex-1 self-center">
                <Stack spacing="8">
                    <Stack>
                        <div class="flex gap-2">
                            <Icon name="at" size="xl" class="text-white bg-blue-500 dark:bg-blue-800 rounded-full p-2" />
                            <Text>contact@guillaume-cazin.fr</Text>
                        </div>
                        <div class="flex gap-2">
                            <Icon name="call" size="xl" class="text-white bg-blue-500 dark:bg-blue-800 rounded-full p-2" />
                            <Text>06 10 85 42 18</Text>
                        </div>
                    </Stack>
                    <div class="flex space-x-4">
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/guillaume-cazin/"
                            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                            <Icon
                                class="text-white bg-blue-500 dark:bg-blue-800 rounded-full p-2"
                                name="logo-linkedin"
                                :outline="false"
                                size="xl"
                            />
                            <span class="sr-only">LinkedIn</span>
                        </a>
                        <a
                            target="_blank"
                            href="http://github.com/gcazin"
                            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                            <Icon
                                class="text-white bg-blue-500 dark:bg-blue-800 rounded-full p-2"
                                name="logo-github"
                                :outline="false"
                                size="xl"
                            />
                            <span class="sr-only">GitHub</span>
                        </a>
                        <a
                            target="_blank"
                            href="https://twitter.com/gcazinonx"
                            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                            <Icon
                                class="text-white bg-blue-500 dark:bg-blue-800 rounded-full p-2"
                                name="logo-twitter"
                                :outline="false"
                                size="xl"
                            />
                            <span class="sr-only">Twitter</span>
                        </a>
                        <a
                            target="_blank"
                            href="https://codepen.io/gcazin"
                            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                            <Icon
                                class="text-white bg-blue-500 dark:bg-blue-800 rounded-full p-2"
                                name="logo-codepen"
                                :outline="false"
                                size="xl"
                            />
                            <span class="sr-only">Codepen</span>
                        </a>
                    </div>
                </Stack>
            </div>
        </div>
    </Section>

    <!-- Scroll to top -->
    <div
        v-if="scrollTop > scrollTopPositionButtonAppear"
        class="fixed bottom-4 right-4 z-50"
    >
        <Button secondary @click="scrollToTop"
        ><Icon name="chevron-up"
        /></Button>
    </div>
</template>

<style scoped>
.avatar-background {
    background-color: #0b1120;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23f1f5f9' fill-opacity='0.06'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>