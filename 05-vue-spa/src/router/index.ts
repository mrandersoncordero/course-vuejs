import isAuthenticatedGuard from '@/modules/auth/guards/is-authenticated.guard';
import NotFound404 from '@/modules/common/pages/NotFound404.vue';
import HomePage from '@/modules/landing/pages/HomePage.vue';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
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
        {
          path: '/pokemon/:id',
          name: 'pokemon',
          beforeEnter: [isAuthenticatedGuard],
          props: ( route ) => {
            // console.log(route);
            const id = Number(route.params.id);
            console.log(id);
            
            return isNaN(id) ? { id: 1 }: { id };
          },
          component: () => import('@/modules/pokemons/pages/PokemonPage.vue')
        }
      ],
    },

    // Auth
    {
      path: '/auth',
      redirect: { name: 'login' },
      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login', // si quitamos el /login la ruta cambiara a  /auth/login
          name: 'login',
          component: () => import('@/modules/auth/pages/LoginPage.vue'),
        },
        {
          path: 'register', // si quitamos el /register la ruta cambiara a  /auth/register
          name: 'register',
          component: () => import('@/modules/auth/pages/RegisterPage.vue'),
        },
      ],
    },

    // Not Found
    {
      path: '/:pathMatch(.*)*',
      // redirect: '/',
      component: NotFound404,
    },
  ],
});

export default router;
