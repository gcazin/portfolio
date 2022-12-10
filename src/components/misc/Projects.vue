<template>
  <AnimateOnScroll>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5">
      <div v-for="(project, index) in filteredProjects" :key="index">
        <Transition
            name="projects"
            enter-class="project-in"
            leave-class="project-out"
            enter-active-class="animated project-in-active"
            leave-active-class="animated project-out-active"
        >
          <div class="group relative bg-slate-50 rounded-xl hover:bg-blue-500 transition-colors duration-500 hover:text-white group-hover:bg-blue-500">
            <img class="rounded w-full" :src="project.image" :alt="project.title">
            <div
                class="
              text-lg
                overflow-hidden
                rounded
                group-hover:transition-colors
                invisible group-hover:visible
                group-hover:bg-blue-500/90 group-hover:text-white
                absolute p-5 h-full w-full z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
              "
            >
              <div class="absolute right-0 top-0">
                <svg width="218" height="109" viewBox="0 0 218 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle opacity="0.05" cx="156.5" cy="-47.5" r="156.5" fill="white"></circle>
                  <circle opacity="0.08" cx="210" cy="6" r="62" fill="white"></circle>
                </svg>
              </div>
              <div class="flex flex-col gap-3 items-center justify-center px-10  h-full">
                <p class="text-xl">{{ project.title }}</p>
                <p>{{ project.description }}</p>
                <div class="flex text-3xl gap-1">
                  <template v-if="project.url">
                    <a target="_blank" :href="project.url"><Icon name="link" /></a>
                  </template>
                  <template v-if="project.codepen">
                    <a target="_blank" :href="project.codepen"><Icon name="logo-codepen" :outline="false" /></a>
                  </template>
                  <template v-if="project.github">
                    <a target="_blank" :href="`https://github.com/gcazin/${project.github}`"><Icon name="logo-github" :outline="false" /></a>
                  </template>
                </div>
                <ul class="flex gap-1">
                  <li
                      v-for="(technology, index) in project.technologies"
                      :key="index"
                  >
                    <Badge>{{ technology }}</Badge>
                  </li>
                </ul>
              </div>
              <div class="absolute bottom-0 left-0">
                <svg width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="21.262" cy="1.12081" r="1.12081" transform="rotate(90 21.262 1.12081)" fill="white"></circle>
                  <circle cx="21.262" cy="30.4863" r="1.12081" transform="rotate(90 21.262 30.4863)" fill="white"></circle>
                  <circle cx="1.76005" cy="1.12081" r="1.12081" transform="rotate(90 1.76005 1.12081)" fill="white"></circle>
                  <circle cx="1.76005" cy="30.4863" r="1.12081" transform="rotate(90 1.76005 30.4863)" fill="white"></circle>
                  <circle cx="11.6228" cy="1.12081" r="1.12081" transform="rotate(90 11.6228 1.12081)" fill="white"></circle>
                  <circle cx="11.6228" cy="30.4863" r="1.12081" transform="rotate(90 11.6228 30.4863)" fill="white"></circle>
                  <circle cx="21.262" cy="10.9839" r="1.12081" transform="rotate(90 21.262 10.9839)" fill="white"></circle>
                  <circle cx="1.76005" cy="10.9839" r="1.12081" transform="rotate(90 1.76005 10.9839)" fill="white"></circle>
                  <circle cx="11.6228" cy="10.9839" r="1.12081" transform="rotate(90 11.6228 10.9839)" fill="white"></circle>
                  <circle cx="21.262" cy="20.8469" r="1.12081" transform="rotate(90 21.262 20.8469)" fill="white"></circle>
                  <circle cx="1.76005" cy="20.8469" r="1.12081" transform="rotate(90 1.76005 20.8469)" fill="white"></circle>
                  <circle cx="11.6228" cy="20.8469" r="1.12081" transform="rotate(90 11.6228 20.8469)" fill="white"></circle>
                </svg>
              </div>
            </div>
          </div>
        </Transition>
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
          image: '/images/spotify-automatic-playlist-filler.png',
          title: 'Spotify automatic playlist sorter',
          description: "Petit utilitaire permetttant de récupérer les dernières musiques aimées, d'en extraire le genre et de les classer dans les bonnes playlists",
          technologies: ['VueJS', 'API', 'Bootstrap'],
          url: 'https://auto-sorting-spotify-liked-songs.netlify.app',
          github: 'auto-sorting-spotify-liked-songs',
          category: 'web-application'
        },
        {
          image: '/images/pure-css-windows-10-desktop.png',
          title: 'Pure CSS Windows 10 desktop',
          description: "Reproduction de l'interface de Windows 10 en HTML5/SCSS",
          technologies: ['SCSS'],
          github: 'pure-css-windows-10-desktop',
          codepen: 'https://codepen.io/gcazin/full/bKbMQW',
          category: 'resources'
        },
        {
          image: '/images/slimys.png',
          title: 'Slimys',
          description: "Création d'un site vitrine pour un projet NFT, avec liaison API a un back-end développé en Lumen",
          technologies: ['Lumen', 'VueJS', 'Bootstrap'],
          url: 'https://www.slimysnft.io/',
          category: 'website'

        },
        {
          image: '/images/inskub.jpg',
          title: 'Inskub',
          description: "Création d'une plateforme d'assurance mettant en lien les experts du domaine au travers d'une plateforme sociale.",
          technologies: ['Laravel', 'Boostrap'],
          github: 'inskub',
          category: 'website'
        },
        {
          image: '/images/medializ.png',
          title: 'Medializ',
          description: "Création d'une plateforme où les utilisateurs peuvent poster leurs mêmes venant de source divers telle qu'une vidéo ou Twitter",
          technologies: ['Laravel', 'Tailwind'],
          github: 'medializ',
          category: 'website'
        },
        {
          image: '/images/quotesharing.png',
          title: 'QuoteSharing',
          description: "Création d'une plateforme permettant aux utilisateurs de poster des citations",
          technologies: ['Laravel', 'Bootstrap'],
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
.projects .animated {
  transition: all 400ms;
  position: absolute;
  transform: translate(-50%, -50%);
}
.projects .project-in {
  opacity: 0;
  transform: translate(-40%, -50%);
}
.projects .project-in-active {
  transition-delay: 150ms;
}
.projects .project-out {
  opacity: 1;
}
.projects .project-out-active {
  opacity: 0;
  transform: translate(-60%, -50%);
}
</style>
