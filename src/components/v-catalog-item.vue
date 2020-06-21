<template>
<div class = "v-main-item">

    <p class = "item-title">{{title}}</p>
    <img :src=" require('../assets/img/' + product_data.image) " alt = "img" class = "item_img">
    <p class = "item-name">{{product_data.name}}</p>
    <p class = "item-price">{{product_data.price}} р.</p>
    <!--<button class = "item-button" @click = "sendDataToCart">Send</button>-->
    <button class = "item-button"
        @click = "addToCart"
    >Send</button>
</div>
</template>


<script>

import vCatalogItem from './v-catalog-item'

export default {

    name: 'v-main-wrapper',
    props: {
        product_data : {
            type: Object,
            default() {

            }
        }
    },
    data() {

        return {
            title: 'Some title'
        }
    },

    computed: {

    },
    methods: {
        sendDataToCart(){

            this.$emit('sendArticle', this.product_data.name)
        },
        addToCart() {

            this.$emit('addToCart', this.product_data)
        }
    },
    mounted(){
        this.$set(this.product_data, 'quantity', 1)
    },
    watch: {

    }
}
</script>

<style>

.v-main-item {
    display: block;
    width: 31%;
    outline: 1px solid #ccc;
    margin-bottom: 20px;
    padding: 10px;
    box-sizing: border-box;
}

.item-title {
    font-weight: bold;
}

.item_img {
    max-width: 100%;
}

</style>