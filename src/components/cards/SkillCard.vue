<template>
  <AnimateOnScroll full>
    <div :class="`flex-1 ${last ? null : 'border-b dark:border-b-blue-800 lg:border-b-0 dark:lg:border-gray-700 lg:border-r'}`">
      <ion-icon :class="`p-2 rounded-xl bg-blue-100 dark:bg-blue-400 text-blue-400 dark:text-blue-900 text-5xl mb-6`" :name="`${icon}-outline`"></ion-icon>
      <Text type="subtitle">{{ title }}</Text>
      <div class="grid grid-cols-2 gap-x-5 gap-y-2 mb-2">
        <template v-for="(skill, index) in skills" :key="index">
            <Text :class="index % 2 ? 'text-left': 'text-right'">{{ skill }}</Text>
        </template>
      </div>
    </div>
  </AnimateOnScroll>
</template>

<script>
import Subtitle from "../elements/Subtitle.vue";
import AnimateOnScroll from "../misc/AnimateOnScroll.vue";
import Text from "../elements/Text.vue";
export default {
  name: "SkillCard",

  components: {
    Text,
    AnimateOnScroll,
    Subtitle
  },

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
