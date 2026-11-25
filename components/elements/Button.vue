<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'primary',
    },
    size: {
        type: String,
        default: 'normal',
    },
    icon: {
        type: String,
    },
    to: {
        type: String,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
})

const variantClass = computed(
    () =>
        ({
            primary: 'pill-navy',
            secondary: 'pill-outline',
            ghost: 'pill-outline',
            transparent: 'pill-outline',
        })[props.type] ?? 'pill-navy'
)
</script>

<template>
    <component
        :is="to ? 'a' : 'button'"
        :href="to || undefined"
        :type="to ? undefined : 'button'"
        class="btn pill"
        :class="[
            variantClass,
            { 'pill-sm': size === 'sm', 'pill-disabled': disabled },
        ]"
        :aria-disabled="disabled || undefined"
    >
        <ion-icon v-if="icon" :name="`${icon}-outline`"></ion-icon>
        <slot></slot>
    </component>
</template>

<style scoped>
.pill-disabled {
    opacity: 0.5;
    pointer-events: none;
}
</style>
