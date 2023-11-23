<template>
  <p class="cursor-pointer text-gray-300 dark:text-gray-700" @click="handleLogout">Déconnexion</p>
</template>

<script>
export default {
  methods: {
    handleLogout() {
      this.$auth0.logout({
        logoutParams: {
          returnTo: '/',
        },
      });
    },
  },
};
</script>