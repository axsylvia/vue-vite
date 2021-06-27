import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
    },
    {
        path: '/reactive',
        name: 'Reactive',
        component: () => import('@/views/Reactive.vue')
    },
    {
        path: '/toRef',
        name: 'toRef',
        component: () => import('@/views/toRef.vue')
    },
    {
        path: '/computed',
        name: 'computed',
        component: () => import('@/views/computed.vue')
    },
    {
        path: '/watchEffect',
        name: 'watchEffect',
        component: () => import('@/views/watchEffect.vue')
    },
    {
        path: '/watch',
        name: 'watch',
        component: () => import('@/views/watch.vue')
    }
]



const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router