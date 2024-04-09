<script setup>
const props = defineProps({
    selector: {
        type: String,
    },
    type: {
        type: String,
        default: 'text',
    },
})

const tagType = computed(() => {
    return {
        link: 'a',
        text: 'p',
        heading: 'p',
        title: 'h2',
        subtitle: 'h3',
        sub: 'span',
        xs: 'span',
    }[props.type]
})
</script>

<template>
    <component
        :is="selector ?? tagType"
        :class="{
            'font-bold uppercase text-blue-500': type === 'heading',
            'text-3xl font-bold leading-tight dark:text-white lg:text-4xl':
                type === 'title',
            'text-xl leading-tight text-gray-700 dark:text-gray-300 lg:text-2xl':
                type === 'subtitle',
            'text-base leading-loose text-gray-800 dark:text-gray-200 lg:text-lg':
                type === 'text',
            'text-sm text-gray-600 dark:text-gray-400 lg:text-base':
                type === 'sub',
            'text-xs text-gray-600 dark:text-gray-400 lg:text-sm':
                type === 'xs',
        }"
    >
        <slot></slot>
    </component>
</template>

<style scoped></style>
