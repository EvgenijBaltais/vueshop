import Vue from 'vue'
import VueRouter from 'vue-router'
import vCatalog from '../components/v-catalog'
import vCart from '../components/v-cart'
import Main from '../components/Main'
import Product from '../components/Product'
import Catalog from '../components/Catalog'
import myContact from '../components/MyContact'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/catalog/:id',
      name: 'Catalog',
      meta: {
        breadcrumb: 'Каталог'
      },
      component: Catalog
    },
    {
      path: '/',
      name: 'Main',
      meta: {
        breadcrumb: 'Главная'
      },
      component: Main
    },
    {
      path: '/product',
      name: 'Product',
      meta: {layout: 'Product'},
      component: Product
    },
    {
      path: '/contacts',
      name: 'myContact',
      meta: {
        breadcrumb: 'Контакты'
      },
      component: myContact
    },
    {
      path: '/cart',
      name: 'cart',
      component: vCart,
      props: true
    },
  //{
    //path: '/about',
    //name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router