<template>
    <div>
        <CatalogItem
            v-for = "item in products"
            :key = "item.id"
            v-bind:products="item"
        />
    </div>
</template>

<script>

import CatalogItem from './Catalog_item'
import axios from 'axios'

export default {
    name: 'Catalog',
    data(){
        return {
            products: null
        }
    },
    components: {
        CatalogItem
    },
    mounted() {
        axios
        .get('http://localhost:3000/products')
        .then((response) => {console.log(response); this.products = response.data});
    }
}


</script>  