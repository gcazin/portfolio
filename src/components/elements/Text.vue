<template>
  <AnimateOnScroll>
    <p class="text-lg pb-6 leading-loose text-gray-600 dark:text-gray-400">
      <slot></slot>
    </p>
  </AnimateOnScroll>
</template>

<script>
import AnimateOnScroll from "../misc/AnimateOnScroll.vue";
export default {
  name: "Text",
  components: {AnimateOnScroll},
}
</script>

<style scoped>

</style>
