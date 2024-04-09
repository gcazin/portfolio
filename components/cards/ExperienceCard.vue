<script setup>
import { ref } from 'vue'
import Badge from '../elements/Badge.vue'
import Text from '../elements/Text.vue'
import AnimateOnScroll from '../misc/Animate.vue'

const showFullText = ref(false)

defineProps({
    image: {
        type: String,
    },
    company: {
        type: String,
    },
    job: {
        type: String,
    },
    period: {
        type: String,
    },
    description: {
        type: String,
    },
    technologies: {
        type: Array,
    },
    right: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <AnimateOnScroll>
        <div class="flex flex-col items-center">
            <div
                class="mx-auto flex w-full items-center"
                :class="{ 'justify-end': right, 'justify-start': !right }"
            >
                <div
                    class="w-full lg:w-1/2"
                    :class="{ 'lg:pl-8': right, 'lg:pr-8': !right }"
                >
                    <div class="flex flex-col gap-2 lg:px-4">
                        <Text type="subtitle">{{ job }}</Text>
                        <Text v-if="company"
                            ><NuxtImg
                                v-if="image"
                                class="mr-2 inline w-6"
                                :src="`/images/companies/${image}`"
                                :alt="company"
                            />{{ company }}</Text
                        >
                        <Text>{{ period }}</Text>
                        <Text
                            class="text-justify lg:text-left"
                            v-if="description"
                        >
                            {{
                                !showFullText
                                    ? description.slice(0, 100)
                                    : description
                            }}
                            <template v-if="!showFullText">...</template>
                            <button
                                v-show="!showFullText"
                                @click="showFullText = true"
                                type="button"
                                class="text-blue-500"
                            >
                                Voir plus
                            </button>
                            <button
                                v-show="showFullText"
                                @click="showFullText = false"
                                type="button"
                                class="text-blue-500"
                            >
                                Voir moins
                            </button>
                        </Text>
                        <div
                            class="flex flex-wrap gap-x-1 gap-y-2"
                            v-if="technologies.length"
                        >
                            <Badge
                                v-for="(technology, index) in technologies"
                                :key="index"
                                secondary
                                size="sm"
                            >
                                {{ technology }}
                            </Badge>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="invisible absolute left-1/2 flex h-4 w-4 -translate-x-1/2 -translate-y-4 transform items-center justify-center rounded-full border-4 border-blue-500 bg-blue-50 sm:translate-y-0 lg:visible"
            ></div>
        </div>
    </AnimateOnScroll>
</template>

<style scoped></style>
