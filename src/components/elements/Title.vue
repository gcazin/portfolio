<template>
  <AnimateOnScroll>
    <p class="font-bold leading-tight text-4xl pb-2">
      <slot></slot>
    </p>
  </AnimateOnScroll>
</template>

<script>
import AnimateOnScroll from "../misc/AnimateOnScroll.vue";
export default {
  name: "Title",
  components: {
    AnimateOnScroll
  },
}
</script>

<style scoped>

</style>
