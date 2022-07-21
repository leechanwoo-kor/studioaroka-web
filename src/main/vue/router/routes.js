import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/HomeView'),
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
});