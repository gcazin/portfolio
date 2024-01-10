<script>
import Button from "../elements/Button.vue";
import Text from "../elements/Text.vue";
import Icon from "../elements/Icon.vue";
import Link from "../elements/Link.vue";
export default {
  name: "Navbar",

  components: {
    Link,
    Icon,
    Text,
    Button
  },

  data() {
    return {
      items: [
        {
          url: '#hero',
          text: 'Accueil',
        },
        {
          url: '#introduction',
          text: 'À propos',
        },
        {
          url: '#experiences',
          text: 'Expériences',
        },
        {
          url: '#competences',
          text: 'Compétences',
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
      anchorName: null,
      componentKey: 0,
      isAuthenticated: this.$auth0.isAuthenticated
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

      this.setDefaultTheme()

      return theme
    },
    setDefaultTheme() {
      if (
          localStorage.theme === 'dark'
          || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
      }
    },
    toggleTheme() {
      const theme = localStorage.getItem('theme')
      if (theme) {
        if (theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
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
    },
    checkCurrentUrl() {
      this.menuMobileVisible = false

      const anchor = window.location.hash

      if (anchor) {
        this.anchorName = anchor
        this.componentKey += 1
      }
    }
  }
}
</script>

<template>
  <nav
      class="fixed top-0 z-50 w-full border-b dark:border-gray-800 backdrop-blur-md"
      role="navigation"
      aria-label="navigation"
  >
    <div class="mx-auto w-10/12 lg:max-w-7xl container">
      <div class="relative flex h-20 items-center justify-between">
        <div class="lg:hidden">
          <!-- Mobile menu button-->
          <Button @click="toggleNavbar" color="transparent">
            <Icon class="text-3xl" name="menu" />
          </Button>
        </div>
        <div class="flex flex-1 items-center ml-4 lg:ml-0">
          <Link to="home">
            <Text type="subtitle">
              Guillaume Cazin
            </Text>
          </Link>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center invisible lg:static lg:visible sm:inset-auto">
          <div class="relative ml-3">
            <ul class="flex items-center space-x-4">
              <li v-for="item in items">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a
                    v-if="item.text !== 'Contact'"
                    :href="`/${item.url}`"
                    class="uppercase text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-600 px-2 font-bold transition-colors"
                >
                  {{ item.text }}
                </a>
                <Button v-else is-link to="cv">{{ item.text }}</Button>
              </li>
              <a
                  v-if="isAuthenticated"
                  href="/admin/dashboard"
                  class="uppercase text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-600 px-2 font-bold transition-colors"
              >
                Administration
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div class="absolute right-5 top-5 lg:top-1/4 lg:h-full">
        <button
            class="flex dark:bg-gray-900 bg-gray-100 gap-2 rounded-xl"
            :key="componentKey"
            @click="toggleTheme()"
        >
          <Icon
              :class="{
                'bg-yellow-50 dark:bg-gray-700 text-yellow-500': darkModeIcon === 'sunny',
                'bg-gray-100 dark:bg-gray-300 text-gray-500 hover:bg-gray-300': darkModeIcon === 'moon',
              }"
              class="cursor-pointer p-1 rounded-lg text-xl px-2 py-1.5"
              :name="checkTheme() === 'light' ? 'moon' : 'sunny'"
              :outline="false"
          ></Icon>
        </button>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div :key="componentKey" class="w-10/12 mx-auto" :class="{'static': menuMobileVisible, 'hidden': !menuMobileVisible}" id="mobile-menu">
      <div class="space-y-1 pb-3">
        <template v-for="item in items">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a
              :href="`/${item.url}`"
              @click="checkCurrentUrl()"
              :class="{'bg-blue-500 text-white dark:bg-blue-800': anchorName === item.url}"
              class="dark:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            {{ item.text }}
          </a>
        </template>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>
