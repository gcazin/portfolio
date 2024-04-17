<template>
    <Head>
        <Meta
            name="description"
            content="Développeur web freelance full stack spécialisé en Laravel et VueJS. Sur ce portfolio, vous y trouverez mon CV, mes projets et mes expériences professionnelles."
        />
    </Head>

    <Navbar />

    <Body class="bg-white bg-repeat dark:bg-gray-800">
        <NuxtPage />
    </Body>

    <Footer has-background />
</template>
<script setup lang="ts">
import Footer from '~/components/layout/Footer.vue'
import Navbar from '~/components/layout/Navbar.vue'
</script>
