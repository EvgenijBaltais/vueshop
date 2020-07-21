import Vue from 'vue'
import VueRouter from 'vue-router'
import vCatalog from '../components/v-catalog'
import vCart from '../components/v-cart'
import Main from '../components/Main'
import Product from '../components/Product'
import Catalog from '../components/Catalog'
import myContact from '../components/MyContact'
import ItemFull from '../components/ItemFull'
import PageNotFound from '../components/PageNotFound'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/catalog',
      name: 'Catalog',
      meta: {
        breadcrumb: 'Каталог'
      },
      component: Catalog
    },
    {
      path: '/catalog/:id',
      name: 'Catalog_items',
      meta: {
        breadcrumb: 'Каталог'
      },
      component: Catalog
    },
    {
      path: '/bouquets/:id',
      name: 'Bouquets_item',
      meta: {
        breadcrumb: 'Купить букет'
      },
      component: ItemFull
    },
    {
      path: '/bouquets/',
      name: 'Bouquets',
      meta: {
        breadcrumb: 'Букеты'
      },
      component: Catalog
    },
    {
      path: '/flowers/:id',
      name: 'Flowers',
      meta: {
        breadcrumb: 'Цветы'
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
      path: '/subscribe'
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
    {
      path: '/404',
      name: '404',
      component: PageNotFound
    },
    {
      path: '*',
      redirect: '/404'
    }
]

const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router