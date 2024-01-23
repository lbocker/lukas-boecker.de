import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { defineNuxtPlugin } from 'nuxt/app';

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;
config.keepOriginalSource = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
    faInstagram,
    faLinkedin,
    faGithub,
)

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
