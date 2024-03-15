<script setup>
import BlobBackground from '~/components/misc/BlobBackground.vue'
import Text from '../elements/Text.vue'
import Container from './Container.vue'
import Stack from './Stack.vue'

defineProps({
    id: {
        type: String,
    },
    heading: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    hasBackground: {
        type: Boolean,
        default: false,
    },
    hasBlobBackground: {
        type: Boolean,
        default: false,
    },
    blobBackgroundIsInverted: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <section
        :id="id"
        class="overflow background relative border-t border-gray-200 dark:border-gray-800"
        :class="{
            'bg-slate-100 dark:bg-[#0B1120]/95': hasBackground,
            'bg-slate-50 dark:bg-[#0B1120]': !hasBackground,
        }"
    >
        <div class="overflow-hidden" v-if="!hasBackground">
            <div class="invisible absolute -bottom-20 z-10 lg:visible">
                <img src="/images/misc/blob-tear.svg" class="w-40" alt="" />
            </div>
        </div>
        <BlobBackground
            v-if="hasBlobBackground"
            :invert="blobBackgroundIsInverted"
        />
        <Container class="relative">
            <div class="py-8 lg:py-24">
                <div
                    class="flex flex-col items-center justify-center lg:text-center"
                >
                    <template v-if="title">
                        <Stack>
                            <Text type="heading">{{ heading }}</Text>
                            <Text type="title">{{ title }}</Text>
                            <div class="container" v-if="description">
                                <Text>{{ description }}</Text>
                            </div>
                        </Stack>
                    </template>
                </div>

                <div class="my-4">
                    <slot></slot>
                </div>
            </div>
        </Container>
        <div v-if="hasBackground" class="overflow-hidden">
            <div class="invisible absolute -bottom-20 right-0 z-10 lg:visible">
                <img src="/images/misc/blob-tear.svg" class="w-40" alt="" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.background {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23f1f5f9' fill-opacity='0.07' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}
</style>
