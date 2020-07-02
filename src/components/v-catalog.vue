<template>
<div class = "v-main">
    <router-link :to = "{name: 'cart', params: {cart_data: CART}}">
        <div class="link-to-cart">Cart: {{CART.length}}</div>
    </router-link>

    <div class = "v-main-wrap">
    <v-catalog-item 
    v-for = "product in PRODUCTS"
    :key = "product.article" 
    v-bind:product_data = "product"
    @addToCart = "addToCart"
    />
    </div>
</div>
</template>


<script>


import vCatalogItem from './v-catalog-item'
import { mapActions, mapGetters } from 'vuex'

export default {

    name: 'v-catalog',
    props: {},
    data() {

        return {}
    },
    components: {
        vCatalogItem
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'CART'
        ])
    },
    methods: {

        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART'
        ]),

        articleInConsole(data) {

        },
        addToCart(data) {
            this.ADD_TO_CART(data)
        }

    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
        .then(response => {

            if (response.data) {console.log('data arrived')}

        })
    },
    watch: {

    }
}
</script>

<style>

.v-main-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
}

.link-to-cart {
    position: absolute;
    right: 20px;
    top: 20px;
    padding: 16px;
    border: 1px solid #ccc;
}

</style>