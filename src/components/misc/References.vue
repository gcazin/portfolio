<script setup>
const references = [
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
        <template v-for="(reference, index) in references" :key="index">
            <img
                :src="`/images/references/${reference.image}.png`"
                class="m-auto w-32 lg:text-inherit"
                :alt="reference.name"
            />
        </template>
    </div>
</template>

<style scoped></style>
