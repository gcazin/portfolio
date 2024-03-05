<script setup>
const props = defineProps({
    secondary: {
        type: Boolean,
        default: false,
    },
    size: {
        type: String,
        default: 'md',
    },
})

const properties = () => {
    return {
        'bg-blue-500 text-white': !props.secondary,
        'bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500':
            props.secondary,
        '!px-2 py-1 !text-sm': props.size === 'sm',
        '!px-3.5 !py-2.5': props.size === 'md',
    }
}
</script>

<template>
    <div
        class="w-fit whitespace-nowrap rounded-md px-3.5 py-2.5 text-center align-baseline font-bold leading-none"
        :class="[properties()]"
    >
        <slot></slot>
    </div>
</template>

<style scoped></style>
