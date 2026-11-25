<template>
    <div class="page">
        <slot />
    </div>
</template>

<style scoped>
.page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
</style>
