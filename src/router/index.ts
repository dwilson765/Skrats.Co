import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: () => import('@/views/AboutView.vue') },
    { path: '/skateboarding', component: () => import('@/views/SkateboardingView.vue') },
    { path: '/music', component: () => import('@/views/MusicView.vue') },
    { path: '/art', component: () => import('@/views/ArtView.vue') },
    { path: '/art/juelz', component: () => import('@/views/JuelzArtView.vue') },
    { path: '/electronics', component: () => import('@/views/ElectronicsView.vue') },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
