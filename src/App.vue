<script setup>
import Home from "./views/Home.vue";
import Navbar from "./components/layout/Navbar.vue";
import Footer from "./components/layout/Footer.vue";
import Loader from "./components/elements/Loader.vue";
</script>

<template>
  <Navbar />

  <Loader />
  <Home />

  <Footer />
</template>

<style scoped>
</style>
