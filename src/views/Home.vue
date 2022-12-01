<script setup>
import { ref } from 'vue'
import Hero from "../components/Hero.vue";
import Navbar from "../components/Navbar.vue";
import Title from "../components/Title.vue";
import Paragraph from "../components/Paragraph.vue";
import Badge from "../components/Badge.vue";
import Section from "../components/Section.vue";
import SkillCard from "../components/SkillCard.vue";
import Button from "../components/Button.vue";
import Subtitle from "../components/Subtitle.vue";

const count = ref(0)
</script>

<template>
  <!-- Menu -->
  <Navbar />

  <!-- Hero section -->
  <Hero />

  <!-- À propos -->
  <Section has-background>
    <div class="flex gap-20">
      <div class="flex-1">
        <div class="relative flex-1">
          <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_M9p23l.json" class="z-10 relative m-auto rounded-lg w-9/12" background="transparent"  speed="1" autoplay></lottie-player>
          <div
              class="absolute rounded-lg bg-blue-50 border-2 border-blue-100 w-full h-96"
              style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
          >
          </div>
        </div>
      </div>
      <div class="flex-1 text-left">
        <Title text="👋 Bonjour !" data-aos="zoom-in" data-aos-duration="100"/>
        <Subtitle text="Développeur full-stack basé à Boulogne-sur-Mer" data-aos="zoom-in" data-aos-duration="100"/>
        <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis nunc aliquam tincidunt est non. Viverra nec eu, in ridiculus egestas mi. Vulputate tristique porttitor enim aliquam ullamcorper. Velit dui laoreet in et mus." data-aos="zoom-in" data-aos-duration="100"/>
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
  <Section has-background title="Test" description="idsidq" />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
