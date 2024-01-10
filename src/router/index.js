import { createRouter, createWebHistory } from 'vue-router'
import CV from '../views/CV.vue'
import Home from '../views/Home.vue'

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
    ],
})
