<template>
  <router-link :to="{ name: to }">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "Link",

  props: {
    to: {
      type: String,
    },
  }
}
</script>

<style scoped>

</style>