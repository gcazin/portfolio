<script setup>
import Icon from '../elements/Icon.vue'
import Container from './Container.vue'

defineProps({
    hasBackground: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <footer
        class="border-t border-gray-100 dark:border-gray-900"
        :class="{
            'bg-slate-100 dark:bg-[#0B1120]/90': hasBackground,
            'bg-slate-50 dark:bg-[#0B1120]': !hasBackground,
        }"
    >
        <Container>
            <div class="my-4 items-center md:flex md:justify-between">
                <NuxtLink to="/">
                    <span class="text-2xl font-semibold dark:text-white"
                        >Guillaume Cazin</span
                    >
                </NuxtLink>
                <div class="flex space-x-4">
                    <NuxtLink
                        target="_blank"
                        to="https://www.linkedin.com/in/guillaume-cazin/"
                        class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                        <Icon
                            class="text-xl"
                            name="logo-linkedin"
                            :outline="false"
                        />
                        <span class="sr-only">LinkedIn</span>
                    </NuxtLink>
                    <NuxtLink
                        target="_blank"
                        to="http://github.com/gcazin"
                        class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                        <Icon
                            class="text-xl"
                            name="logo-github"
                            :outline="false"
                        />
                        <span class="sr-only">GitHub</span>
                    </NuxtLink>
                    <NuxtLink
                        target="_blank"
                        to="https://twitter.com/gcazinonx"
                        class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                        <Icon
                            class="text-xl"
                            name="logo-twitter"
                            :outline="false"
                        />
                        <span class="sr-only">Twitter</span>
                    </NuxtLink>
                    <NuxtLink
                        target="_blank"
                        to="https://codepen.io/gcazin"
                        class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                        <Icon
                            class="text-xl"
                            name="logo-codepen"
                            :outline="false"
                        />
                        <span class="sr-only">Codepen</span>
                    </NuxtLink>
                </div>
            </div>
            <hr
                class="m-auto border-gray-200 dark:border-gray-700 sm:mx-auto"
            />
            <div class="py-4 sm:flex sm:items-center sm:justify-between">
                <span
                    class="text-sm text-gray-500 dark:text-gray-400 sm:text-center"
                    >© {{ new Date().getFullYear() }}
                    <NuxtLink
                        to="https://www.guillaume-cazin.fr/"
                        class="hover:underline"
                        >Guillaume Cazin™</NuxtLink
                    >. Tous droits réservés.
                </span>
                <div class="flex gap-2">
                    <NuxtLink class="text-white/50" to="/privacy-policy/">
                        Politique de confidentialité
                    </NuxtLink>
                    <NuxtLink class="text-white/50" to="/legal-notice/">
                        Mentions légales
                    </NuxtLink>
                </div>
            </div>
        </Container>
    </footer>
</template>

<style scoped></style>
