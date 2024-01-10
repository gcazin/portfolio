<template>
    <AnimateOnScroll>
        <p
            :class="{
                'pb-2 font-bold uppercase text-blue-500': type === 'heading',
                'pb-2 text-3xl font-bold leading-tight dark:text-white lg:text-4xl':
                    type === 'title',
                'pb-2 text-xl leading-tight text-gray-700 dark:text-gray-300 lg:text-2xl':
                    type === 'subtitle',
                'pb-2 text-base leading-loose text-gray-800 dark:text-gray-200 lg:text-lg':
                    type === 'text',
            }"
        >
            <slot></slot>
        </p>
    </AnimateOnScroll>
</template>

<script>
import AnimateOnScroll from '../misc/AnimateOnScroll.vue'
export default {
    name: 'Text',

    components: {
        AnimateOnScroll,
    },

    props: {
        type: {
            type: String,
            default: 'text',
        },
    },
}
</script>

<style scoped></style>
