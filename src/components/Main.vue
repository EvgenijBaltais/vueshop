<template>
<div>

    <MainSlider />
    <Breadcrumbs />

    <section class = "container title-block">
        <h1 class = "main-title">Цветочный магазин</h1>
        <p class = "main-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet molestias cumque ex voluptatem debitis nulla maxime, adipisci ad beatae odio totam tenetur suscipit corporis numquam eum asperiores ab nostrum optio.</p>
        <p class = "main-text">Пресс-секретарь президента России Дмитрий Песков рассказал о состоянии здоровья главы государства Владимира Путина в связи с ситуацией распространения коронавируса, передает РИА "Новости". "Здоровье Путина отменное, это видно по рабочему графику президента", - подчеркнул представитель Кремля.</p>
    </section>
    <section class="container products-block">
        <p class = "separator-title" @click = "get_products()">Каталог букетов</p>
        <div class = "section-separator">
            <div class = "separator-filled"></div>
        </div>
        <div class = "display-mode">
            <svg xmlns="http://www.w3.org/2000/svg" width = "22" height = "22" class = "view-mode-pic view-mode-blocks active" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="8 8 48 48"><defs><clipPath id="_clipPath_Gf4xw0XyaJqDDuMEJJHr2aOVa9nFOba2"><rect x="8" y="8" width="48" height="48"/></clipPath></defs><g clip-path="url(#_clipPath_Gf4xw0XyaJqDDuMEJJHr2aOVa9nFOba2)"><path d=" M 22 8 C 26.418 8 30 11.582 30 16 L 30 22 C 30 26.418 26.418 30 22 30 L 16 30 C 11.582 30 8 26.418 8 22 L 8 16 C 8 11.582 11.582 8 16 8 L 22 8 Z  M 22 13 L 16 13 C 14.402 13 13.096 14.249 13.005 15.824 L 13 16 L 13 22 C 13 23.598 14.249 24.904 15.824 24.995 L 16 25 L 22 25 C 23.598 25 24.904 23.751 24.995 22.176 L 25 22 L 25 16 C 25 14.402 23.751 13.096 22.176 13.005 L 22 13 Z " fill="rgb(0,0,0)"/><path d=" M 48 8 C 52.418 8 56 11.582 56 16 L 56 22 C 56 26.418 52.418 30 48 30 L 42 30 C 37.582 30 34 26.418 34 22 L 34 16 C 34 11.582 37.582 8 42 8 L 48 8 Z  M 48 13 L 42 13 C 40.402 13 39.096 14.249 39.005 15.824 L 39 16 L 39 22 C 39 23.598 40.249 24.904 41.824 24.995 L 42 25 L 48 25 C 49.598 25 50.904 23.751 50.995 22.176 L 51 22 L 51 16 C 51 14.402 49.751 13.096 48.176 13.005 L 48 13 Z " fill="rgb(0,0,0)"/><path d=" M 22 34 C 26.418 34 30 37.582 30 42 L 30 48 C 30 52.418 26.418 56 22 56 L 16 56 C 11.582 56 8 52.418 8 48 L 8 42 C 8 37.582 11.582 34 16 34 L 22 34 Z  M 22 39 L 16 39 C 14.402 39 13.096 40.249 13.005 41.824 L 13 42 L 13 48 C 13 49.598 14.249 50.904 15.824 50.995 L 16 51 L 22 51 C 23.598 51 24.904 49.751 24.995 48.176 L 25 48 L 25 42 C 25 40.402 23.751 39.096 22.176 39.005 L 22 39 Z " fill="rgb(0,0,0)"/><path d=" M 48 34 C 52.418 34 56 37.582 56 42 L 56 48 C 56 52.418 52.418 56 48 56 L 42 56 C 37.582 56 34 52.418 34 48 L 34 42 C 34 37.582 37.582 34 42 34 L 48 34 Z  M 48 39 L 42 39 C 40.402 39 39.096 40.249 39.005 41.824 L 39 42 L 39 48 C 39 49.598 40.249 50.904 41.824 50.995 L 42 51 L 48 51 C 49.598 51 50.904 49.751 50.995 48.176 L 51 48 L 51 42 C 51 40.402 49.751 39.096 48.176 39.005 L 48 39 Z " fill="rgb(0,0,0)"/></g></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width = "22" height = "22" class = "view-mode-pic view-mode-list" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="2 2 20 20"><defs><clipPath id="_clipPath_29HBJNejlthRV0efUsxjGT83oRrOUz1O"><rect x="2" y="2"/></clipPath></defs><g clip-path="url(#_clipPath_29HBJNejlthRV0efUsxjGT83oRrOUz1O)"><g><g><path d=" M 19 18 C 19.55 18 20 18.45 20 19 C 20 19.55 19.55 20 19 20 L 12 20 C 11.45 20 11 19.55 11 19 C 11 18.45 11.45 18 12 18 L 19 18 Z M 19 16 L 12 16 C 10.346 16 9 17.346 9 19 C 9 20.654 10.346 22 12 22 L 19 22 C 20.654 22 22 20.654 22 19 C 22 17.346 20.654 16 19 16 Z " fill="rgb(0,0,0)"/></g></g><g><g><path d=" M 19 11 C 19.55 11 20 11.45 20 12 C 20 12.55 19.55 13 19 13 L 12 13 C 11.45 13 11 12.55 11 12 C 11 11.45 11.45 11 12 11 L 19 11 Z M 19 9 L 12 9 C 10.346 9 9 10.346 9 12 C 9 13.654 10.346 15 12 15 L 19 15 C 20.654 15 22 13.654 22 12 C 22 10.346 20.654 9 19 9 Z " fill="rgb(0,0,0)"/></g></g><g><g><path d=" M 19 4 C 19.55 4 20 4.45 20 5 C 20 5.55 19.55 6 19 6 L 12 6 C 11.45 6 11 5.55 11 5 C 11 4.45 11.45 4 12 4 L 19 4 Z M 19 2 L 12 2 C 10.346 2 9 3.346 9 5 C 9 6.654 10.346 8 12 8 L 19 8 C 20.654 8 22 6.654 22 5 C 22 3.346 20.654 2 19 2 Z " fill="rgb(0,0,0)"/></g></g><path d=" M 6 16 L 4 16 C 2.896 16 2 16.896 2 18 L 2 20 C 2 21.104 2.896 22 4 22 L 6 22 C 7.104 22 8 21.104 8 20 L 8 18 C 8 16.896 7.104 16 6 16 Z M 6 20 L 4 20 L 4 18 L 6 18 L 6 20 Z " fill="rgb(0,0,0)"/><path d=" M 6 9 L 4 9 C 2.896 9 2 9.896 2 11 L 2 13 C 2 14.104 2.896 15 4 15 L 6 15 C 7.104 15 8 14.104 8 13 L 8 11 C 8 9.896 7.104 9 6 9 Z M 6 13 L 4 13 L 4 11 L 6 11 L 6 13 Z " fill="rgb(0,0,0)"/><path d=" M 6 2 L 4 2 C 2.896 2 2 2.896 2 4 L 2 6 C 2 7.104 2.896 8 4 8 L 6 8 C 7.104 8 8 7.104 8 6 L 8 4 C 8 2.896 7.104 2 6 2 Z M 6 6 L 4 6 L 4 4 L 6 4 L 6 6 Z " fill="rgb(0,0,0)"/></g></svg>
            <a href="" class = "change-display-mode">Сменить отображение</a>
        </div>
        <div class = "products-wrapper-w">
            <div class = "products-wrapper block-mode">
                
            <CatalogItem
                v-for = "item in products"
                :key = "item.id"
                v-bind:products="item"
                :data-id = "item.id"
            />

            </div>
        </div>
        <button id = "more" @click = "get_more($event)">Еще</button>
    </section>
