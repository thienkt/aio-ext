import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router'
import i18n from 'vue-plugin-webextension-i18n'
import routes from '~pages'
import '../assets/base.scss'
import App from './app.vue'
import './index.scss'

const pinia = createPinia()
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to) => {
  if (to.path === '/') return '/options'
})

createApp(App).use(pinia).use(i18n).use(router).mount('#app')
