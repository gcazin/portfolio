<template>
  <AnimateOnScroll>
    <p class="leading-tight text-2xl text-gray-700 dark:text-gray-300">
      <slot></slot>
    </p>
  </AnimateOnScroll>
</template>

<script>
import AnimateOnScroll from "../misc/AnimateOnScroll.vue";
export default {
  name: "Subtitle",
  components: {AnimateOnScroll},
}
</script>

<style scoped>

</style>
