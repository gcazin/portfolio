<script setup lang="ts">
import GcIcon from '~/components/site/GcIcon.vue'

withDefaults(defineProps<{ onNavy?: boolean }>(), { onNavy: false })

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const toggle = () => {
    colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
    <button
        type="button"
        class="icon-btn"
        :class="{ 'on-navy': onNavy }"
        :aria-label="
            isDark ? 'Passer en thème clair' : 'Passer en thème sombre'
        "
        @click="toggle"
    >
        <ClientOnly>
            <GcIcon :name="isDark ? 'sun' : 'moon'" />
            <template #fallback><GcIcon name="moon" /></template>
        </ClientOnly>
    </button>
</template>

<style scoped>
.on-navy {
    border-color: currentColor;
    background: transparent;
    color: var(--on-navy);
}
</style>
