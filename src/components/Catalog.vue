<template>
    <div>
        <Breadcrumbs/>
        <CatalogItem
            v-for = "item in products"
            :key = "item.id"
            v-bind:products="item"
        />
    </div>
</template>

<script>

import CatalogItem from './Catalog_item'
import Breadcrumbs from './breadcrumbs'
import axios from 'axios'

export default {
    name: 'Catalog',
    data(){
        return {
            products: null
        }
    },
    components: {
        CatalogItem, Breadcrumbs
    },
    mounted() {
        axios
        .get('http://localhost:3000/products')
        .then((response) => {console.log(response); this.products = response.data});
    }
}


</script>  