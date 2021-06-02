import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'button',
    component: () => import('../views/button.vue')
  },
  {
    path: '/Card',
    name: 'Card',
    component: () => import('../views/Card.vue')
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/Input',
    name: 'Input',
    component: () => import('../views/Input.vue')
  },
  {
    path: '/Checkbox',
    name: 'Checkbox',
    component: () => import('../views/Checkbox.vue')
  },
  {
    path: '/tab',
    name: 'tab',
    component: () => import('../views/tab.vue')
  },
  {
    path: '/Popover',
    name: 'Popover',
    component: () => import('../views/Popover.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export { router, routes }
