<template>
  <p class="text-justify text-lg mt-0 mb-4 leading-loose text-gray-600">
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