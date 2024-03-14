<script setup>
const props = defineProps({
    name: {
        type: String,
    },
    outline: {
        type: Boolean,
        default: true,
    },
    size: {
        type: String,
        default: 'md'
    }
})

const sizeClass = computed(() => {
    return {
        '5xl': 'text-4xl lg:text-5xl',
        '4xl': 'text-3xl lg:text-4xl',
        '3xl': 'text-2xl lg:text-3xl',
        '2xl': 'text-xl lg:text-2xl',
        xl: 'text-lg lg:text-xl',
        lg: 'text-base lg:text-lg',
        md: 'text-sm lg:text-md',
        sm: 'text-xs lg:text-sm',
    }[props.size]
})
</script>

<template>
    <ion-icon
        class="align-text-bottom"
        :class="[sizeClass]"
        :name="`${name}${outline ? '-outline' : ''}`"
    ></ion-icon>
</template>

<style scoped></style>
