<template>
  <p class="text-justify text-lg pb-6 leading-loose text-gray-600 dark:text-gray-400">
    {{ text }}
  </p>
</template>

<script>
export default {
  name: "Paragraph",

  props: {
    text: {
      type: String,
    }
  }
}
</script>

<style scoped>

</style>
