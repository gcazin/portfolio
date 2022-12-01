<template>
  <button
      :class="{
        'px-6 py-2.5': size === 'normal',
        'px-7 py-3': size === 'lg',
        'bg-blue-500 hover:bg-blue-700': color === 'primary'
      }"
      type="button"
      class="inline-block rounded-full text-base font-semibold leading-7 text-white transition-colors uppercase"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",

  props: {
    size: {
      type: String,
      default: 'normal'
    },
    color: {
      type: String,
      default: 'primary'
    },
    text: {
      type: String,
    }
  }
}
</script>

<style scoped>

</style>
