<template>
  <p class="leading-tight text-2xl mt-0 mb-2 text-gray-700 mb-5">
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