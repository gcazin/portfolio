<script setup>
defineProps({
    name: {
        type: String,
    },
    outline: {
        type: Boolean,
        default: true,
    },
})
</script>

<template>
    <ion-icon
        class="align-text-bottom"
        :name="`${name}${outline ? '-outline' : ''}`"
    ></ion-icon>
</template>

<style scoped></style>
