<template>
    <AnimateOnScroll>
        <p class="text-2xl leading-tight text-gray-700 dark:text-gray-300">
            <slot></slot>
        </p>
    </AnimateOnScroll>
</template>

<script>
import AnimateOnScroll from '../misc/AnimateOnScroll.vue'
export default {
    name: 'Subtitle',
    components: { AnimateOnScroll },
}
</script>

<style scoped></style>
