<template>
  <footer :class="{'bg-slate-50/70 dark:bg-gray-900': hasBackground, 'bg-white dark:bg-gray-900/90': !hasBackground}">
    <div class="w-10/12 lg:w-8/12 m-auto md:flex md:justify-between py-10">
      <div class="mb-6 md:mb-0">
        <a href="/">
          <span class="text-2xl font-semibold dark:text-white">Guillaume Cazin</span>
        </a>
      </div>
      <div class="flex pt-5 space-x-6 sm:mt-0">
        <a target="_blank" href="https://www.linkedin.com/in/guillaume-cazin/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <Icon class="text-xl" name="logo-linkedin" :outline="false" />
          <span class="sr-only">LinkedIn</span>
        </a>
        <a target="_blank" href="http://github.com/gcazin" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <Icon class="text-xl" name="logo-github" :outline="false" />
          <span class="sr-only">GitHub</span>
        </a>
        <a target="_blank" href="https://twitter.com/guilomeczn" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <Icon class="text-xl" name="logo-twitter" :outline="false" />
          <span class="sr-only">Twitter</span>
        </a>
        <a target="_blank" href="https://codepen.io/gcazin" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <Icon class="text-xl" name="logo-codepen" :outline="false" />
          <span class="sr-only">Codepen</span>
        </a>
      </div>
    </div>
    <hr class="m-auto border-gray-200 sm:mx-auto dark:border-gray-700" />
    <div class="w-10/12 lg:w-8/12 m-auto py-5 sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline">Guillaume Cazin™</a>. Tous droits réservés.
        </span>
    </div>
  </footer>
</template>

<script>
import Icon from "../elements/Icon.vue";
export default {
  name: "Footer",
  components: {Icon},
  props: {
    hasBackground: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped>

</style>
