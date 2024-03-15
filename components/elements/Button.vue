<script setup>
const props = defineProps({
    // Style
    size: {
        type: String,
        default: 'normal',
    },
    color: {
        type: String,
        default: 'primary',
    },
    secondary: {
        type: Boolean,
        default: false,
    },
    icon: {
        type: String,
    },
    type: {
        type: String,
        default: 'button',
    },
    // Link
    isLink: {
        type: Boolean,
        default: false,
    },
    to: {
        type: String,
    },
    // State
    disabled: {
        type: Boolean,
        default: false,
    },
})

const property = () => {
    return {
        'inline-block rounded font-semibold leading-7 text-white transition-all duration-250 uppercase': true,
        'px-4 py-1 text-sm': props.size === 'sm',
        'px-4 py-2.5': props.size === 'normal',
        'px-4 py-3 text-lg': props.size === 'lg',
        'px-7 py-3 w-100': props.size === 'full',
        'bg-gray-100 hover:bg-gray-200 text-blue-500': props.color === 'white',
        'bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800':
            props.color === 'primary',
        'bg-transparent text-black dark:text-white':
            props.color === 'transparent',
        'bg-blue-100 dark:bg-blue-800/50 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-800':
            props.secondary,
        'cursor-not-allowed opacity-50': props.disabled,
    }
}
</script>

<template>
    <button v-if="!isLink" :class="property()" :type="type">
        <template v-if="icon">
            <ion-icon
                class="rounded-full bg-blue-500 p-2 align-middle text-2xl text-white"
                :name="`${icon}-outline`"
            ></ion-icon>
        </template>
        <slot></slot>
    </button>
    <router-link v-else :class="property()" :to="{ name: to }">
        <slot></slot>
    </router-link>
</template>

<style scoped></style>
