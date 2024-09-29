import HomePage from '@/modules/landing/pages/HomePage.vue';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // ruta
      name: 'home', // nombre de la ruta para poder acceder mas facilmente
      component: HomePage, // el componente que se cargara en la vista
    },
    {
      path: '/features',
      name: 'features',
      component: () => import('@/modules/landing/pages/FeaturesPage.vue'),
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('@/modules/landing/pages/PricingPage.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/modules/landing/pages/ContactPage.vue'),
    },
  ],
});

export default router;
