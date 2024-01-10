<template>
    <div
        class="w-fit whitespace-nowrap rounded-md py-2.5 px-3.5 text-center align-baseline font-bold leading-none transition-colors dark:bg-blue-700"
        :class="{
            'cursor-pointer bg-white text-blue-500 hover:bg-blue-500': button,
            'bg-blue-500 text-white': !button && !secondary,
            'bg-blue-100 text-blue-500': !button && secondary,
            'py-1 px-2 text-sm': size === 'sm',
            'py-2.5 px-3.5': size === 'md',
        }"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Badge',

    props: {
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
    },
}
</script>

<style scoped></style>
