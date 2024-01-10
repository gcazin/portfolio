<script>
import Icon from "../elements/Icon.vue";
import Container from "./Container.vue";
import Login from "../../admin/components/Login.vue";
import Logout from "../../admin/components/Logout.vue";
import Link from "../elements/Link.vue";

export default {
  name: "Footer",

  components: {
    Link,
    Logout,
    Login,
    Container,
    Icon
  },

  props: {
    hasBackground: {
      type: Boolean,
      default: false,
    }
  },

  data() {
    return {
      isAuthenticated: this.$auth0.isAuthenticated
    }
  }
}
</script>

<template>
  <footer
      class="border-t border-gray-100 dark:border-gray-900"
      :class="{'bg-slate-100 dark:bg-[#0B1120]/90': hasBackground, 'bg-slate-50 dark:bg-[#0B1120]': !hasBackground}"
  >
    <Container>
      <div class="md:flex md:justify-between py-10">
        <div class="mb-6 md:mb-0">
          <a href="/">
            <span class="text-2xl font-semibold dark:text-white">Guillaume Cazin</span>
          </a>
        </div>
        <div class="flex pt-5 space-x-5">
          <a target="_blank" href="https://www.linkedin.com/in/guillaume-cazin/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <Icon class="text-xl" name="logo-linkedin" :outline="false" />
            <span class="sr-only">LinkedIn</span>
          </a>
          <a target="_blank" href="http://github.com/gcazin" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <Icon class="text-xl" name="logo-github" :outline="false" />
            <span class="sr-only">GitHub</span>
          </a>
          <a target="_blank" href="https://twitter.com/gcazinonx" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <Icon class="text-xl" name="logo-twitter" :outline="false" />
            <span class="sr-only">Twitter</span>
          </a>
          <a target="_blank" href="https://codepen.io/gcazin" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <Icon class="text-xl" name="logo-codepen" :outline="false" />
            <span class="sr-only">Codepen</span>
          </a>
        </div>
      </div>
    </Container>
    <hr class="m-auto border-gray-200 sm:mx-auto dark:border-gray-700" />
    <Container>
      <div class="py-5 sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {{ new Date().getFullYear() }} <a href="https://guillaume-cazin.fr/" class="hover:underline">Guillaume Cazin™</a>. Tous droits réservés.
        </span>
        <template v-if="!isAuthenticated">
          <Login />
        </template>
        <template v-else>
          <Link class="text-gray-700" to="adminDashboard">Administration</Link>
          <Logout />
        </template>
      </div>
    </Container>
  </footer>
</template>

<style scoped>
</style>
