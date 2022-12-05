<template>
  <AnimateOnScroll>
    <p
        :class="{
          'text-blue-500 font-bold pb-2 uppercase': type === 'heading',
          'text-4xl font-bold leading-tight pb-2': type === 'title',
          'text-2xl leading-tight text-gray-700 dark:text-gray-300 pb-2': type === 'subtitle',
          'text-lg leading-loose text-gray-600 dark:text-gray-400 pb-2': type === 'text',
        }"
    >
      <slot></slot>
    </p>
  </AnimateOnScroll>
</template>

<script>
import AnimateOnScroll from "../misc/AnimateOnScroll.vue";
export default {
  name: "Text",

  components: {
    AnimateOnScroll
  },

  props: {
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style scoped>

</style>
