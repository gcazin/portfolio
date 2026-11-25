<script setup>
import { onBeforeMount, onMounted } from 'vue'

onBeforeMount(() => {
    if (window.scrollY) {
        window.scroll(0, 0)
    }
})

onMounted(() => {
    document.title =
        'Message envoyé - Guillaume Cazin - Développeur web freelance'
})
</script>

<template>
    <section class="wrap confirmation">
        <h1 class="rv d1 display confirmation-title">Merci&#8239;!</h1>
        <p class="rv d2 lead confirmation-lead">
            Votre message a bien été envoyé.<br />
            Je reviendrai vers vous dans les plus brefs délais.
        </p>
        <NuxtLink class="rv d3 btn pill pill-outline" to="/"
            >Revenir à l’accueil</NuxtLink
        >
    </section>
</template>

<style scoped>
.confirmation {
    min-height: 60vh;
    padding-top: clamp(40px, 6vw, 88px);
    padding-bottom: clamp(40px, 6vw, 88px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.confirmation-title {
    margin: 0;
    font-size: clamp(44px, 6vw, 80px);
}

.confirmation-lead {
    margin: 24px 0 32px;
    max-width: 560px;
}
</style>
