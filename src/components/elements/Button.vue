<template>
  <AnimateOnScroll>
    <button
        :class="{
        'px-6 py-2.5': size === 'normal',
        'px-7 py-3': size === 'lg',
        'px-7 py-3 w-100': size === 'full',
        'bg-gray-100 hover:bg-gray-200 text-blue-500': color === 'white',
        'bg-blue-500 hover:bg-blue-700': color === 'primary',
        'bg-blue-300 text-gray-800 hover:bg-blue-500 hover:text-white': secondary,
      }"
        type="button"
        class="inline-block rounded-full text-base font-semibold leading-7 text-white transition-colors uppercase"
    >
      <template v-if="icon">
        <ion-icon class="text-2xl align-middle bg-blue-500 p-2 rounded-full text-white" :name="`${icon}-outline`"></ion-icon>
      </template>
      {{ text }}
    </button>
  </AnimateOnScroll>
</template>

<script>
import AnimateOnScroll from "../misc/AnimateOnScroll.vue";
export default {
  name: "Button",
  components: {AnimateOnScroll},
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
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
    }
  }
}
</script>

<style scoped>

</style>
