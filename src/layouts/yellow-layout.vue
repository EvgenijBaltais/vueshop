<template>
<div class="wrapper" id = "wrapper" v-bind:class = "{'full-page': fullSize}">

    <TopStripe />
    <MainNav />
    <OptionalNav />

<section class = "content major-page">
    <div class="page-left" id = "page-left">
        <OptionalHiddenMenu />
    </div>
    <div class="page-right" id = "page-right">
        <router-view></router-view>
    </div>
</section>
    <Footer />
</div>
</template>

<script>

import TopStripe from '../components/top-stripe'
import MainNav from '../components/main-nav'
import OptionalNav from '../components/optional-nav'
import OptionalHiddenMenu from '../components/optional-hidden-menu'
import Footer from '../components/footer'

import {mapGetters} from "vuex"

export default {

    name: 'YellowLayout',
    props: {},
    data() {
        return {

        }
    },
    components: {
        TopStripe, MainNav, OptionalNav, OptionalHiddenMenu, Footer
    },
      metaInfo: {
        title: 'Главная страница магазина цветов',
        meta: [
          { vmid: 'description', property: 'description', content: 'Vue App' },
          { vmid: 'og:title', property: 'og:title', content: 'Vue App' },
          { vmid: 'og:description', property: 'og:description', content: 'Vue App' },
        ],
      },
    methods: {

    },
    computed: {

        ...mapGetters(['fullSize'])
    }
}


</script>