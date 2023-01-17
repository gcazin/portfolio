import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import CV from "../views/CV.vue";

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
        }
    ],
})
