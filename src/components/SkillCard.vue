<template>
  <div :class="`flex-1 ${last ? null : 'border-r'}`" data-aos="zoom-in" data-aos-duration="1000">
    <ion-icon :class="`p-2 rounded bg-${color}-100 text-${color}-400 text-5xl mb-6`" :name="`${icon}-outline`"></ion-icon>
    <p class="text-gray-700 font-bold uppercase text-xl mb-4">{{ title }}</p>
    <div class="flex mb-2" v-for="(skill, index) in skills" :key="index">
<!--      <div class="flex-1 text-right mr-2">-->
<!--        <img class="inline w-5 grayscale hover:grayscale-0" :src="`images/skills/${skill.toLowerCase().replace(' ', '-')}.png`" :alt="skill">-->
<!--      </div>-->
      <div class="flex-1 text-lg font-medium text-gray-500 ml-2">{{ skill }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillCard",

  props: {
    icon: {
      type: String,
    },
    color: {
      type: String
    },
    title: {
      type: String
    },
    skills: {
      type: Array
    },
    last: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped>

</style>