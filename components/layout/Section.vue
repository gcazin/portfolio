<script setup>
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
    titleSelector: {
        type: String,
    },
    description: {
        type: String,
    },
    fullSize: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <section
        :id="id"
        class="wrap section"
        :class="{ 'section-full': fullSize }"
    >
        <header v-if="title" class="rv d1 section-header">
            <p v-if="heading" class="eyebrow">{{ heading }}</p>
            <component
                :is="titleSelector ?? 'h2'"
                class="display section-title"
                >{{ title }}</component
            >
            <p v-if="description" class="lead">{{ description }}</p>
        </header>
        <div class="rv d2 section-body">
            <slot></slot>
        </div>
    </section>
</template>

<style scoped>
.section {
    padding-top: clamp(40px, 6vw, 88px);
}

.section-full {
    min-height: 60vh;
}

.section-header {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 820px;
}

.section-title {
    margin: 0;
    font-size: clamp(44px, 6vw, 80px);
}

.section-body {
    margin-top: clamp(32px, 4vw, 56px);
}
</style>
