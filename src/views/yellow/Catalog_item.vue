<template>

<div class = "product">
    {{cartItemsValue}}
        <div class = "product-img">
            <div class = "block-overlay">
                <div class = "add-to-cart add-to-cart-basket">
                    <div class = "add-to-cart__button"></div>
                </div>
            </div>
            <div class = "product-pic" :style="{backgroundImage: `url(/img/bouqets/${products.img}/1.jpg)`}"></div>
            <div class = "sale-info"></div>
        </div>
        <p class = "product-title"><a href = "/product.php">{{products.title}}</a></p>
        <p class = "product-price">{{products.price}} р.</p>
        <div class = "product-buttons-container">
            <div class = "product-info"></div>
            <div class = "product-button product-minus" @click = "items > 0 ? items-- : ''">
                <div class = "product-button-inset">
                    <div class = "product-button-anim-first"></div>
                    <div class = "product-button-anim-second product-minus"></div>
                </div>
            </div>
            <div class = "product-button products-amount">
                <div class = "product-button-inset">
                    <div class = "product-button-anim-first">{{items}}</div>
                    <div class = "product-button-anim-second">{{items}}</div>
                </div>
            </div>
            <div class = "product-button product-plus" @click = "items < 1000 ? items++ : ''">
                <div class = "product-button-inset">
                    <div class = "product-button-anim-first"></div>
                    <div class = "product-button-anim-second product-plus"></div>
                </div>
            </div>
            <div class = "product-button product-order" data-info = "В корзину" @click = "addToCart">
                <div class = "product-button-inset">
                    <div class = "product-button-anim-first"></div>
                    <div class = "product-button-anim-second"></div>
                </div>
            </div>
            <div class = "product-button product-like" data-info = "В избранное">
                <div class = "product-button-inset">
                    <div class = "product-button-anim-first"></div>
                    <div class = "product-button-anim-second"></div>
                </div>
            </div>
            <div class = "product-button product-watch" data-info = "Подробнее">
                <div class = "product-button-inset">
                    <div class = "product-button-anim-first"></div>
                    <div class = "product-button-anim-second"></div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import {mapGetters} from "vuex"

export default {
    name: 'CatalogItem',
    props: {
        products: {
            type: Object,
            default() {

            }
        }
    },
    data() {
        return {
            items: 1
        }
    },
    methods: {
        
        addToCart: function(){


        }
    },
    computed: {

        ...mapGetters(['cartItemsValue']),
    }
}

</script>

<style>

</style>