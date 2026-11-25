<script setup lang="ts">
import CtaBand from '~/components/site/CtaBand.vue'
import SiteHeader from '~/components/site/SiteHeader.vue'
</script>

<template>
    <div class="page">
        <SiteHeader />
        <main class="page-main">
            <slot />
        </main>
        <CtaBand />
    </div>
</template>

<style scoped>
.page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.page-main {
    flex: 1;
    padding-bottom: clamp(80px, 9vw, 128px);
}
</style>
