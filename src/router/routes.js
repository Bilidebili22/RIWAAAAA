const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('@/pages/IndexPage.vue') },
      { path: 'second', component: () => import('@/pages/SecondPage.vue') },
      { path: 'users', component: () => import('@/pages/UsersPage.vue') },
      { path: 'Testpage', component: () => import('@/pages/Testpage.vue') },
      { path: 'Testpage2', component: () => import('@/pages/Testpage2.vue') },
      { path: 'Testpage3', component: () => import('@/pages/Testpage3.vue') }
    ]
  },


  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue')
  }
]

export default routes
