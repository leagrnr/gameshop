import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'
import GameDetail from '@/views/GameDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path : '/', component: Home },
    { path: '/login', component: Login },
    { path: '/profile', component: Profile },
    { path: '/games/:id', component: GameDetail }
  ],
})

export default router
