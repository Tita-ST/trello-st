import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: '/about',
      name: 'about',
    
      component: () => import('../views/AboutView.vue'),
      meta: { requiresAuth: true }

    },
    {
      path: '/login',
      name: 'login',
      
      component: () => import('../views/LoginView.vue'),
      meta: { ConfirmAuth: true },
      beforeEnter: (to, from, next) => {
        let token = localStorage.getItem('token')
        if ( token !== null ) {
          next('/dashboard')
        }
        next()
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
      
      beforeEnter: (to, from, next) => {
        let token = localStorage.getItem('token')
        if ( token !== null ) {
          next('/dashboard')
        }
        next()
      }
    },
    {
      path: '/newproject',
      name: 'newproject',
      
      component: () => import('../views/NewProjectView.vue'),
      meta: { requiresAuth: true }

    },
    {
      path: '/dashboard',
      name: 'dashboard',
      
      component: () => import('../views/dashboardView.vue'),
      meta: { requiresAuth: true }

    },
    {
      path: '/composant',
      name: 'composant',
      
      component: () => import('../views/ComposantView.vue'),
      meta: { requiresAuth: true }

    },
    {
      path: '/profil',
      name: 'profil',
      
      component: () => import('../views/ProfileView.vue'),
      meta: { requiresAuth: true }

    },
    {
      path: '/Tableaux',
      name: 'Tableaux',
      
      component: () => import('../views/TableauxView.vue'),
      meta: { requiresAuth: true }

    },
    {
      path: '/AddCollaborateur',
      name: 'AddCollaborateur',
      
      component: () => import('../views/AddCollaborateurView.vue'),
      meta: { requiresAuth: true }

    },
    {
      path: '/EspaceDeTravail',
      name: 'EspaceDeTravail',
      
      component: () => import('../views/EspaceDeTravail.vue'),
      meta: { requiresAuth: true }

    },
    {
      path: '/AllProject',
      name: 'AllProject',
      
      component: () => import('../views/AllProjectView.vue'),
      meta: { requiresAuth: true }

    },
  ]
})
// const token = () => {
//  return localStorage.getItem('token')
// }
router.beforeEach((to,from,next) => {
  let token = localStorage.getItem('token')
  if ((to.meta.requiresAuth) && (token == null) ) {
    console.log((to.meta.requiresAuth) && (token == null));
    return next('/login')
  }
  // let logOut = localStorage.removeItem('token')
  // if (localStorage.removeItem('token')  ) {
  //   return next('/login')
  // }

  

  next()
});
let token = localStorage.getItem('token')
// const  isConnected = () => {
//   return localStorage.getItem('token') !== null;
// }
export default router

