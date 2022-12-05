<template>
  <!-- Hero section -->
  <Section>
    <div class="isolate pt-16">
      <div class="flex items-center h-full mx-auto container max-w-7xl">
        <div class="flex-1">
          <Text type="subtitle" class="font-bold uppercase">👋, je suis</Text>
          <p class="text-blue-500 leading-normal font-extrabold tracking-tight text-8xl">Guillaume</p>
          <Text type="subtitle" class="font-bold uppercase">
            Un développeur <span class="element text-blue-500">{{ typed }}</span>
          </Text>
          <div class="mt-8 flex">
            <Button>Me contacter</Button>
          </div>
        </div>
        <div class="relative text-center">
          <img src="images/blob-tear.svg" class="w-40 absolute -bottom-10 -right-10 -z-10" alt="">
          <img src="images/avatar.png" class="m-auto bg-gray-50 dark:bg-gray-900 w-80 rounded-tl-3xl rounded-br-3xl" alt="">
        </div>
      </div>
    </div>
  </Section>

  <!-- À propos -->
  <Section
      heading="Introduction"
      title="👋 Bonjour !"
      subtitle="Développeur full-stack basé à Boulogne-sur-Mer" has-background
  >
    <div class="flex flex-col gap-5 text-center">
      <div class="max-w-4xl m-auto text-justify">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel tincidunt arcu, vitae accumsan mauris. Integer turpis nisi, ultrices et arcu sit amet, venenatis dapibus sapien. Quisque ut libero vel dolor blandit elementum non nec sapien. Aliquam accumsan hendrerit iaculis.
        </Text>
        <div class="grid grid-rows-2 grid-cols-2 gap-5 my-5">
          <Text class="border-b">
            <Icon :outline="false" name="home" class="text-blue-500 mr-2" />
            Boulogne-sur-Mer
          </Text>
          <Text class="border-b">
            <Icon :outline="false" name="mail" class="text-blue-500 font-bold mr-2" />
            czn.guillaume[at]gmail[dot]com
          </Text>
          <Text>
            <Icon :outline="false" name="speedometer" class="text-blue-500 font-bold mr-2" />
            Niveau confirmé (2 ans d'exp.)
          </Text>
          <Text>
            <Icon :outline="false" name="laptop" class="text-blue-500 font-bold mr-2" />
            Télétravail total
          </Text>
        </div>
      </div>
      <Button secondary>Télécharger mon CV</Button>
    </div>
  </Section>

  <!-- Expériences -->
  <Section heading="Formations & diplômes" title="Mes expériences">
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
  <Section  title="Mes compétences" has-background>
    <div class="py-10">
      <div class="flex text-center">
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
      heading="Portfolio"
      title="Mes projets"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel tincidunt arcu, vitae accumsan mauris. Integer turpis nisi, ultrices et arcu sit amet, venenatis dapibus sapien. Quisque ut libero vel dolor blandit elementum non nec sapien. Aliquam accumsan hendrerit iaculis.">
    <div class="flex justify-center gap-5">
      <Badge>Tout</Badge>
      <Badge>Site web</Badge>
      <Badge>Application web</Badge>
    </div>
    <div class="mt-5">
      <Slider />
    </div>
  </Section>

  <!-- Contact -->
  <Section has-background>
    <div class="max-w-7xl m-auto bg-blue-500 text-white rounded-lg py-10 text-center">
      <div class="flex flex-col gap-5 px-10">
        <Text type="title">Voulez-vous travailler avec moi ?</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel tincidunt arcu, vitae accumsan mauris. Integer turpis nisi, ultrices et arcu sit amet, venenatis dapibus sapien. Quisque ut libero vel dolor blandit elementum non nec sapien. Aliquam accumsan hendrerit iaculis.</Text>
        <Button color="white">Télécharger mon cv</Button>
      </div>
    </div>
  </Section>
</template>

<script>
import Title from "../components/elements/Title.vue";
import Text from "../components/elements/Text.vue";
import Section from "../components/layout/Section.vue";
import SkillCard from "../components/cards/SkillCard.vue";
import Button from "../components/elements/Button.vue";
import Subtitle from "../components/elements/Subtitle.vue";
import ExperienceCard from "../components/cards/ExperienceCard.vue";
import Slider from "../components/elements/Slider.vue";
import Badge from "../components/elements/Badge.vue";
import Typed from 'typed.js'
import Icon from "../components/elements/Icon.vue";

export default {
  name: "Home",

  components: {
    Icon,
    Title,
    Text,
    Section,
    SkillCard,
    Button,
    Subtitle,
    ExperienceCard,
    Slider,
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
