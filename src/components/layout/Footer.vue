<script setup>
import Icon from '../elements/Icon.vue'
import Container from './Container.vue'
import Link from '../elements/Link.vue'

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
                <a href="/">
                    <span class="text-2xl font-semibold dark:text-white"
                        >Guillaume Cazin</span
                    >
                </a>
                <div class="flex space-x-4">
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/guillaume-cazin/"
                        class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                        <Icon
                            class="text-xl"
                            name="logo-linkedin"
                            :outline="false"
                        />
                        <span class="sr-only">LinkedIn</span>
                    </a>
                    <a
                        target="_blank"
                        href="http://github.com/gcazin"
                        class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                        <Icon
                            class="text-xl"
                            name="logo-github"
                            :outline="false"
                        />
                        <span class="sr-only">GitHub</span>
                    </a>
                    <a
                        target="_blank"
                        href="https://twitter.com/gcazinonx"
                        class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                        <Icon
                            class="text-xl"
                            name="logo-twitter"
                            :outline="false"
                        />
                        <span class="sr-only">Twitter</span>
                    </a>
                    <a
                        target="_blank"
                        href="https://codepen.io/gcazin"
                        class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                        <Icon
                            class="text-xl"
                            name="logo-codepen"
                            :outline="false"
                        />
                        <span class="sr-only">Codepen</span>
                    </a>
                </div>
            </div>
            <hr
                class="m-auto border-gray-200 dark:border-gray-700 sm:mx-auto"
            />
            <div class="py-4 sm:flex sm:items-center sm:justify-between">
                <span
                    class="text-sm text-gray-500 dark:text-gray-400 sm:text-center"
                    >© {{ new Date().getFullYear() }}
                    <a
                        href="https://guillaume-cazin.fr/"
                        class="hover:underline"
                        >Guillaume Cazin™</a
                    >. Tous droits réservés.
                </span>
            </div>
        </Container>
    </footer>
</template>

<style scoped></style>
