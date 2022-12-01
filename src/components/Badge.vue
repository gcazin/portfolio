<template>
<span class="inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
  {{ text }}
</span>
</template>

<script>
export default {
  name: "Badge",

  props: {
    text: {
      type: String,
    }
  }
}
</script>

<style scoped>

</style>