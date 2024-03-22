// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
    modules: ['@nuxtjs/tailwindcss', 'nuxt-aos', '@nuxt/image'],
    css: ['~/assets/css/main.css'],
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => tag.startsWith('ion-'),
        },
    },
})
