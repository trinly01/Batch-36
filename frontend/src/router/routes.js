
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/todoApp',
    component: () => import('pages/Todo.vue')
  },
  {
    path: '/shop',
    component: () => import('pages/Shop.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/listItems.vue')
      },
      {
        path: 'item/:id',
        component: () => import('pages/viewItem.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
