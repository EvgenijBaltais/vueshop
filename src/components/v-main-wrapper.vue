<template>
<div class = "v-main-wrapper">

    <!-- Сохранение состояния при переходе по ссылкам, чтобы данные, подгружаемые не из центрального хранилища не потерялись-->
    <keep-alive>
        <router-view></router-view>
    </keep-alive>

    <h1>{{title}}</h1>

<!--    <v-catalog/>
    <v-cart
    v-if = "CART.length"
    :cart_data = "CART"
     />
-->
</div>
</template>


<script>

    //import vCatalog from './v-catalog'
    import vCart from './v-cart'
    import {mapGetters} from 'vuex'

export default {

    name: 'v-main-wrapper',
    props: {},
    data() {

        return {
            title: 'Наши товары:'
        }
    },
    //components: {

    //    vCatalog, vCart
    //},
    computed: {
        ...mapGetters([
            'CART'
        ])
    },
    methods: {

    },
    watch: {

    }
}
</script>

<style>

.v-main-wrapper {

}

</style>