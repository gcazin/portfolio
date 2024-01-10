<template>
    <ion-icon
        class="align-text-bottom"
        :name="`${name}${outline ? '-outline' : ''}`"
    ></ion-icon>
</template>

<script>
export default {
    name: 'Icon',

    props: {
        name: {
            type: String,
        },
        outline: {
            type: Boolean,
            default: true,
        },
    },
}
</script>

<style scoped></style>
