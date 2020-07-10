<template>
    <div>
        <Breadcrumbs />
        <Selection />
        <div class = "products-wrapper block-mode">
            <CatalogItem
                v-for = "item in products"
                :key = "item.id"
                v-bind:products="item"
            />
        </div>
    </div>
</template>

<script>

import CatalogItem from './Catalog_item'
import Breadcrumbs from './breadcrumbs'
import Selection from './Selection'
import {mapGetters} from 'vuex'
import axios from 'axios'

export default {
    name: 'Catalog',
    data(){
        return {
            //products: this.$store.state.products
        }
    },
    components: {
        CatalogItem, Breadcrumbs, Selection
    },
    methods: {

        renewColor: function(){
        }
    },
    computed: {

        products(){
            return this.$store.state.products
        }
    },
    mounted() {
    }
}


</script> 