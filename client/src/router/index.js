import { createRouter, createWebHistory } from 'vue-router'
import Locations from '../views/Locations.vue';
import Menus from '../views/Menus.vue';
import Cart from '../views/Cart.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/locations',
      name: 'locations',
      component: Locations
    },
    {
      path: '/menus',
      name: 'menus',
      component: Menus
    },
    {
      path: '/cart/:id',
      name: 'cart',
      component: Cart
    },
  ]
})

export default router
