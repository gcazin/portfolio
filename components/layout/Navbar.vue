<script setup>
import { ref } from 'vue'
import Button from '../elements/Button.vue'
import Icon from '../elements/Icon.vue'
import Text from '../elements/Text.vue'

const items = [
    {
        url: '#introduction',
        text: 'À propos',
    },
    {
        url: '#experiences',
        text: 'Expériences',
    },
    {
        url: '#competences',
        text: 'Compétences',
    },
    {
        url: '#projets',
        text: 'Projets',
    },
    {
        url: '#contact',
        text: 'Contact',
    },
]
const menuMobileVisible = ref(false)

const toggleNavbar = () => {
    menuMobileVisible.value = !menuMobileVisible.value
}
</script>

<template>
    <nav
        class="fixed top-0 z-50 w-full border-b backdrop-blur-md dark:border-gray-800"
        role="navigation"
        aria-label="navigation"
    >
        <div class="container mx-auto w-10/12 lg:max-w-7xl">
            <div class="flex h-20 items-center lg:justify-between">
                <div class="lg:hidden">
                    <!-- Mobile menu button-->
                    <Button
                        @click="toggleNavbar"
                        type="transparent"
                        class="!pl-0"
                        size="lg"
                        icon="menu"
                    ></Button>
                </div>
                <div class="lg:ml-0">
                    <NuxtLink to="/" class="flex items-center gap-2">
                        <NuxtImg src="/favicon.png" class="w-10 xl:w-8" />
                        <Text class="hidden !pb-0 xl:block" type="subtitle"
                            >Guillaume Cazin</Text
                        >
                    </NuxtLink>
                </div>
                <div
                    class="invisible absolute inset-y-0 right-0 flex items-center sm:inset-auto lg:visible lg:static"
                >
                    <div class="relative ml-3">
                        <ul class="flex items-center space-x-4">
                            <li v-for="(item, index) in items" :key="index">
                                <NuxtLink
                                    :to="item.url"
                                    class="navbar-link px-2 font-bold uppercase text-gray-800 transition-colors hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-600"
                                >
                                    {{ item.text }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="absolute right-8 top-5 lg:top-1/4 lg:h-full">
                <button
                    class="flex gap-2 rounded-xl bg-gray-100 dark:bg-gray-900"
                    @click="$colorMode.preference = $colorMode.value === 'light' ? 'dark' : 'light'"
                >
                    <Icon
                        v-if="$colorMode.value === 'light'"
                        class="cursor-pointer rounded-lg bg-gray-100 p-1 px-2 py-1.5 text-xl text-gray-500 hover:bg-gray-300 dark:bg-gray-300"
                        name="moon"
                        :outline="false"
                    ></Icon>
                    <Icon
                        v-else
                        class="cursor-pointer rounded-lg bg-yellow-50 p-1 px-2 py-1.5 text-xl text-yellow-500 dark:bg-gray-700"
                        name="sunny"
                        :outline="false"
                    ></Icon>
                </button>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div
            class="mx-auto w-10/12"
            :class="{ static: menuMobileVisible, hidden: !menuMobileVisible }"
            id="mobile-menu"
        >
            <div class="space-y-1 pb-3">
                <NuxtLink
                    v-for="(item, index) in items"
                    :key="index"
                    :to="item.url"
                    class="navbar-link block rounded-md px-3 py-2 text-base font-bold dark:text-white"
                >
                    {{ item.text }}
                </NuxtLink>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar-link.router-link-active:focus {
    @apply text-blue-500 dark:!text-blue-600;
}
</style>
