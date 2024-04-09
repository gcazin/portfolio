<script setup lang="ts">
import Animate from './Animate.vue'

interface Reference {
    name: string
    image: string
}

const references: Reference[] = [
    {
        name: 'Eléphant bleu',
        image: 'elephant-bleu',
    },
    {
        name: 'Eurométropole Strasbourg',
        image: 'eurometropole-strasbourg',
    },
    {
        name: 'Institut Henry Poincaré',
        image: 'ihp',
    },
    {
        name: 'Wolfberger',
        image: 'wolfberger',
    },
    {
        name: 'iTurf',
        image: 'iturf',
    },
    {
        name: 'DDEC',
        image: 'ddec',
    },
]
</script>

<template>
    <div
        class="grid grid-cols-2 items-center justify-center gap-2 md:grid-cols-3 lg:flex lg:flex-wrap lg:gap-8"
    >
        <Animate
            to="up"
            :duration="500"
            v-for="({ name, image }, index) in references"
            :key="index"
            :full="false"
        >
            <NuxtImg
                :src="`/images/references/${image}.webp`"
                class="m-auto w-32 lg:text-inherit"
                :alt="name"
            />
        </Animate>
    </div>
</template>

<style scoped></style>
