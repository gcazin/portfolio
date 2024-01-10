<script setup>
defineProps({
  hero: {
    type: Boolean,
    default: false,
  },
  invert: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <div
      v-if="hero"
      class="absolute inset-0 bottom-10 bg-bottom bg-no-repeat hero opacity-25 z-0"
  ></div>
  <div
      v-else
      class="absolute top-0 inset-x-0 bg-top bg-no-repeat section opacity-25 z-0"
      :style="{ transform: invert ? 'rotateY(3.142rad)' : null }"
  ></div>
</template>
<style scoped>
.dark .hero {
  background-image: url(/images/misc/background/hero-dark.jpg);
  background-size: 100rem;
  height: 100%;
}
.dark .section {
  background-image: url(/images/misc/background/section-dark.png);
  background-size: 125.5rem 100%;
  height: 100%;
}
</style>
