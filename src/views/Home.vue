<script setup>
import { ref } from 'vue'
import Hero from "../components/layout/Hero.vue";
import Title from "../components/elements/Title.vue";
import Text from "../components/elements/Text.vue";
import Section from "../components/layout/Section.vue";
import SkillCard from "../components/cards/SkillCard.vue";
import Button from "../components/elements/Button.vue";
import Subtitle from "../components/elements/Subtitle.vue";
import ExperienceCard from "../components/cards/ExperienceCard.vue";
import Slider from "../components/elements/Slider.vue";
import Badge from "../components/elements/Badge.vue";
import SecondaryText from "../components/elements/SecondaryText.vue";

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
      <div class="flex flex-col gap-5 flex-1 text-left">
        <p class="text-blue-500 font-bold pb-2 uppercase">Introduction</p>
        <Title>👋 Bonjour !</Title>
        <Subtitle>
          Développeur full-stack basé à Boulogne-sur-Mer
        </Subtitle>
        <Text>
          Passionné par le développement web depuis maintenant mes 12 ans, j'aime apprendre et créer de nouvelles choses.
        </Text>
        <Button text="Télécharger mon CV !"/>
      </div>
    </div>
  </Section>

  <!-- Mes compétences -->
  <Section
      title="Mes compétences"
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
  <Section title="Mes expériences" has-background>
    <div class="flex flex-col justify-center py-6 lg:py-12">
      <div class="w-full mx-auto lg:max-w-4xl">
        <div class="relative">
          <div class="absolute hidden w-px h-full transform -translate-x-1/2 bg-indigo-300 lg:block left-1/2"></div>
          <div class="space-y-12 lg:space-y-8">
            <ExperienceCard
                image="diatem.png"
                job="Développeur web"
                company="Diatem"
                period="Nov. 2020 - Nov. 2022"
                description="Lorem ipsum dolor sit amet"
            />
            <ExperienceCard
                image="armatis.png"
                job="Stage en développement web"
                company="Armatis"
                period="2020"
                description="Lorem ipsum dolor sit amet"
                right
            />
            <ExperienceCard
                image="echinghen.png"
                job="Stage en développement web"
                company="Commune d'Échinghen"
                period="2018"
                description="Lorem ipsum dolor sit amet"
            />
            <ExperienceCard
                image="armatis.png"
                company="Mesconcierges"
                job="Stage en développement web"
                period="Nov. 2020 - Nov. 2022"
                description="Lorem ipsum dolor sit amet"
                right
            />
          </div>
        </div>
      </div>
    </div>
  </Section>
  <Section title="Mes projets" description="Lorem ipsum dolor sit amet">
    <div class="flex justify-center gap-5">
      <Badge>Tout</Badge>
      <Badge>Site web</Badge>
      <Badge>Application web</Badge>
    </div>
    <Slider />
  </Section>
  <Section has-background>
    <div class="max-w-7xl m-auto bg-blue-500 text-white rounded-lg py-10 text-center">
      <div class="flex flex-col gap-5">
        <Title>Voulez-vous travailler avec moi ?</Title>
        <Text>Oui</Text>
        <Button color="white" text="Télécharger mon cv"></Button>
      </div>
    </div>
  </Section>
</template>

<style scoped>
</style>
