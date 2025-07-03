import { createRouter, createWebHistory } from 'vue-router'
import SignersPage from '../pages/SignersPage.vue'

const routes = [
  {
    path: '/',
    name: 'Signers',
    component: SignersPage,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
