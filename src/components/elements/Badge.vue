<script setup>
defineProps({
    button: {
        type: Boolean,
        default: false,
    },
    secondary: {
        type: Boolean,
        default: false,
    },
    size: {
        type: String,
        default: 'md',
    },
})
</script>

<template>
    <div
        class="w-fit whitespace-nowrap rounded-md px-3.5 py-2.5 text-center align-baseline font-bold leading-none transition-colors dark:bg-blue-700"
        :class="{
            'cursor-pointer bg-white text-blue-500 hover:bg-blue-500': button,
            'bg-blue-500 text-white': !button && !secondary,
            'bg-blue-100 text-blue-500': !button && secondary,
            'px-2 py-1 text-sm': size === 'sm',
            'px-3.5 py-2.5': size === 'md',
        }"
    >
        <slot></slot>
    </div>
</template>

<style scoped></style>
