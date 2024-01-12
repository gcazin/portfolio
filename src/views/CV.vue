<script setup>
import Icon from '../components/elements/Icon.vue'
import Navbar from '../components/layout/Navbar.vue'
import Section from '../components/layout/Section.vue'
import Footer from '../components/layout/Footer.vue'
import Button from '../components/elements/Button.vue'
import Link from '../components/elements/Link.vue'
import Badge from '../components/elements/Badge.vue'
import { onBeforeMount, onMounted, ref } from 'vue'

const skills = [
    {
        title: 'HTML',
        rating: 'Maîtrise',
    },
    {
        title: 'CSS',
        rating: 'Maîtrise',
    },
    {
        title: 'Javascript',
        rating: 'Maîtrise',
    },
    {
        title: 'VueJS 3',
        rating: 'Maîtrise',
    },
    {
        title: 'jQuery',
        rating: 'Maîtrise',
    },
    {
        title: 'PHP',
        rating: 'Maîtrise',
    },
    {
        title: 'Laravel 9',
        rating: 'Maîtrise',
    },
    {
        title: 'SCSS',
        rating: 'Connaissance',
    },
    {
        title: 'Wordpress',
        rating: 'Connaissance',
    },
    {
        title: 'Drupal 8',
        rating: 'Connaissance',
    },
    {
        title: 'Symfony 5',
        rating: 'Utilisation',
    },
]

const formations = [
    {
        title: 'Licence professionnelle Développement Internet et Mobile',
        school: 'IUT, Calais (62250)',
        date: '2019-2020',
        // description: 'Lorem ipsum dolor sit amet',
    },
    {
        title: 'BTS SIO option SLAM',
        school: 'Lycée Saint-Joseph, Saint-Martin-Boulogne (62280)',
        date: 'Juin 2019',
        // description: 'Lorem ipsum dolor sit amet',
    },
    {
        title: 'Bac STI2D option SIN',
        school: 'Lycée Édouard Branly, Boulogne-sur-Mer (62200)',
        date: 'Juin 2017',
    },
]

const experiences = [
    {
        title: 'Développeur web',
        enterprise: 'CDI, Diatem, Strasbourg (67000)',
        date: '2020-2022',
        description:
            'Plateforme spécialisée en PHP et VueJS, Site vitrine sous Drupal et Wordpress',
    },
    {
        title: 'Stage en développement web',
        enterprise: 'Stage, Armatis, Calais (62100)',
        date: '2019',
        description:
            "Création d'une application mobile en React-Native avec API développé en Laravel",
    },
    {
        title: 'Stage en développement web',
        enterprise: 'Stage, Mes Concierges, Marquise (62250)',
        date: '2018',
        description:
            "Création d'une marketplace avec l'utilisation d'un framework PHP (Cocorico)",
    },
    {
        title: 'Stage en développement web',
        enterprise: "Stage, Mairie d'Echinghen, Echinghen (62360)",
        date: '2017',
        description: "Création d'un site vitrine en utilisant le CMS Wordpress",
    },
]

onBeforeMount(() => {
    if (window.scrollY) {
        window.scroll(0, 0)
    }
})

onMounted(() => {
    document.title += 'CV - Guillaume Cazin - Développeur web freelance'
})
</script>

