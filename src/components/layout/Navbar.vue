<script setup>
import Button from '../elements/Button.vue'
import Text from '../elements/Text.vue'
import Icon from '../elements/Icon.vue'
import Link from '../elements/Link.vue'
import { onMounted, ref } from 'vue'

const items = [
    {
        url: '#hero',
        text: 'Accueil',
    },
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
const iconTheme = ref('moon')
const anchorName = ref('')

onMounted(() => {
    setDefaultTheme()
})

const toggleNavbar = () => {
    menuMobileVisible.value = !menuMobileVisible.value
}

const getTheme = () => {
    return localStorage.getItem('theme')
}

const setTheme = (theme) => {
    localStorage.setItem('theme', theme)

    if (getTheme() === 'dark') {
        iconTheme.value = 'sunny'
    } else {
        iconTheme.value = 'moon'
    }
}
const setDefaultTheme = () => {
    if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add('dark')
        setTheme('dark')
    } else {
        document.documentElement.classList.remove('dark')
        setTheme('light')
    }
}

const toggleTheme = () => {
    const theme = localStorage.getItem('theme')

    if (theme) {
        if (theme === 'light') {
            setTheme('dark')
            document.documentElement.classList.add('dark')
        } else {
            setTheme('light')
            document.documentElement.classList.remove('dark')
        }
    }
}

const checkCurrentUrl = () => {
    menuMobileVisible.value = false

    const anchor = window.location.hash

    if (anchor) {
        anchorName.value = anchor
    }
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
                        color="transparent"
                        class="!pl-0"
                    >
                        <Icon class="text-3xl" name="menu" />
                    </Button>
                </div>
                <div class="lg:ml-0">
                    <Link to="home">
                        <Text type="subtitle"> Guillaume Cazin </Text>
                    </Link>
                </div>
                <div
                    class="invisible absolute inset-y-0 right-0 flex items-center sm:inset-auto lg:visible lg:static"
                >
                    <div class="relative ml-3">
                        <ul class="flex items-center space-x-4">
                            <li v-for="item in items">
                                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                                <a
                                    v-if="item.text !== 'Contact'"
                                    :href="`/${item.url}`"
                                    class="px-2 font-bold uppercase text-gray-800 transition-colors hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-600"
                                >
                                    {{ item.text }}
                                </a>
                                <Button v-else is-link to="cv">{{
                                    item.text
                                }}</Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="absolute right-8 top-5 lg:top-1/4 lg:h-full">
                <button
                    class="flex gap-2 rounded-xl bg-gray-100 dark:bg-gray-900"
                    @click="toggleTheme()"
                >
                    <Icon
                        v-if="getTheme() === 'light'"
                        class="cursor-pointer rounded-lg bg-gray-100 p-1 px-2 py-1.5 text-xl text-gray-500 hover:bg-gray-300 dark:bg-gray-300"
                        :name="iconTheme"
                        :outline="false"
                    ></Icon>
                    <Icon
                        v-else
                        class="cursor-pointer rounded-lg bg-yellow-50 p-1 px-2 py-1.5 text-xl text-yellow-500 dark:bg-gray-700"
                        :name="iconTheme"
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
                <template v-for="item in items">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                    <a
                        :href="`/${item.url}`"
                        @click="checkCurrentUrl()"
                        :class="{
                            'bg-blue-500 text-white dark:bg-blue-800':
                                anchorName === item.url,
                        }"
                        class="block rounded-md px-3 py-2 text-base font-medium dark:text-white"
                    >
                        {{ item.text }}
                    </a>
                </template>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>
