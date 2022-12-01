<template>
  <h1 class="font-bold leading-tight text-4xl text-gray-900 dark:text-white pb-2">
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