</div>
</template>

<script>

import MainSlider from './main-slider'
import CatalogItem from './Catalog_item'
import Breadcrumbs from './breadcrumbs'

import axios from 'axios'

export default {

    name: 'Main',
    data() {
        return {
            scrolling: 0
        }
    },
    components: {
        MainSlider, CatalogItem, Breadcrumbs
    },
    methods: {
        get_more(e){

            if (this.scrolling != 0) return false 

            this.scrolling++

            let productsAmount = document.querySelectorAll('.product'),
                lastProductId = productsAmount[productsAmount.length - 1].getAttribute('data-id')

                let overlay = document.createElement('div')
                   // overlay.classList.add('loading-section')


                document.querySelector('.products-wrapper-w').prepend(overlay)

                this.$store.dispatch('getMoreProducts', lastProductId)
                .then((response) => {
                    response.data.length < 3 ? e.target.remove() : ''
                    this.scrolling = 0
                })
        },
        getScrollSize(){

            if (this.scrolling != 0) return false 

            this.scrolling++

            let productsAmount = document.querySelectorAll('.product'),
                lastProductId = productsAmount[productsAmount.length - 1].getAttribute('data-id')

                console.log(lastProductId + ' !!!')

                    console.log(productsAmount[productsAmount.length - 1].offsetTop + ' id ' + lastProductId)

                    if (!(window.scrollY > productsAmount[productsAmount.length - 1].offsetTop)) return false

            this.$store.dispatch('getMoreProducts', lastProductId)
            .then((response) => {
                //this.scrolling = 0

                console.log('promise ends')
            })
        }
    },
    computed: {
        products() {
            return this.$store.state.products
        },
        rout(){
            return this.$route.name
        }
    },
  mounted() {
    
  },
  created() {
      console.log('created')

            window.addEventListener('scroll', this.getScrollSize)
  },
  destroyed(){
    console.log('destroyed')

    window.removeEventListener('scroll', this.getScrollSize)
  }
}
</script>
