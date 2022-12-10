<template>
  <!-- Hero section -->
  <Section>
    <div class="isolate pt-32 pb-16">
      <div class="flex items-center h-full mx-auto container max-w-7xl">
        <div class="flex-1">
          <Text type="subtitle" class="font-bold uppercase">👋, je suis</Text>
          <p class="text-blue-500 leading-normal font-extrabold tracking-tight text-7xl lg:text-8xl">Guillaume</p>
          <Text type="subtitle" class="font-bold uppercase">
            Un développeur <span class="element text-blue-500">{{ typed }}</span>
          </Text>
          <div class="mt-8 flex">
            <Button>Me contacter</Button>
          </div>
        </div>
        <div class="relative text-center hidden lg:block">
          <img src="/images/blob-tear.svg" class="w-40 absolute -bottom-12 -left-10 -z-10" alt="">
          <img src="/images/avatar.png" class="m-auto bg-gray-50 dark:bg-gray-900 w-80 rounded-tl-3xl rounded-br-3xl" alt="">
          <img src="/images/blob-tear.svg" class="w-40 absolute -top-12 -right-10 -z-10" alt="">
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
    <div class="flex lg:flex-col gap-5 text-center">
      <div class="md:max-w-4xl m-auto text-justify">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel tincidunt arcu, vitae accumsan mauris. Integer turpis nisi, ultrices et arcu sit amet, venenatis dapibus sapien. Quisque ut libero vel dolor blandit elementum non nec sapien. Aliquam accumsan hendrerit iaculis.
        </Text>
        <div class="flex md:gap-20">
          <div class="flex flex-col gap-5 my-5">
            <Text class="border-b">
              <Icon :outline="false" name="home" class="text-blue-500 mr-2" />
              Boulogne-sur-Mer
            </Text>
            <Text class="border-b">
              <Icon :outline="false" name="mail" class="text-blue-500 font-bold mr-2" />
              czn.guillaume[at]gmail[dot]com
            </Text>
            <Text class="border-b">
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
      <Button secondary>Télécharger mon CV</Button>
    </div>
  </Section>

  <!-- Expériences -->
  <Section
      heading="Formations & diplômes"
      title="Mes expériences"
  >
    <div class="flex flex-col justify-center py-6 lg:py-12">
      <div class="w-full mx-auto lg:max-w-4xl">
        <div class="relative">
          <div class="absolute hidden w-px h-full transform -translate-x-1/2 bg-blue-500 lg:block left-1/2"></div>
          <div class="space-y-12 lg:space-y-8">
            <ExperienceCard
                image="diatem.png"
                job="Développeur web"
                company="Diatem"
                period="Nov. 2020 - Nov. 2022"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel tincidunt arcu, vitae accumsan mauris."
            />
            <ExperienceCard
                image="armatis.png"
                job="Stage en développement web"
                company="Armatis"
                period="2020"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel tincidunt arcu, vitae accumsan mauris."
                right
            />
            <ExperienceCard
                image="echinghen.png"
                job="Stage en développement web"
                company="Commune d'Échinghen"
                period="2018"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel tincidunt arcu, vitae accumsan mauris."
            />
            <ExperienceCard
                image="armatis.png"
                company="Mesconcierges"
                job="Stage en développement web"
                period="Nov. 2020 - Nov. 2022"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel tincidunt arcu, vitae accumsan mauris."
                right
            />
          </div>
        </div>
      </div>
    </div>
  </Section>

  <!-- Mes compétences -->
  <Section
      title="Mes compétences"
      has-background
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
            :skills="['Figma', 'PhpStorm', 'Visual studio code']"
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
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel tincidunt arcu, vitae accumsan mauris. Integer turpis nisi, ultrices et arcu sit amet, venenatis dapibus sapien. Quisque ut libero vel dolor blandit elementum non nec sapien. Aliquam accumsan hendrerit iaculis.">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <Button size="sm">Tout</Button>
      <Button secondary size="sm">Site web</Button>
      <Button secondary size="sm">Application web</Button>
    </div>
    <div class="mt-5">
      <Projects />
    </div>
  </Section>

  <!-- Contact -->
  <Section
      id="contact"
      has-background
  >
    <div class="relative overflow-hidden max-w-7xl m-auto bg-white dark:bg-blue-700 dark:text-white text-blue-500 rounded-lg py-10 text-center">
      <div class="flex flex-col gap-5 lg:pr-10 z-10 relative">
        <div class="flex-1">
          <Text type="title">Intéressé ? Contactez-moi !</Text>
        </div>
        <div class="flex-1">
          <Button secondary color="white">Prise de contact</Button>
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

export default {
  name: "Home",

  components: {
    Card,
    Projects,
    Icon,
    Text,
    Section,
    SkillCard,
    Button,
    Subtitle,
    ExperienceCard,
    Badge
  },

  data() {
    return {
      typed: null,
      skills: [
        'front-end',
        'back-end',
        'VueJS',
        'PHP',
        'Laravel',
      ]
    }
  },
  mounted() {
    this.getTyped().then((typed) => {
      this.typed = typed
    })
  },
  methods: {
    async getTyped() {
      return new Promise((successCallback) => {
        const typed = new Typed('.element', {
          strings: this.skills,
          typeSpeed: 150
        });
        successCallback(typed)
      })
    }
  }
}
</script>

<style scoped>
</style>
