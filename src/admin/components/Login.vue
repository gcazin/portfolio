<template>
  <p class="cursor-pointer text-gray-300 dark:text-gray-700" @click="handleLogin">Administration</p>
</template>

<script>
export default {
  methods: {
    handleLogin() {
      this.$auth0.loginWithRedirect({
        appState: {
          target: "/admin/dashboard",
        },
      });
    },
  },
};
</script>