<script setup>
defineProps({
    hero: {
        type: Boolean,
        default: false,
    },
    invert: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <div
        v-if="hero"
        class="hero absolute inset-0 bottom-10 z-0 bg-bottom bg-no-repeat opacity-25"
    ></div>
    <div
        v-else
        class="section absolute inset-x-0 top-0 z-0 bg-right bg-no-repeat opacity-25 lg:bg-top"
        :style="{ transform: invert ? 'rotateY(3.142rad)' : null }"
    ></div>
</template>

<style scoped>
.dark .hero {
    background-image: url(/images/misc/background/hero-dark.webp);
    background-size: 100rem;
    height: 100%;
}
.dark .section {
    background-image: url(/images/misc/background/section-dark.webp);
    background-size: 125.5rem 100%;
    height: 100%;
}
</style>
