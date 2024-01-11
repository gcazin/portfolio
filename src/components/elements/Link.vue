<script setup>
defineProps({
    to: {
        type: String,
    },
})
</script>

<template>
    <router-link :to="{ name: to }">
        <slot></slot>
    </router-link>
</template>

<style scoped></style>
