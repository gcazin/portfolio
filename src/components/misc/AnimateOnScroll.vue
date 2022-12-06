<template>
  <div :class="{'w-full': full}" data-aos="zoom-in" data-aos-duration="500">
    <slot></slot>
  </div>
</template>

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

<style scoped>

</style>
