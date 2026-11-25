<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        name: keyof typeof paths
        size?: number | string
        strokeWidth?: number
    }>(),
    { size: 20, strokeWidth: 1.75 }
)

const paths = {
    sun: '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path>',
    moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"></path>',
    menu: '<path d="M4 9h16"></path><path d="M4 15h16"></path>',
    close: '<path d="M6 6l12 12M18 6 6 18"></path>',
    arrowUpRight: '<path d="M7 17 17 7"></path><path d="M7 7h10v10"></path>',
    arrowRight: '<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>',
    arrowLeft: '<path d="M19 12H5"></path><path d="m12 19-7-7 7-7"></path>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path><circle cx="12" cy="10" r="3"></circle>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path>',
    music: '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
    monitor:
        '<rect x="3" y="4" width="18" height="14" rx="2"></rect><path d="M8 21h8M12 18v3"></path>',
    bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><path d="M3 6h18M16 10a4 4 0 0 1-8 0"></path>',
    star: '<path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z"></path>',
    browser:
        '<rect x="3" y="4" width="18" height="16" rx="3"></rect><path d="M3 9h18M7 6.5h.01M10 6.5h.01"></path>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><path d="M4 22v-7"></path>',
    refresh:
        '<path d="M21 12a9 9 0 1 1-3-6.7L21 8"></path><path d="M21 3v5h-5"></path>',
    cards: '<rect x="2" y="6" width="14" height="16" rx="2"></rect><path d="M8 2h12a2 2 0 0 1 2 2v14"></path>',
}

const svg = computed(() => paths[props.name])
</script>

<template>
    <svg
        :width="size"
        :height="size"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        v-html="svg"
    ></svg>
</template>
