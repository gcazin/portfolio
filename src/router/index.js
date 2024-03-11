import { createRouter, createWebHistory } from 'vue-router'
import CV from '../views/CV.vue'
import Home from '../views/Home.vue'
import LegalNotice from '../views/LegalNotice.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home,
        },
        {
            name: 'cv',
            path: '/cv',
            component: CV,
        },
        {
            name: 'legal-notice',
            path: '/mentions-legales',
            component: LegalNotice,
        },
        {
            name: 'privacy-policy',
            path: '/politique-de-confidentialite',
            component: PrivacyPolicy,
        },
    ],
})
