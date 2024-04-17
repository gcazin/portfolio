// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'fr',
            },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            script: [
                {
                    src: 'https://www.googletagmanager.com/gtag/js?id=G-8H48RCN70L',
                    async: true,
                },
                {
                    innerHTML: `
            window.dataLayer = window.dataLayer || []
            function gtag() {
                dataLayer.push(arguments)
            }
            gtag('js', new Date())

            gtag('config', 'G-8H48RCN70L')
            `,
                },
                {
                    type: 'module',
                    src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js',
                },
                {
                    type: 'nomodule',
                    src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js',
                },
            ],
        },
    },
    colorMode: {
        classSuffix: '',
    },
    css: ['~/assets/css/main.css'],
    devtools: { enabled: false },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-aos',
        '@nuxt/image',
        '@nuxtjs/sitemap',
        '@nuxtjs/color-mode',
    ],
    routeRules: {
        '/contact-submission': {
            robots: false,
        },
    },
    router: {
        trailingSlash: true,
    },
    site: {
        url: 'https://www.guillaume-cazin.fr',
        name: 'Guillaume Cazin',
        trailingSlash: true,
    },
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => tag.startsWith('ion-'),
        },
    },
})
