<script setup>
import { ref } from 'vue'
import Hero from "../components/Hero.vue";
import Title from "../components/Title.vue";
import Paragraph from "../components/Paragraph.vue";
import Section from "../components/Section.vue";
import SkillCard from "../components/SkillCard.vue";
import Button from "../components/Button.vue";
import Subtitle from "../components/Subtitle.vue";
import ExperienceCard from "../components/ExperienceCard.vue";

const count = ref(0)
</script>

<template>
  <!-- Hero section -->
  <Hero />

  <!-- À propos -->
  <Section has-background>
    <div class="flex gap-20">
      <div class="flex-1">
        <div class="relative flex-1">
          <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_M9p23l.json" class="z-10 relative m-auto rounded-lg w-9/12" background="transparent"  speed="1" autoplay></lottie-player>
        </div>
      </div>
      <div class="flex-1 text-left">
        <p class="text-blue-500 font-bold pb-2 uppercase">Introduction</p>
        <Title text="👋 Bonjour !" data-aos="zoom-in" data-aos-duration="100"/>
        <Subtitle text="Développeur full-stack basé à Boulogne-sur-Mer" data-aos="zoom-in" data-aos-duration="100"/>
        <Paragraph text="Passionné par le développement web depuis maintenant mes 12 ans, j'aime apprendre et créer de nouvelles choses." data-aos="zoom-in" data-aos-duration="100"/>
        <Button text="Télécharger mon CV !"/>
      </div>
    </div>
  </Section>

  <!-- Mes compétences -->
  <Section
      title="Mes compétences"
      description="Since beginning my journey as a freelance designer over 11 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time."
  >
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
  <Section title="Mes expériences" has-background has-button>
    <template #button>
      <Button text="Télécharger mon CV" size="lg" />
    </template>
    <div class="grid gap-10 grid-cols-2 grid-rows-2 auto-rows-max relative z-10">
      <ExperienceCard
          image="diatem.png"
          company="Diatem"
          job="Développeur web"
          period="Nov. 2020 - Nov. 2022"
          description="Lorem ipsum dolor sit amet"
          data-aos="zoom-in" data-aos-duration="100"
      />
      <ExperienceCard
          image="armatis.png"
          company="Armatis"
          job="Stage développeur web"
          period="2020"
          description="Lorem ipsum dolor sit amet"
          data-aos="zoom-in" data-aos-duration="100"
      />
      <ExperienceCard
          image="echinghen.png"
          company="Commune d'Échinghen"
          job="Développeur web"
          period="2018"
          description="Lorem ipsum dolor sit amet"
          data-aos="zoom-in" data-aos-duration="100"
      />
      <ExperienceCard
          image="armatis.png"
          company="Armatis"
          job="Développeur web"
          period="Nov. 2020 - Nov. 2022"
          description="Lorem ipsum dolor sit amet"
          data-aos="zoom-in" data-aos-duration="100"
      />
    </div>
<!--    <div
        class="absolute rounded-lg bg-blue-50 dark:bg-blue-500 w-9/12 h-96"
        style="top: 40%; left: 50%; transform: translate(-50%, -50%)">
    </div>-->
  </Section>
  <Section title="Mes projets" has-button>
    <template #button>
      <Button size="lg" text="Voir tout"/>
    </template>
  </Section>
</template>

<style scoped>
</style>
