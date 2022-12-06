<template>
    <div
        :class="{
      'cursor-pointer bg-white hover:bg-blue-500 text-blue-500': button,
      'bg-blue-500 text-white': !button && !secondary,
      'bg-blue-100 text-blue-500': !button && secondary
    }"
        class="w-fit py-2.5 px-3.5 leading-none text-center whitespace-nowrap align-baseline font-bold dark:bg-blue-700 rounded-full transition-colors text-base"
    >
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "Badge",

  props: {
    button: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped>

</style>
