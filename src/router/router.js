import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: () => import('@/views/Home.vue'),
      alias: ['/home', '/about', '/about-me'],
      children: [
        { path: '/#contact', component: () => import('@/components/HomeContactSection.vue') },
      ]
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
      path: '/cv',
      name: 'CV',
      component: () => import('@/views/CV.vue'),
      alias: ['/cvplus']
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
  ],
  scrollBehavior (to, from, savedPosition) {
    if(to.hash == '#aboutcontainer') {
      return { top: 945, behavior: 'smooth' }
    } else if(to.hash == '#contact') {
      return { el: to.hash, behavior: 'smooth'}
    } else if(to.hash == '#webcv') {
      switch (screen.orientation.type) {
        case 'landscape-primary': return { top: 200, behavior: 'smooth'}
        case 'landscape-secondary': return { top: 1159, behavior: 'smooth'}
        case 'portrait-primary': return { top: 1159, behavior: 'smooth'}
        case 'portrait-secondary': return { top: 200, behavior: 'smooth'}
      }
    }
    if(savedPosition) {
      return savedPosition
    }
  }
})
export default router