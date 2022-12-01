<template>
  <p class="leading-tight text-2xl pb-4 text-gray-700 dark:text-gray-300">
    {{ text }}
  </p>
</template>

<script>
export default {
  name: "Subtitle",

  props: {
    text: {
      type: String,
    }
  }
}
</script>

<style scoped>

</style>
