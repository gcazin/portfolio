<script setup>
const props = defineProps({
    full: {
        type: Boolean,
        default: true,
    },
    type: {
        type: String,
        default: 'fade'
    },
    to: {
        type: String,
        default: 'up'
    },
    duration: {
        type: Number,
        default: 500,
    }
})
</script>

<template>
    <div
        :class="{ 'w-full': full }"
        :data-aos="`${type}-${to}`"
        :data-aos-duration="duration"
        data-aos-once="true"
    >
        <slot></slot>
    </div>
</template>

<style scoped></style>
