<template>
  <AnimateOnScroll>
    <div :class="`flex-1 ${last ? null : 'border-r'}`">
        <ion-icon :class="`p-2 rounded bg-blue-100 text-blue-400 text-5xl mb-6`" :name="`${icon}-outline`"></ion-icon>
      <Text type="subtitle">{{ title }}</Text>
      <div class="flex mb-2" v-for="(skill, index) in skills" :key="index">
        <!--      <div class="flex-1 text-right mr-2">-->
        <!--        <img class="inline w-5 grayscale hover:grayscale-0" :src="`images/skills/${skill.toLowerCase().replace(' ', '-')}.png`" :alt="skill">-->
        <!--      </div>-->
        <div class="flex-1 ml-2">
          <SecondaryText>{{ skill }}</SecondaryText>
        </div>
      </div>
    </div>
  </AnimateOnScroll>
</template>

<script>
import SecondaryText from "../elements/SecondaryText.vue";
import Subtitle from "../elements/Subtitle.vue";
import AnimateOnScroll from "../misc/AnimateOnScroll.vue";
import Text from "../elements/Text.vue";
export default {
  name: "SkillCard",
  components: {Text, AnimateOnScroll, Subtitle, SecondaryText},
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
