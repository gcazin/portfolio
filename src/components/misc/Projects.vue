<template>
  <AnimateOnScroll>
    <div class="flex flex-row flex-wrap justify-center lg:grid-cols-3 gap-4">
      <Button size="sm" :secondary="category !== 'all'" @click="category = 'all'">
        Tout ({{ projects.length }})
      </Button>
      <Button :secondary="category !== 'website'" size="sm" @click="category = 'website'">
        Site web ({{ countProjectsByCategory('website') }})
      </Button>
      <Button :secondary="category !== 'web-application'" size="sm" @click="category = 'web-application'">
        Application web ({{ countProjectsByCategory('web-application') }})
      </Button>
      <Button :secondary="category !== 'resources'" secondary size="sm" @click="category = 'resources'">
        Ressources ({{ countProjectsByCategory('resources') }})
      </Button>
    </div>
    <div class="flex flex-col lg:flex-row gap-2 lg:gap-6 mt-12 mb-16" v-for="(project, index) in filteredProjects" :key="index">
      <div :class="index % 2 === 0 ? 'lg:order-0' : 'lg:order-1'">
        <img class="rounded-lg shadow-lg" :src="`images/projects/${project.image}`" :alt="project.title">
      </div>
      <div class="w-full flex flex-col gap-2 bg-white shadow-sm dark:bg-gray-800/30 p-4 rounded-lg" :class="index % 2 === 0 ? 'order-1' : 'order-0'">
        <Text type="title" class="dark:text-white">{{ project.title }}</Text>
        <template v-if="project.url">
          <a class="text-blue-500 text-lg" target="_blank" :href="project.url">
            {{ project.url }} <Icon name="arrow-redo" />
          </a>
        </template>
        <template v-if="project.github">
          <a class="text-blue-500 text-lg" target="_blank" :href="`https://github.com/gcazin/${project.github}`">
            gcazin/{{ project.github }} <Icon name="logo-github" :outline="false"/>
          </a>
        </template>
        <Text type="text">{{ project.description }}</Text>
        <Text class="font-bold">Technologies utilisés</Text>
        <div
            class="flex flex-row gap-4 items-center"
            v-for="(technology, index) in project.technologies"
            :key="index"
        >
          <div
          >
            <img
                class="w-6"
                :src="`images/skills/${technology.toLowerCase()}.png`"
                :alt="technology"
                :title="technology"
            >
          </div>
          <div>
            <Text>{{ technology }}</Text>
          </div>
        </div>
      </div>
    </div>
  </AnimateOnScroll>
</template>

<script>
import Text from "../elements/Text.vue";
import AnimateOnScroll from "./AnimateOnScroll.vue";
import Badge from "../elements/Badge.vue";
import Icon from "../elements/Icon.vue";
import Button from "../elements/Button.vue";

export default {
  name: "Projects",

  components: {
    Button,
    Icon,
    Badge,
    AnimateOnScroll,
    Text
  },

  props: {
    category: {
      type: String,
    }
  },

  watch: {
    category(newCategory) {
      this.filteringProjects(newCategory)
    },
  },

  mounted() {
    this.filteredProjects = this.projects
  },

  data() {
    return {
      projects: [
        {
          image: 'spotify-liked-tracks-sorter.png',
          title: 'Spotify liked tracks sorter',
          description: "Petit utilitaire permetttant de récupérer les dernières musiques aimées, d'en extraire le genre et de les classer dans les bonnes playlists automatiquement.",
          technologies: ['HTML5', 'VueJS', 'Bootstrap', 'Api'],
          url: 'https://auto-sorting-spotify-liked-songs.netlify.app',
          github: 'auto-sorting-spotify-liked-songs',
          category: 'web-application'
        },
        {
          image: 'pure-css-windows-10-desktop.png',
          title: 'Pure CSS Windows 10 desktop',
          description: "Reproduction de l'interface de Windows 10 en HTML5/SCSS.",
          technologies: ['HTML5', 'SCSS'],
          url: 'https://codepen.io/gcazin/full/bKbMQW',
          github: 'pure-css-windows-10-desktop',
          category: 'resources'
        },
        {
          image: 'slimys.png',
          title: 'Slimys',
          description: "Création d'un site vitrine pour un projet NFT, avec liaison API a un back-end développé en Lumen.",
          technologies: ['HTML5', 'Laravel', 'VueJS', 'Bootstrap'],
          url: 'https://beta-slimys.netlify.app/',
          category: 'website'
        },
        {
          image: 'inskub.jpg',
          title: 'Inskub',
          description: "Création d'une plateforme d'assurance mettant en lien les experts du domaine au travers d'une plateforme sociale.",
          technologies: ['HTML5', 'Laravel', 'Bootstrap'],
          github: 'inskub',
          category: 'website'
        },
        {
          image: 'medializ.png',
          title: 'Medializ',
          description: "Création d'une plateforme où les utilisateurs peuvent poster leurs mêmes venant de source divers telle qu'une vidéo ou Twitter.",
          technologies: ['HTML5', 'Laravel', 'TailwindCSS'],
          github: 'medializ',
          category: 'website'
        },
        {
          image: 'quotesharing.png',
          title: 'QuoteSharing',
          description: "Création d'une plateforme permettant aux utilisateurs de poster des citations.",
          technologies: ['HTML5', 'Laravel', 'Bootstrap'],
          github: 'quotesharing',
          category: 'website'
        },
        {
          image: 'portfolio.png',
          title: 'Portfolio',
          description: "Création d'une plateforme permettant aux utilisateurs de poster des citations.",
          technologies: ['HTML5', 'VueJS', 'TailwindCSS', 'Auth0', 'Firebase'],
          github: 'portfolio',
          category: 'website'
        },
        {
          image: 'x-memes.png',
          title: 'X-Memes',
          description: "Création d'une plateforme permettant de partager ses mêmes favoris venant de Twitter.",
          technologies: ['HTML5', 'Laravel', 'VueJS', 'TailwindCSS'],
          url: 'https://x-memes.com',
          github: 'x-memes',
          category: 'website'
        },
      ],
      filteredProjects: [],
      active: 0
    }
  },

  methods: {
    countProjectsByCategory(category) {
      return this.projects.filter((project) => project.category === category).length
    },
    projects() {
      return this.projects
    },
    filteringProjects(category) {
      this.filteredProjects = this.projects

      if (!category || category !== 'all') {
        this.filteredProjects = this.projects.filter((project) => {
          return project.category === category
        })
      }
    }
  }
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
