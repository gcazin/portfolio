<template>
    <Head>
        <Meta
            name="description"
            content="Passionné depuis 12 ans par tout ce qui est attrait au développement web, j'y ai consacré l'entièreté de mes années d'études et la majorité de mon temps libre durant toutes ces années."
        ></Meta>
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
