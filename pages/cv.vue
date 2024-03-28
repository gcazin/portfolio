<script setup>
import { onBeforeMount, onMounted } from 'vue'
import Button from '~/components/elements/Button.vue'
import Icon from '~/components/elements/Icon.vue'
import Section from '~/components/layout/Section.vue'

const infos = {
    name: 'Guillaume Cazin',
    age: new Date().getFullYear() - 1999,
    role: 'Développeur web',
    mail: 'contact@guillaume-cazin.fr',
    phone: '06 10 85 42 18',
    socials: [
        {
            label: 'guillaume-cazin.fr',
            url: 'https://www.guillaume-cazin.fr/',
            icon: 'link-outline',
        },
        {
            label: 'guillaume-cazin',
            url: 'https://www.linkedin.com/in/guillaume-cazin/',
            icon: 'logo-linkedin',
        },
        {
            label: 'gcazin',
            url: 'https://github.com/gcazin',
            icon: 'logo-github',
        },
        {
            label: 'gcazin',
            url: 'https://codepen.io/gcazin',
            icon: 'logo-codepen',
        },
    ],
}

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

const skills = [
    {
        title: 'HTML5 & CSS3',
        rating: 'Maîtrise',
    },
    {
        title: 'VueJS 3',
        rating: 'Maîtrise',
    },
    {
        title: 'Laravel 10',
        rating: 'Maîtrise',
    },
    {
        title: 'Javascript',
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

const experiences = [
    {
        title: 'Développeur web',
        enterprise: 'Freelance, France',
        date: "Mar. 2024 - Aujourd'hui",
    },
    {
        title: 'Développeur web',
        enterprise: 'CDI, Diatem, Strasbourg (67000)',
        date: 'Nov.2020 - Déc.2022',
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
    document.title = 'CV - Guillaume Cazin - Développeur web freelance'
})
</script>

<template>
    <Section title="CV" id="hero">
        <div class="mx-auto max-w-4xl">
            <a href="/images/misc/cv-guillaume-cazin.pdf" download>
                <Button class="mb-4 text-center">Version PDF</Button>
            </a>
            <div class="block lg:hidden">
                <NuxtImg
                    src="/images/misc/cv.webp"
                    class="w-full"
                    type="application/pdf"
                    alt="CV"
                />
            </div>
            <div
                id="cv"
                class="hidden gap-2 overflow-hidden bg-white px-8 shadow-lg lg:flex lg:flex-col"
            >
                <!-- First section -->
                <div class="mt-4 flex items-center gap-x-8">
                    <div class="mr-4">
                        <div class="relative hidden text-center lg:block">
                            <NuxtImg
                                src="/images/misc/blob-tear.svg"
                                class="absolute -bottom-2 -left-2 w-20"
                                alt="Background"
                            />
                            <NuxtImg
                                src="/images/misc/avatar.webp"
                                class="relative z-30 m-auto w-52 rounded-br-3xl rounded-tl-3xl bg-gray-50"
                                alt="Avatar"
                            />
                            <NuxtImg
                                src="/images/misc/blob-tear.svg"
                                class="absolute -right-2 -top-2 w-20"
                                alt="Background"
                            />
                        </div>
                    </div>
                    <div class="flex flex-1 flex-col justify-center gap-2">
                        <div class="text-2xl">
                            <span class="text-2xl uppercase">{{
                                infos.name
                            }}</span>
                        </div>
                        <div>
                            <span class="text-4xl font-bold uppercase">{{
                                infos.role
                            }}</span>
                        </div>
                        <div>
                            <span class="text-xl uppercase"
                                >{{ infos.age }} ans</span
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
                                        :href="`mailto:${infos.mail}`"
                                        target="_blank"
                                        class="flex items-center underline decoration-dotted"
                                    >
                                        <Icon
                                            name="mail"
                                            :outline="false"
                                            class="mr-1 text-blue-700"
                                        />
                                        {{ infos.mail }}
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
                                        {{ infos.phone }}
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
                                        v-for="(link, index) in infos.socials"
                                        :key="index"
                                        target="_blank"
                                        :href="link.url"
                                        class="flex items-center underline decoration-dotted"
                                    >
                                        <Icon
                                            :name="link.icon"
                                            class="mr-1"
                                            :outline="false"
                                        />
                                        {{ link.label }}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="border-b">
                    <div class="mb-2 block">
                        <span
                            class="border-before pb-2 text-xl font-bold uppercase"
                            ><Icon name="person" class="mr-1 text-blue-700" /> À
                            propos</span
                        >
                        <span class="inline font-bold text-blue-700"> __</span>
                    </div>
                    <div class="mb-2">
                        Passionné depuis 12 ans par tout ce qui est attrait au
                        développement web, j'y ai consacré l'entièreté de mes
                        années d'études et la majorité de mon temps libre durant
                        toutes ces années.
                    </div>
                </div>

                <!-- Second section -->
                <div class="flex gap-x-8">
                    <div class="w-48">
                        <div class="flex flex-col gap-2">
                            <div class="flex-1">
                                <div class="mb-2 block">
                                    <span
                                        class="border-before text-lg font-bold uppercase"
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
                                <div class="flex flex-col gap-2">
                                    <div
                                        class="flex flex-wrap items-center justify-between"
                                        v-for="(skill, index) in skills.sort(
                                            (a, b) => b.rating - a.rating
                                        )"
                                        :key="index"
                                    >
                                        <div>
                                            <span>
                                                {{ skill.title }}
                                            </span>
                                        </div>
                                        <div>
                                            <span
                                                :class="{
                                                    'bg-green-50':
                                                        skill.rating ===
                                                        'Maîtrise',
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
                            </div>
                            <hr />
                            <div class="flex-1">
                                <div class="mb-2 block">
                                    <span
                                        class="border-before text-lg font-bold uppercase"
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
                                <div class="flex flex-col gap-2">
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
                                <div class="mb-2 block">
                                    <span
                                        class="border-before text-lg font-bold uppercase"
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
                                <div class="mt-3">
                                    🚲Vélo, 👨‍💻programmation, 🎮jeux-vidéo,
                                    🪐astronomie
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="flex flex-col gap-2">
                            <!-- Expériences professionnelles -->
                            <div class="flex-1">
                                <div class="mb-2 block">
                                    <span
                                        class="border-before text-lg font-bold uppercase"
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
                                <div class="flex flex-col gap-2">
                                    <div
                                        class="flex"
                                        v-for="(
                                            experience, index
                                        ) in experiences"
                                        :key="index"
                                    >
                                        <div class="flex-1">
                                            <div class="font-bold">
                                                {{ experience.title }}
                                            </div>
                                            <div class="text-gray-500">
                                                {{ experience.enterprise }}
                                            </div>
                                            <div class="text-md text-gray-700">
                                                {{ experience.description }}
                                            </div>
                                        </div>
                                        <div class="w-28 text-end">
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
                                        class="border-before text-lg font-bold uppercase"
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
                                <div class="flex flex-col gap-2">
                                    <div
                                        class="flex"
                                        v-for="(formation, index) in formations"
                                        :key="index"
                                    >
                                        <div class="flex-1">
                                            <div class="font-bold">
                                                {{ formation.title }}
                                            </div>
                                            <div class="text-gray-500">
                                                {{ formation.school }}
                                            </div>
                                            <!--                      <div class="flex-1">
                                              <div class="text-md text-gray-700">{{ formation.description }}</div>
                                            </div>-->
                                        </div>
                                        <div class="w-28 text-end">
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
</template>

<style scoped>
#cv {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%231d4ed8' fill-opacity='0.05'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
}
</style>