<template>
    <Navbar />

    <Section title="CV" id="hero">
        <div class="mx-auto max-w-4xl">
            <a href="/images/misc/cv.pdf" target="_blank">
                <Button class="mb-7 text-center"
                >Télécharger la version PDF</Button
                >
            </a>
            <div class="block lg:hidden">
                <img
                    src="/images/misc/cv.webp"
                    class="w-full"
                    type="application/pdf"
                    alt="CV"
                />
            </div>
            <div
                class="hidden bg-white shadow-lg dark:bg-gray-800 lg:block"
                id="cv"
            >
                <!-- First section -->
                <div class="mb-3 mt-5 flex items-center pl-10">
                    <div class="mr-5 w-60">
                        <div class="relative hidden text-center lg:block">
                            <img
                                src="/images/misc/blob-tear.svg"
                                class="absolute -bottom-2 -left-2 w-20"
                                alt="Background"
                            />
                            <img
                                src="/images/misc/avatar.webp"
                                class="relative z-30 m-auto w-52 rounded-br-3xl rounded-tl-3xl bg-gray-50"
                                alt="Avatar"
                            />
                            <img
                                src="/images/misc/blob-tear.svg"
                                class="absolute -right-2 -top-2 w-20"
                                alt="Background"
                            />
                        </div>
                    </div>
                    <div class="flex flex-1 flex-col justify-center gap-3 pl-7">
                        <div class="text-2xl">
                            <span class="text-3xl uppercase"
                            >Guillaume Cazin</span
                            >
                        </div>
                        <div>
                            <span class="text-4xl font-bold uppercase"
                            >Développeur web</span
                            >
                        </div>
                        <div class="flex justify-between">
                            <div class="flex-1">
                                <div class="block">
                                    <span
                                        class="border-before pb-2 font-bold uppercase"
                                    >Contact</span
                                    >
                                    <span class="inline font-bold text-blue-700"
                                    >__</span
                                    >
                                </div>
                                <div class="mt-2 flex flex-col gap-1">
                                    <a
                                        href="mailto:czn.guillaume@gmail.com"
                                        target="_blank"
                                        class="flex items-center underline decoration-dotted"
                                    >
                                        <Icon
                                            name="mail"
                                            :outline="false"
                                            class="mr-1 text-blue-700"
                                        />
                                        czn.guillaume@gmail.com
                                    </a>
                                    <a
                                        href="tel:06.10.85.42.18"
                                        target="_blank"
                                        class="flex items-center underline decoration-dotted"
                                    >
                                        <Icon
                                            name="call"
                                            :outline="false"
                                            class="mr-1 text-blue-700"
                                        />
                                        +33 6 10 85 42 18
                                    </a>
                                </div>
                            </div>
                            <div class="flex-1">
                                <div class="block">
                                    <span
                                        class="border-before pb-2 font-bold uppercase"
                                    >Social</span
                                    >
                                    <span class="inline font-bold text-blue-700"
                                    >__</span
                                    >
                                </div>
                                <div class="mt-2 flex flex-col gap-1">
                                    <a
                                        target="_blank"
                                        href="https://www.linkedin.com/in/guillaume-cazin/"
                                        class="flex items-center underline decoration-dotted"
                                    >
                                        <Icon
                                            name="logo-linkedin"
                                            class="mr-1"
                                            :outline="false"
                                        />
                                        guillaume-cazin
                                    </a>
                                    <a
                                        target="_blank"
                                        href="http://github.com/gcazin"
                                        class="flex items-center underline decoration-dotted"
                                    >
                                        <Icon
                                            name="logo-github"
                                            class="mr-1"
                                            :outline="false"
                                        />
                                        gcazin
                                    </a>
                                    <a
                                        target="_blank"
                                        href="https://codepen.io/gcazin"
                                        class="flex items-center underline decoration-dotted"
                                    >
                                        <Icon
                                            name="logo-codepen"
                                            class="mr-1"
                                            :outline="false"
                                        />
                                        gcazin
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <a
                                class="font-bold uppercase text-blue-700"
                                href="/cv"
                            >www.guillaume-cazin.fr</a
                            >
                        </div>
                    </div>
                </div>

                <div class="mx-10 border-b">
                    <div class="mb-2 block">
                        <span
                            class="border-before pb-2 text-xl font-bold uppercase"
                        ><Icon name="person" class="mr-1 text-blue-700" /> A
                            propos</span
                        >
                        <span class="inline font-bold text-blue-700"> __</span>
                    </div>
                    <div class="mb-1 bg-white pb-2">
                        Passionné depuis 12 ans par tout ce qui est attrait au
                        développement web, j'y ai consacré l'entièreté de mes
                        années d'études et la majorité de mon temps libre durant
                        toutes ces années.
                    </div>
                </div>

                <!-- Second section -->
                <div class="flex">
                    <div class="w-60 py-4 pl-10">
                        <div class="flex flex-col gap-3">
                            <div class="mb-2 flex-1">
                                <div class="mb-2 block">
                                    <span
                                        class="border-before pb-2 text-lg font-bold uppercase"
                                    ><Icon
                                        name="code-slash"
                                        class="mr-1 text-blue-700"
                                    />
                                        Compétences</span
                                    >
                                    <span class="inline font-bold text-blue-700"
                                    >__</span
                                    >
                                </div>
                                <div
                                    class="mt-3 flex flex-wrap justify-between gap-x-1 gap-y-2 bg-white"
                                    v-for="(skill, index) in skills.sort(
                                        (a, b) => b.rating - a.rating
                                    )"
                                    :key="index"
                                >
                                    <span>
                                        {{ skill.title }}
                                    </span>
                                    <div class="flex items-center">
                                        <span
                                            :class="{
                                                'bg-green-50':
                                                    skill.rating === 'Maîtrise',
                                                'bg-orange-50':
                                                    skill.rating ===
                                                    'Connaissance',
                                                'bg-red-50':
                                                    skill.rating ===
                                                    'Utilisation',
                                            }"
                                            class="w-fit whitespace-nowrap rounded-full px-2 py-1 text-center align-baseline text-sm font-bold leading-none transition-colors"
                                        >
                                            {{ skill.rating }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class="mb-2 flex-1">
                                <div class="block">
                                    <span
                                        class="border-before pb-2 text-lg font-bold uppercase"
                                    ><Icon
                                        name="language"
                                        class="mr-1 text-blue-700"
                                    />
                                        Langues</span
                                    >
                                    <span class="inline font-bold text-blue-700"
                                    >__</span
                                    >
                                </div>
                                <div
                                    class="mt-3 flex flex-col gap-y-2 bg-white"
                                >
                                    <div class="flex w-full">
                                        <div class="flex-1">Français</div>
                                        <div class="flex-1 text-end">
                                            Natale
                                        </div>
                                    </div>
                                    <div class="flex w-full">
                                        <div class="flex-1">Anglais</div>
                                        <div class="flex-1 text-end">
                                            Confirmé
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class="flex-1">
                                <div class="block">
                                    <span
                                        class="border-before pb-2 text-lg font-bold uppercase"
                                    ><Icon
                                        name="library"
                                        class="mr-1 text-blue-700"
                                    />
                                        Loisirs</span
                                    >
                                    <span class="inline font-bold text-blue-700"
                                    >__</span
                                    >
                                </div>
                                <div class="mt-3 bg-white">
                                    🚲Vélo, 👨‍💻programmation, 🎮jeux-vidéo,
                                    🪐astronomie
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="flex flex-col gap-3 px-7 py-3">
                            <!-- Expériences professionnelles -->
                            <div class="flex-1">
                                <div class="mb-2 block">
                                    <span
                                        class="border-before pb-2 text-lg font-bold uppercase"
                                    ><Icon
                                        name="briefcase"
                                        class="mr-1 text-blue-700"
                                    />
                                        Expériences professionnelles</span
                                    >
                                    <span class="inline font-bold text-blue-700"
                                    >__</span
                                    >
                                </div>
                                <div class="flex flex-col gap-2 bg-white">
                                    <div
                                        class="flex"
                                        v-for="(
                                            experience, index
                                        ) in experiences"
                                        :key="index"
                                    >
                                        <div class="flex flex-1 flex-col">
                                            <div class="flex-1">
                                                <span class="font-bold">
                                                    {{ experience.title }}
                                                </span>
                                            </div>
                                            <div class="flex-1">
                                                <div class="text-gray-500">
                                                    {{ experience.enterprise }}
                                                </div>
                                            </div>
                                            <div class="flex-1">
                                                <div
                                                    class="text-md text-gray-700"
                                                >
                                                    {{ experience.description }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-32 text-end">
                                            {{ experience.date }}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <!-- Formations & diplômes -->
                            <div class="mb-2 flex-1">
                                <div class="mb-2 block">
                                    <span
                                        class="border-before pb-2 text-lg font-bold uppercase"
                                    ><Icon
                                        name="school"
                                        class="mr-1 text-blue-700"
                                    />
                                        Formations & diplômes</span
                                    >
                                    <span class="inline font-bold text-blue-700"
                                    >__</span
                                    >
                                </div>
                                <div class="flex flex-col gap-2 bg-white">
                                    <div
                                        class="flex"
                                        v-for="(formation, index) in formations"
                                        :key="index"
                                    >
                                        <div class="flex flex-1 flex-col">
                                            <div class="flex-1">
                                                <span class="font-bold">
                                                    {{ formation.title }}
                                                </span>
                                            </div>
                                            <div class="flex-1">
                                                <div class="text-gray-500">
                                                    {{ formation.school }}
                                                </div>
                                            </div>
                                            <!--                      <div class="flex-1">
                                              <div class="text-md text-gray-700">{{ formation.description }}</div>
                                            </div>-->
                                        </div>
                                        <div class="w-32 text-end">
                                            {{ formation.date }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>

    <Footer has-background />
</template>

<style scoped>
#cv {
    height: 29.7cm;
    width: 21cm;
    overflow: hidden;
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%231d4ed8' fill-opacity='0.05'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
}
/*.border-before {
  position: relative;
}
.border-before::before {
  content: '';
  height: 4px;
  width: 100px;
  background: rgb(59 130 246);
  position: absolute;
  bottom: -2px;
}*/
</style>
