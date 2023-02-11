import * as Vue from 'vue'
import * as VueRouter from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'
import WithStore from './pages/WithStore.vue'
import WithoutStore from './pages/WithoutStore.vue'
import WithStoreAdvanced from './pages/WithStoreAdvanced.vue'
import WithoutStoreAdvanced from './pages/WithoutStoreAdvanced.vue'

const pinia = createPinia()

const routes: VueRouter.RouteRecordRaw[] = [
  { path: '/', component: WithoutStore, name: 'Without Store' },
  { path: '/with-store', component: WithStore, name: 'With Store' },

  { path: '/without-store-advanced', component: WithoutStoreAdvanced, name: 'Without Store Advanced' },
  { path: '/with-store-advanced', component: WithStoreAdvanced, name: 'With Store Advanced' },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes,
})
router.beforeEach((to, from, next) => {
  document.title = to.name?.toString() ?? ''
  next()
})

const app = Vue.createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
