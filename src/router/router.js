import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: () => import('@/views/Home.vue'),
      alias: '/home'
    },
    {
      path: '/projets',
      name: 'Mes projets personnels',
      component: () => import('@/views/Projects.vue'),
      alias: '/projects',
    },
    {
      path:'/projets/:id',
      name:'Un projet personnel',
      component: () => import('@/views/ProjectArticleModal.vue'),
      alias:'/projects/:id'
    },
    {
      path: '/works',
      name: 'Projets professionnels',
      component: () => import('@/views/Works.vue'),
      alias: '/pro',
    },
    {
      path:'/works/:id',
      name:'Un projet professionnel',
      component: () => import('@/views/ProjectArticleModal.vue'),
      alias:'/pro/:id'
    },
    {
      path: '/a-propos',
      name: 'A propos',
      component: () => import('@/views/About.vue'),
      alias: ['/about', '/about-me']
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/Contact.vue'),
    },
    {
      path: '/mentions-legales',
      name: 'Mentions légales',
      component: () => import('@/views/Legalmentions.vue'),
      alias: ['/lm','/legal-mentions']
    },
    {
      path: '/cgu',
      name: 'CGU',
      component: () => import('@/views/CGU.vue'),
      alias: ['/tos','/term-of-services']
    },
    {
      path: '/politique-confidentialite',
      name: 'Politique de confidentialité',
      component: () => import('@/views/PrivacyPolicy.vue'),
      alias: ['/privacy','/privacy-policy'],
    },
    {
      path: '/sitemap',
      name: 'Sitemap',
      component: () => import('@/views/Sitemap.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404 Not Found',
      component: () => import('@/views/NotFound.vue'),
    }
  ]
})
export default router