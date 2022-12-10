<template>
  <AnimateOnScroll>
    <button
        :class="{
        'px-4 py-1 text-sm': size === 'sm',
        'px-4 py-2.5': size === 'normal',
        'px-4 py-3 text-lg': size === 'lg',
        'px-7 py-3 w-100': size === 'full',
        'bg-gray-100 hover:bg-gray-200 text-blue-500': color === 'white',
        'bg-blue-500 dark:bg-blue-700 hover:bg-blue-700': color === 'primary',
        'bg-blue-100 dark:bg-blue-800/50 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white dark:bg-gray-800 dark:hover:bg-blue-800': secondary,
      }"
        type="button"
        class="inline-block rounded-full font-semibold leading-7 text-white transition-all duration-250 uppercase"
    >
      <template v-if="icon">
        <ion-icon class="text-2xl align-middle bg-blue-500 p-2 rounded-full text-white" :name="`${icon}-outline`"></ion-icon>
      </template>
      <slot></slot>
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
