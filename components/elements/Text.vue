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
    <component :is="selector ?? tagType" :class="`gc-text gc-text-${type}`">
        <slot></slot>
    </component>
</template>

<style scoped>
.gc-text-heading {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--navy-ink);
}

.gc-text-title {
    margin: 1.6em 0 0.4em;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: clamp(26px, 3vw, 34px);
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--ink);
}

.gc-text-subtitle {
    margin: 1.2em 0 0.3em;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 22px;
    line-height: 1.2;
    letter-spacing: -0.015em;
    color: var(--ink);
}

.gc-text-text {
    margin: 0 0 1em;
    max-width: 760px;
    font-size: 17px;
    line-height: 1.7;
    color: var(--ink);
}

.gc-text-sub {
    font-size: 15px;
    color: var(--muted);
}

.gc-text-xs {
    font-size: 13px;
    color: var(--muted);
}

.gc-text :deep(a) {
    color: var(--navy-ink);
    text-underline-offset: 3px;
}
</style>
