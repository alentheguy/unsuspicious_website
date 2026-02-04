import { createRouter, createWebHistory } from 'vue-router'
import LastQuestion from '@/views/LastQuestion.vue'
import VideoView from '@/views/VideoView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LastQuestion,
    },
    {
      path: '/video',
      name: 'video',
      component: VideoView,
    },
  ],
})

export default router
