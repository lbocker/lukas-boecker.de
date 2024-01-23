// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
    $development: {
        devtools: true,
        /*routeRules: {
            '/!**': { isr: true }
        }*/
    },
    $production: {
        devtools: false,
    },
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css',
        '@/assets/scss/_variables/colors.scss',
        '@/assets/scss/_variables/global.scss'
    ],
})
