<template>
  <div class="pt-36 isolate">
    <div class="flex items-center h-full mx-auto container max-w-7xl">
      <div class="flex-1">
        <p class="uppercase text-2xl text-gray-700 dark:text-gray-300 font-medium">{{ subtitle }}</p>
        <p class="text-blue-500 leading-normal font-extrabold tracking-tight text-8xl">{{ title }}</p>
        <p class="uppercase text-gray-700 dark:text-gray-300 leading-normal font-bold tracking-tight text-xl">
          Un développeur <span class="element text-blue-500">{{ typed }}</span>
        </p>
      </div>
      <div class="relative flex-1">
        <div class="mb-6" style="position: relative">
            <lottie-player class="bg-gray-100 dark:bg-gray-900 rounded-lg" src="https://assets8.lottiefiles.com/packages/lf20_zvlsfl0d.json"  background="transparent"  speed="1" loop autoplay></lottie-player>

        </div>
      </div>
      <div class="mt-8 flex gap-x-4 sm:justify-center">
        <!--              <a href="#" class="inline-block rounded-lg bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-blue-800 hover:ring-indigo-700">
                        View projects
                        <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
                      </a>-->
        <!--              <a href="#" class="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        Live demo
                        <span class="text-gray-400" aria-hidden="true">&rarr;</span>
                      </a>-->
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../elements/Button.vue";
import Typed from 'typed.js'
export default {
  name: "Hero",
  components: {Button},

  props: {
    subtitle: {
      type: String,
      default: '👋, je suis'
    },
    title: {
      type: String,
      default: 'Guillaume'
    }
  },

  data() {
    return {
      typed: null,
      skills: [
        'front-end',
        'back-end',
        'VueJS',
        'PHP',
        'Laravel',
      ]
    }
  },
  mounted() {
    this.getTyped()
  },
  methods: {
    getTyped() {
      this.typed = new Typed('.element', {
        strings: this.skills,
        typeSpeed: 150
      });
    }
  }
}
</script>

<style scoped>

</style>
