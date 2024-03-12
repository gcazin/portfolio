<script setup>
defineProps({
    type: {
        type: String,
        default: 'text',
    },
})
</script>

<template>
    <p
        :class="{
            'font-bold uppercase text-blue-500': type === 'heading',
            'text-3xl font-bold leading-tight dark:text-white lg:text-4xl':
                type === 'title',
            'text-xl leading-tight text-gray-700 dark:text-gray-300 lg:text-2xl':
                type === 'subtitle',
            'text-base leading-loose text-gray-800 dark:text-gray-200 lg:text-lg':
                type === 'text',
        }"
    >
        <slot></slot>
    </p>
</template>

<style scoped></style>
