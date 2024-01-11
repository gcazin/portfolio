<script setup>
import Text from '../elements/Text.vue'
import Icon from '../elements/Icon.vue'
import Button from '../elements/Button.vue'
import { onMounted, ref, watch } from 'vue'
import Animate from './Animate.vue'

defineProps({
    category: {
        type: String,
    },
})

const projects = [
    {
        image: 'spotify-liked-tracks-sorter',
        title: 'Spotify liked tracks sorter',
        description:
            "Petit utilitaire permetttant de récupérer les dernières musiques aimées, d'en extraire le genre et de les classer dans les bonnes playlists automatiquement.",
        technologies: ['HTML5', 'VueJS', 'Bootstrap', 'Api'],
        url: 'https://auto-sorting-spotify-liked-songs.netlify.app',
        github: 'auto-sorting-spotify-liked-songs',
        category: 'web-application',
    },
    {
        image: 'pure-css-windows-10-desktop',
        title: 'Pure CSS Windows 10 desktop',
        description: "Reproduction de l'interface de Windows 10 en HTML5/SCSS.",
        technologies: ['HTML5', 'SCSS'],
        url: 'https://codepen.io/gcazin/full/bKbMQW',
        github: 'pure-css-windows-10-desktop',
        category: 'resources',
    },
    {
        image: 'slimys',
        title: 'Slimys',
        description:
            "Création d'un site vitrine pour un projet NFT, avec liaison API a un back-end développé en Lumen.",
        technologies: ['HTML5', 'Laravel', 'VueJS', 'Bootstrap'],
        url: 'https://beta-slimys.netlify.app/',
        category: 'website',
    },
    {
        image: 'inskub',
        title: 'Inskub',
        description:
            "Création d'une plateforme d'assurance mettant en lien les experts du domaine au travers d'une plateforme sociale.",
        technologies: ['HTML5', 'Laravel', 'Bootstrap'],
        github: 'inskub',
        category: 'website',
    },
    {
        image: 'medializ',
        title: 'Medializ',
        description:
            "Création d'une plateforme où les utilisateurs peuvent poster leurs mêmes venant de source divers telle qu'une vidéo ou Twitter.",
        technologies: ['HTML5', 'Laravel', 'TailwindCSS'],
        github: 'medializ',
        category: 'website',
    },
    {
        image: 'quotesharing',
        title: 'QuoteSharing',
        description:
            "Création d'une plateforme permettant aux utilisateurs de poster des citations.",
        technologies: ['HTML5', 'Laravel', 'Bootstrap'],
        github: 'quotesharing',
        category: 'website',
    },
    {
        image: 'portfolio',
        title: 'Portfolio',
        description: 'Création de mon portfolio.',
        technologies: ['HTML5', 'VueJS', 'TailwindCSS', 'Auth0', 'Firebase'],
        github: 'portfolio',
        category: 'website',
    },
    {
        image: 'x-memes',
        title: 'X-Memes',
        description:
            "Création d'une plateforme permettant de partager ses mêmes favoris venant de Twitter.",
        technologies: ['HTML5', 'Laravel', 'VueJS', 'TailwindCSS'],
        url: 'https://x-memes.com',
        github: 'x-memes',
        category: 'website',
    },
]
const category = ref('all')
const filteredProjects = ref([])

watch(category, (oldCategory, newCategory) => {
    filteringProjects(newCategory)
})

onMounted(() => {
    filteredProjects.value = projects
})

const filteringProjects = (category) => {
    filteredProjects.value = projects

    if (!category || category !== 'all') {
        filteredProjects.value = projects.filter((project) => {
            return project.category === category
        })
    }
}

const countProjectsByCategory = (category) => {
    return projects.filter((project) => project.category === category).length
}
</script>

<template>
    <div class="flex flex-row flex-wrap justify-center gap-4 lg:grid-cols-3">
        <Button
            size="sm"
            :secondary="category !== 'all'"
            @click="category = 'all'"
        >
            Tout ({{ projects.length }})
        </Button>
        <Button
            :secondary="category !== 'website'"
            size="sm"
            @click="category = 'website'"
        >
            Site web ({{ countProjectsByCategory('website') }})
        </Button>
        <Button
            :secondary="category !== 'web-application'"
            size="sm"
            @click="category = 'web-application'"
        >
            Application web ({{ countProjectsByCategory('web-application') }})
        </Button>
        <Button
            :secondary="category !== 'resources'"
            secondary
            size="sm"
            @click="category = 'resources'"
        >
            Ressources ({{ countProjectsByCategory('resources') }})
        </Button>
    </div>
    <Animate
        v-for="(project, index) in filteredProjects"
        :key="index"
        class="mb-16 mt-12 flex flex-col gap-2 lg:flex-row lg:gap-6"
        :to="index % 2 === 0 ? 'right' : 'left'"
    >
        <div :class="index % 2 === 0 ? 'lg:order-0' : 'lg:order-1'">
            <img
                class="rounded-lg shadow-lg"
                :src="`images/projects/${project.image}.webp`"
                :alt="project.title"
            />
        </div>
        <div
            class="flex w-full flex-col gap-2 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800/30"
            :class="index % 2 === 0 ? 'order-1' : 'order-0'"
        >
            <Text type="title" class="dark:text-white">{{
                project.title
            }}</Text>
            <template v-if="project.url">
                <a
                    class="break-all text-lg text-blue-500"
                    target="_blank"
                    :href="project.url"
                >
                    {{ project.url }} <Icon name="arrow-redo" />
                </a>
            </template>
            <template v-if="project.github">
                <a
                    class="break-all text-lg text-blue-500"
                    target="_blank"
                    :href="`https://github.com/gcazin/${project.github}`"
                >
                    gcazin/{{ project.github }}
                    <Icon name="logo-github" :outline="false" />
                </a>
            </template>
            <Text type="text">{{ project.description }}</Text>
            <Text class="font-bold">Technologies utilisés</Text>
            <div
                class="flex flex-row items-center gap-4"
                v-for="(technology, index) in project.technologies"
                :key="index"
            >
                <div>
                    <img
                        class="w-6"
                        :src="`images/skills/${technology.toLowerCase()}.png`"
                        :alt="technology"
                        :title="technology"
                    />
                </div>
                <div>
                    <Text>{{ technology }}</Text>
                </div>
            </div>
        </div>
    </Animate>
</template>

<style scoped></style>
