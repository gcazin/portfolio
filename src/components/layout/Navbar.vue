<template>
  <nav class="fixed top-0 z-50 w-full border-b dark:border-gray-800 backdrop-blur-md">
    <div class="mx-auto max-w-7xl container">
      <div class="relative flex h-20 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button type="button" @click="toggleNavbar" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!--
              Icon when menu is closed.

              Heroicon name: outline/bars-3

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <!--
              Icon when menu is open.

              Heroicon name: outline/x-mark

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <Text type="subtitle" class="hidden sm:block">
            Guillaume Cazin
          </Text>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 invisible lg:static lg:visible sm:inset-auto sm:ml-6 sm:pr-0">
          <div class="relative ml-3">
            <div class="flex items-center space-x-4">
              <template v-for="item in items">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a :href="item.url" class="uppercase text-gray-800 dark:text-gray-200 hover:text-blue-400 px-2 font-bold" aria-current="page">
                  <template v-if="item.text === 'Contact'">
                    <Button>{{ item.text }}</Button>
                  </template>
                  <template v-else>
                    {{ item.text }}
                  </template>
                </a>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute right-5 top-1/4 h-full">
        <div class="flex dark:bg-gray-900 bg-gray-100 px-2 py-1.5 gap-2 rounded-xl" :key="componentKey">
          <ion-icon
              :class="{
            'bg-yellow-50 dark:bg-gray-700 text-yellow-500': darkModeIcon === 'sunny',
            'bg-gray-100 dark:bg-gray-300 text-gray-500 hover:bg-gray-300': darkModeIcon === 'moon',
          }"
              class="cursor-pointer p-1 rounded-lg text-xl"
              :name="checkTheme() === 'light' ? 'moon' : 'sunny'"
              @click="toggleTheme()"
          ></ion-icon>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div :class="{'static': menuMobileVisible, 'hidden': !menuMobileVisible}" id="mobile-menu">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <template v-for="item in items">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a :href="item.url" class="bg-blue-500 dark:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">
            {{ item.text }}
          </a>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
import Button from "../elements/Button.vue";
import Text from "../elements/Text.vue";
export default {
  name: "Navbar",

  components: {
    Text,
    Button
  },

  data() {
    return {
      items: [
        {
          url: '',
          text: 'Accueil',
        },
        {
          url: '#introduction',
          text: 'À propos',
        },
        {
          url: '#projets',
          text: 'Projets',
        },
        {
          url: '#contact',
          text: 'Contact',
        }
      ],
      menuMobileVisible: false,
      darkModeIcon: 'moon',
      componentKey: 0,
    }
  },

  mounted() {
    this.checkTheme()
  },

  methods: {
    toggleNavbar() {
      this.menuMobileVisible = !this.menuMobileVisible
    },
    checkTheme() {
      const theme = localStorage.getItem('theme')

      if (theme) {
        if (theme === 'dark') {
          document.documentElement.classList.add('dark')
          this.darkModeIcon = 'sunny'
        }
      }

      return theme
    },
    toggleTheme() {
      const theme = localStorage.getItem('theme')
      console.log('theme', theme)
      if (theme) {
        if (theme === 'light') {
          localStorage.setItem('theme', 'dark')
          document.documentElement.classList.add('dark')
          this.darkModeIcon = 'sunny'
        } else {
          localStorage.setItem('theme', 'light')
          document.documentElement.classList.remove('dark')
          this.darkModeIcon = 'moon'
        }
      } else {
        localStorage.setItem('theme', 'light')
      }
      this.componentKey += 1
      console.log('theme', theme)

    }
  }
}
</script>

<style scoped>

</style>
