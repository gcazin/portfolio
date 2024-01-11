<script setup>
import AnimateOnScroll from '../misc/AnimateOnScroll.vue'
import Text from '../elements/Text.vue'

defineProps({
    icon: {
        type: String,
    },
    color: {
        type: String,
    },
    title: {
        type: String,
    },
    skills: {
        type: Array,
    },
    last: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <AnimateOnScroll full>
        <div
            :class="`flex-1 ${
                last
                    ? null
                    : 'border-b dark:border-b-blue-800 lg:border-b-0 lg:border-r dark:lg:border-gray-700'
            }`"
        >
            <ion-icon
                :class="`mb-6 rounded-xl bg-blue-100 p-2 text-5xl text-blue-400 dark:bg-blue-400 dark:text-blue-900`"
                :name="`${icon}-outline`"
            ></ion-icon>
            <Text type="subtitle">{{ title }}</Text>
            <div class="mb-2 grid grid-cols-2 gap-x-5 gap-y-2">
                <template v-for="(skill, index) in skills" :key="index">
                    <Text :class="index % 2 ? 'text-left' : 'text-right'">{{
                        skill
                    }}</Text>
                </template>
            </div>
        </div>
    </AnimateOnScroll>
</template>

<style scoped></style>
