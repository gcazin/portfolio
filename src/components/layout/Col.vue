<script>
export default {
    name: 'Col',

    props: {
        number: {
            type: Number,
            default: 2,
        },
    },
}
</script>

<template>
    <div class="flex flex-col">
        <div v-for="(n, index) in number" :key="index" class="flex-1">
            <slot :name="n"></slot>
        </div>
    </div>
</template>

<style scoped></style>
