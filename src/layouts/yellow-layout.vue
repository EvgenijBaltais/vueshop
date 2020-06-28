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

import TopStripe from '../views/yellow/top-stripe'
import MainNav from '../views/yellow/main-nav'
import OptionalNav from '../views/yellow/optional-nav'
import OptionalHiddenMenu from '../views/yellow/optional-hidden-menu'
import Footer from '../views/yellow/footer'

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
        //fullSize(){
        //    return this.$store.state.fullSize
        //}
    }
}


</script>