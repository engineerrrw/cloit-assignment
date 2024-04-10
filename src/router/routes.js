const routes = [
  {
    path: '/index',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/youtube', component: () => import('pages/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
  {
    path: '/', 
    component: () => import('layouts/HomeLayout.vue'),
    children:[
      { path: '/', component: () => import('pages/HomePage.vue') }
    ]
  }
]

export default routes
