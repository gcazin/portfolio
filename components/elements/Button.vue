<script setup>
const props = defineProps({
    // Style
    type: {
        type: String,
        default: 'primary',
    },
    size: {
        type: String,
        default: 'normal',
    },
    icon: {
        type: String,
    },
    // Link
    to: {
        type: String,
    },
    // State
    disabled: {
        type: Boolean,
        default: false,
    },
})

const buttonColor = () => {
    return {
        primary: 'bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800',
        secondary: 'bg-blue-100 dark:bg-blue-800/50 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-800',
        ghost: 'border border-transparent text-blue-600 hover:bg-blue-100 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:bg-blue-800/30 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600',
        transparent: 'bg-transparent text-black dark:text-white',
    }[props.type]
}

const buttonSize = () => {
    return {
        lg: 'px-4 py-3 text-lg',
        normal: 'px-4 py-2.5',
        sm: 'px-4 py-1 text-sm',
        full: 'px-7 py-3 w-full',
    }[props.size]
}

/**
 * return {
 *         'inline-block rounded font-semibold leading-7 text-white transition-all duration-250 uppercase': true,
 *         'px-4 py-1 text-sm': props.size === 'sm',
 *         'px-4 py-2.5': props.size === 'normal',
 *         'px-4 py-3 text-lg': props.size === 'lg',
 *         'px-7 py-3 w-100': props.size === 'full',
 *         'bg-gray-100 hover:bg-gray-200 text-blue-500': props.color === 'white',
 *         'bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800':
 *             props.color === 'primary',
 *         'bg-transparent text-black dark:text-white':
 *             props.color === 'transparent',
 *         'bg-blue-100 dark:bg-blue-800/50 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-800':
 *         props.secondary,
 *         'cursor-not-allowed opacity-50': props.disabled,
 *     }
 */
</script>

<template>
    <component
        :is="to ? 'a' : 'button'"
        v-bind:href="to ? to : ''"
        class="inline-block rounded font-semibold leading-7 text-white transition-all duration-250 uppercase"
        :class="[
            buttonColor(),
            {
                'btn-disabled': disabled,
            },
            buttonSize(),
        ]"
        :type="type"
    >
        <ion-icon
            v-if="icon"
            class="align-middle text-2xl text-white"
            :name="`${icon}-outline`"
        ></ion-icon>
        <slot></slot>
    </component>
</template>

<style scoped></style>
