import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/policy',
        // name: 'home',
        // component: () => import('@/views/HomeView'),
    },
    {
        path: '/about/',
        name: 'about',
        component: () => import('@/views/AboutView'),
    },
    {
        path: '/policy/',
        name: 'policy',
        component: () => import('@/views/PolicyView'),
    },
    {
        path: '/term/',
        name: 'term',
        component: () => import('@/views/TermView'),
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
});