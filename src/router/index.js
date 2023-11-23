import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import CV from "../views/CV.vue";
import AdminDashboard from "../admin/AdminDashboard.vue";
import { authGuard } from "@auth0/auth0-vue";

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
            path: "/admin/dashboard",
            name: "adminDashboard",
            component: AdminDashboard,
            beforeEnter: authGuard
        },
    ],
})
