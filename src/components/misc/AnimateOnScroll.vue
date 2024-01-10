<script>

export default {
  name: "AnimateOnScroll",

  props: {
    full: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<template>
  <div :class="{'w-full': full}" data-aos="zoom-in" data-aos-duration="500" data-aos-once="true">
    <slot></slot>
  </div>
</template>

<style scoped>
</style>
