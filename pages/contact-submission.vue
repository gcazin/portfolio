<script setup>
import { onBeforeMount, onMounted } from 'vue'
import Button from '~/components/elements/Button.vue'
import Text from '~/components/elements/Text.vue'
import Section from '~/components/layout/Section.vue'
import Stack from '~/components/layout/Stack.vue'

onBeforeMount(() => {
    if (window.scrollY) {
        window.scroll(0, 0)
    }
})

onMounted(() => {
    document.title = 'CV - Guillaume Cazin - Développeur web freelance'
})
</script>

<template>
    <Section title="Merci!" full-size>
        <div class="text-center">
            <Stack>
                <Text type="subtitle">Votre message a bien été envoyé.</Text>
                <Text type="subtitle"
                    >Je reviendrais vers vous dans les plus brefs délais.</Text
                >
                <Button type="secondary" to="/">Revenir sur l'accueil</Button>
            </Stack>
        </div>
    </Section>
</template>

<style scoped></style>
