import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Portafolio from '../views/Portafolio.vue'
import SobreMi from '../views/SobreMi.vue'
import Contacto from '../views/Contacto.vue'
import Blog from '../views/Blog.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/portafolio', name: 'Portafolio', component: Portafolio },
  { path: '/sobre-mi', name: 'SobreMi', component: SobreMi },
  { path: '/contacto', name: 'Contacto', component: Contacto },
  { path: '/blog', name: 'Blog', component: Blog }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
