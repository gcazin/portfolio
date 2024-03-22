// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    site: {
        url: 'https://guillaume-cazin.fr',
        name: 'Guillaume Cazin',
    },
    app: {
        head: {
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
    devtools: { enabled: false },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-aos',
        '@nuxt/image',
        '@nuxtjs/sitemap',
        '@nuxtjs/color-mode',
    ],
    css: ['~/assets/css/main.css'],
    colorMode: {
        classSuffix: '',
    },
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => tag.startsWith('ion-'),
        },
    },
})
