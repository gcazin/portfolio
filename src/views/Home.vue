<template>
  <!-- Navbar -->
  <Navbar />

  <!-- Hero section -->
  <Section id="hero">
    <div class="isolate pt-32 pb-16">
      <div class="flex items-center h-full mx-auto container max-w-7xl">
        <div class="flex-1 flex flex-col gap-7">
          <Text type="subtitle" class="font-bold uppercase">👋, je suis</Text>
          <p class="text-blue-500 dark:text-blue-700 leading-normal font-extrabold tracking-tight text-7xl lg:text-8xl">Guillaume</p>
          <Text type="subtitle" class="font-bold uppercase">
            Un freelance <span class="element text-blue-500 dark:text-blue-600">{{ typed }}</span>
          </Text>
          <Button is-link to="cv">Voir mon cv</Button>
        </div>
        <div class="relative text-center hidden lg:block">
          <img src="/images/misc/blob-tear.svg" class="w-40 absolute -bottom-12 -left-10 -z-10" alt="Background">
          <img src="/images/misc/avatar.png" class="m-auto bg-gray-50 dark:bg-gray-900 w-80 rounded-tl-3xl rounded-br-3xl" alt="Avatar">
          <img src="/images/misc/blob-tear.svg" class="w-40 absolute -top-12 -right-10 -z-10" alt="Background">
        </div>
      </div>
    </div>
  </Section>

  <!-- À propos -->
  <Section
      id="introduction"
      heading="Introduction"
      title="👋 Bonjour !"
      subtitle="Développeur full-stack basé à Boulogne-sur-Mer" has-background
  >
    <div class="text-center">
      <div class="lg:flex lg:flex-col gap-5 m-auto text-justify">
        <div class="flex-1 mb-5">
          <Text>
            Bonjour! Je m'appelle Guillaume et je suis développeur web avec 2 ans d'expérience dans l'industrie.
            Passioné et autodidacte depuis plus de 12 ans dans le développement web,
            je suis spécialisé en JS, et plus spécifiquement en VueJS et très à l'aise en PHP notamment avec le framework Laravel.
          </Text>
          <Text>
            Au cours de ma carrière, j'ai travaillé sur une variété de projets allant des sites web de petites entreprises aux plateformes très spécifiques pour des entreprises de grande échelle.
            Durant mon temps libre, j'aime me tenir informé des dernières tendances et techniques en matière de développement web.
          </Text>
        </div>
        <div class="flex-1 lg:flex md:gap-10">
          <div class="flex flex-col w-full lg:w-1/3 gap-5 my-5">
            <Text class="border-b dark:border-b-blue-900">
              <Icon :outline="false" name="home" class="text-blue-500 mr-2" />
              Boulogne-sur-Mer
            </Text>
            <Text class="border-b dark:border-b-blue-900">
              <Icon :outline="false" name="mail" class="text-blue-500 font-bold mr-2" />
              czn.guillaume[at]gmail[dot]com
            </Text>
            <Text class="border-b dark:border-b-blue-900">
              <Icon :outline="false" name="speedometer" class="text-blue-500 font-bold mr-2" />
              Niveau confirmé (2 ans d'exp.)
            </Text>
            <Text>
              <Icon :outline="false" name="laptop" class="text-blue-500 font-bold mr-2" />
              Télétravail total
            </Text>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
            <Card title="+12" description="ans de passions" />
            <Card title="+2" description="ans d'expériences" />
            <Card title="+19" description="projets GitHub" />
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
    <References />
  </Section>

  <!-- Expériences -->
  <Section
      id="experiences"
      heading="Formations & diplômes"
      title="Expériences"
      has-background
  >
    <div class="flex flex-col justify-center py-6 lg:py-12">
      <div class="w-full mx-auto lg:max-w-4xl">
        <div class="relative">
          <div class="absolute hidden w-px h-full transform -translate-x-1/2 bg-blue-500 lg:block left-1/2"></div>
          <div class="space-y-24 lg:space-y-8">
            <ExperienceCard
                image="diatem.png"
                job="Développeur web"
                company="Diatem"
                period="Nov. 2020 - Nov. 2022"
                description="Utilisation de VueJS pour créer des interfaces utilisateur interactives et réactives, Drupal 8 pour construire des sites web à l'aide de son système de gestion de contenu (CMS) et Wordpress 5 pour mettre en œuvre des fonctionnalités avancées et personnalisées sur des sites web. Au cours de cette expérience, j'ai acquis une solide connaissance de ces technologies et j'ai également développé des compétences en matière de travail d'équipe et de communication."
                :technologies="['HTML5', 'CSS3', 'VueJS', 'PHP', 'Drupal 8', 'Wordpress', 'Laravel', 'jQuery', 'API']"
            />
            <ExperienceCard
                image="armatis.png"
                job="Stage en développement web"
                company="Armatis"
                period="2020"
                description="Développement d'une application mobile qui vise à simplifier les repas entre collègues. Cette application, développée en React Native, permet aux utilisateurs de s'organiser facilement pour les repas en groupe, que ce soit au bureau ou en déplacement.
La partie API de l'application a été écrite en PHP avec le framework Lumen, ce qui lui permet d'être rapide et fiable. L'application est conçue pour être facile à utiliser et intuitive.
Les utilisateurs peuvent créer des événements de repas en quelques minutes seulement, et inviter leurs collègues."
                :technologies="['React Native', 'HTML5', 'CSS3', 'PHP', 'Lumen', 'API']"
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
                :technologies="['HTML5', 'CSS3', 'Symfony', 'Framework Cocorico']"
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
    <div class="py-10">
      <div class="grid lg:grid-cols-3 gap-5 text-center">
        <SkillCard
            icon="code-slash"
            color="blue"
            title="Développement"
            :skills="['HTML', 'CSS', 'Boostrap', 'Tailwind', 'PHP', 'Laravel', 'Twig', 'Vanilla JS', 'VueJS', 'jQuery']"
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
            :skills="['Workstation Linux', 'Méthodes agile (Scrum, Kanban)', 'Versionning Git', 'Télétravail']"
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
    <div class="flex flex-col md:flex-row justify-center lg:grid-cols-3 gap-5">
      <Button size="sm" :secondary="projectCategory !== 'all'" @click="projectCategory = 'all'">Tout</Button>
      <Button :secondary="projectCategory !== 'website'" size="sm" @click="projectCategory = 'website'">Site web</Button>
      <Button :secondary="projectCategory !== 'web-application'" size="sm" @click="projectCategory = 'web-application'">Application web</Button>
      <Button :secondary="projectCategory !== 'resources'" secondary size="sm" @click="projectCategory = 'resources'">Ressources</Button>
    </div>
    <div class="mt-5">
      <Projects :category="projectCategory"/>
    </div>
  </Section>

  <!-- Contact -->
  <Section
      id="contact"
  >
    <div class="relative overflow-hidden max-w-7xl m-auto bg-blue-500 dark:bg-blue-700 dark:text-white text-blue-500 rounded-lg py-10 text-center">
      <div class="flex flex-col gap-5 px-5 lg:pr-10 z-10 relative">
        <div class="flex-1">
          <Text type="title" class="text-white">Intéressé ? Contactez-moi !</Text>
        </div>
        <div class="flex-1">
          <Button is-link to="cv" secondary>Prise de contact</Button>
        </div>
      </div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg width="818" height="286" viewBox="0 0 818 286" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-center">
          <circle cx="409" cy="409" r="408.5" stroke="url(#paint0_linear_0:1)"></circle>
          <circle cx="409" cy="409" r="349.5" stroke="url(#paint1_linear_0:1)"></circle>
          <defs>
            <linearGradient id="paint0_linear_0:1" x1="-34.5" y1="291.5" x2="851" y2="291.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" stop-opacity="0.35"></stop>
              <stop offset="0.218415" stop-color="white" stop-opacity="0"></stop>
              <stop offset="0.728079" stop-color="white" stop-opacity="0"></stop>
              <stop offset="1" stop-color="white" stop-opacity="0.35"></stop>
            </linearGradient>
            <linearGradient id="paint1_linear_0:1" x1="29.4768" y1="308.45" x2="787.24" y2="308.45" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" stop-opacity="0.35"></stop>
              <stop offset="0.218415" stop-color="white" stop-opacity="0"></stop>
              <stop offset="0.777261" stop-color="white" stop-opacity="0"></stop>
              <stop offset="1" stop-color="white" stop-opacity="0.35"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </Section>

  <!-- Scroll to top -->
  <div v-if="scrollTop > scrollTopPositionButtonAppear" class="fixed bottom-5 right-5 z-50">
    <Button secondary @click="scrollToTop"><Icon name="chevron-up" /></Button>
  </div>

  <Footer has-background />
</template>

<script>
import Text from "../components/elements/Text.vue";
import Section from "../components/layout/Section.vue";
import SkillCard from "../components/cards/SkillCard.vue";
import Button from "../components/elements/Button.vue";
import Subtitle from "../components/elements/Subtitle.vue";
import ExperienceCard from "../components/cards/ExperienceCard.vue";
import Badge from "../components/elements/Badge.vue";
import Typed from 'typed.js'
import Icon from "../components/elements/Icon.vue";
import Projects from "../components/misc/Projects.vue";
import Card from "../components/cards/Card.vue";
import References from "../components/misc/References.vue";
import Navbar from "../components/layout/Navbar.vue";
import Footer from "../components/layout/Footer.vue";

export default {
  name: "Home",

  components: {
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
    Footer
  },

  data() {
    return {
      url: null,
      typed: null,
      skills: [
        'full-stack',
        'JS',
        'VueJS',
        'PHP',
        'Drupal',
        'Wordpress',
        'Laravel',
      ],
      projectCategory: 'all',
      scrollTop: 0,
      scrollTopPositionButtonAppear: 250,
    }
  },
  mounted() {
    document.title = "Accueil - Portfolio de Guillaume Cazin"
    this.getTyped().then((typed) => {
      this.typed = typed
    })
    window.addEventListener("scroll", this.getScrollTop);
  },
  methods: {
    projects() {
      return projects
    },
    async getTyped() {
      return new Promise((successCallback) => {
        const typed = new Typed('.element', {
          strings: this.skills,
          typeSpeed: 150,
          loop: true,
        });
        successCallback(typed)
      })
    },
    getScrollTop() {
      this.scrollTop = document.documentElement.scrollTop;
    },
    scrollToTop() {
      const url = window.location.href

      this.url = this.removeAnchor(url)

      window.scrollTo({
        top: 0,
      });
    },
    removeAnchor(url) {
      const index = url.indexOf("#")

      if (index !== -1) {
        return url.substring(0, index)
      }

      return url
    }
  }
}
</script>

<style scoped>
</style>
