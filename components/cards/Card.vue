<script setup>
import Text from '../elements/Text.vue'

defineProps({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
})
</script>

<template>
    <div class="group">
        <div
            class="duration-250 relative flex h-full flex-col items-center justify-center overflow-hidden rounded bg-white p-5 shadow transition-all group-hover:bg-blue-500 dark:bg-blue-900/50"
        >
            <div class="absolute right-0 top-0 z-10">
                <svg
                    width="218"
                    height="109"
                    viewBox="0 0 218 109"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        opacity="0.01"
                        cx="156.5"
                        cy="-47.5"
                        r="156.5"
                        fill="white"
                    ></circle>
                    <circle
                        opacity="0.02"
                        cx="210"
                        cy="6"
                        r="62"
                        fill="white"
                    ></circle>
                </svg>
            </div>
            <Text
                selector="span"
                class="text-blue-500 group-hover:text-white"
                type="title"
                >{{ title }}</Text
            >
            <p class="text-xl group-hover:text-white dark:text-gray-100">
                {{ description }}
            </p>
            <div class="invisible absolute bottom-0 left-0 group-hover:visible">
                <svg
                    width="23"
                    height="32"
                    viewBox="0 0 23 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="21.262"
                        cy="1.12081"
                        r="1.12081"
                        transform="rotate(90 21.262 1.12081)"
                        fill="white"
                    ></circle>
                    <circle
                        cx="21.262"
                        cy="30.4863"
                        r="1.12081"
                        transform="rotate(90 21.262 30.4863)"
                        fill="white"
                    ></circle>
                    <circle
                        cx="1.76005"
                        cy="1.12081"
                        r="1.12081"
                        transform="rotate(90 1.76005 1.12081)"
                        fill="white"
                    ></circle>
                    <circle
                        cx="1.76005"
                        cy="30.4863"
                        r="1.12081"
                        transform="rotate(90 1.76005 30.4863)"
                        fill="white"
                    ></circle>
                    <circle
                        cx="11.6228"
                        cy="1.12081"
                        r="1.12081"
                        transform="rotate(90 11.6228 1.12081)"
                        fill="white"
                    ></circle>
                    <circle
                        cx="11.6228"
                        cy="30.4863"
                        r="1.12081"
                        transform="rotate(90 11.6228 30.4863)"
                        fill="white"
                    ></circle>
                    <circle
                        cx="21.262"
                        cy="10.9839"
                        r="1.12081"
                        transform="rotate(90 21.262 10.9839)"
                        fill="white"
                    ></circle>
                    <circle
                        cx="1.76005"
                        cy="10.9839"
                        r="1.12081"
                        transform="rotate(90 1.76005 10.9839)"
                        fill="white"
                    ></circle>
                    <circle
                        cx="11.6228"
                        cy="10.9839"
                        r="1.12081"
                        transform="rotate(90 11.6228 10.9839)"
                        fill="white"
                    ></circle>
                    <circle
                        cx="21.262"
                        cy="20.8469"
                        r="1.12081"
                        transform="rotate(90 21.262 20.8469)"
                        fill="white"
                    ></circle>
                    <circle
                        cx="1.76005"
                        cy="20.8469"
                        r="1.12081"
                        transform="rotate(90 1.76005 20.8469)"
                        fill="white"
                    ></circle>
                    <circle
                        cx="11.6228"
                        cy="20.8469"
                        r="1.12081"
                        transform="rotate(90 11.6228 20.8469)"
                        fill="white"
                    ></circle>
                </svg>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
