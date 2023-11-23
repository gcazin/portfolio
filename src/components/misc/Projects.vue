<template>
  <AnimateOnScroll>
    <div class="flex gap-12 mt-12 mb-16" v-for="(project, index) in filteredProjects" :key="index">
      <div :class="index % 2 === 0 ? 'order-0' : 'order-1'">
        <img class="rounded-lg shadow-lg" :src="`images/projects/${project.image}`" :alt="project.title">
      </div>
      <div class="w-full flex flex-col gap-2" :class="index % 2 === 0 ? 'order-1' : 'order-0'">
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
        <ul class="flex gap-2">
          <li
              v-for="(technology, index) in project.technologies"
              :key="index"
          >
            <img
                class="w-8"
                :src="`images/skills/${technology.toLowerCase()}.png`"
                :alt="technology"
                :title="technology"
            >
          </li>
        </ul>
      </div>
    </div>
  </AnimateOnScroll>
</template>

<script>
import Text from "../elements/Text.vue";
import AnimateOnScroll from "./AnimateOnScroll.vue";
import Badge from "../elements/Badge.vue";
import Icon from "../elements/Icon.vue";
import projects from "./Projects.vue";
export default {
  name: "Projects",

  components: {
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
          technologies: ['HTML5', 'Laravel', 'Tailwind'],
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
      ],
      filteredProjects: [],
      active: 0
    }
  },

  methods: {
    projects() {
      return projects
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
