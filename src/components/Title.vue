<template>
  <h1 class="font-bold leading-tight text-4xl mt-0 mb-2 text-gray-900 mb-2">
    {{ text }}
  </h1>
</template>

<script>
export default {
  name: "Title",

  props: {
    text: {
      type: String,
    }
  }
}
</script>

<style scoped>

</style>