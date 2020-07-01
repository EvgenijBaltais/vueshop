<template>

<div class = "product">
        <div class = "product-img">
            <div class = "block-overlay">
                <div class = "add-to-cart add-to-cart-basket">
                    <div class = "add-to-cart__button"></div>
                </div>
            </div>
            <div class = "product-pic" :style="{backgroundImage: `url(/img/bouqets/${products.img}/1.jpg)`}"></div>
            <div class = "sale-info"></div>
        </div>
        <p class = "product-title">
            <a href = "/product.php">{{products.title}}</a>
        </p>
        <p class = "product-price">{{products.price}} р.</p>
        <div class = "product-buttons-container">
            <div class = "product-info"></div>
            <div class = "product-button product-minus" @click = "decreaseItem">
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
            <div class = "product-button product-plus" @click = "increaseItem">
                <div class = "product-button-inset">
                    <div class = "product-button-anim-first"></div>
                    <div class = "product-button-anim-second product-plus"></div>
                </div>
            </div>
            <div class = "product-button product-order" @click = "addToCart" data-info = "В корзину">
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

import {mapGetters, mapActions} from "vuex"

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
        ...mapActions(['ADDTOCART']),
        increaseItem(){
            if (this.items < 1000) {
                this.items++
                this.finalPrice += this.products.price
            }
        },
         decreaseItem(){
            if (this.items) {
                this.items--
                this.finalPrice -= this.products.price
            }
         },
         addToCart(){
             let item = {
                    id: this.products.id,
                    title: this.products.title,
                    price: this.products.price,
                    amount: this.items
                }
                new Promise((resolve, reject) => {

                    this.ADDTOCART(item)
                    resolve();
                }).then(()=>{
                    let success = document.createElement('div')
                        success.classList.add('success-add-to-cart')
                        success.innerText = 'Товар успешно добавлен в корзину!'

                    document.body.append(success);
                }).then(() => {
                    setTimeout(()=>{
                        for (let i = 0; i < document.querySelectorAll('.success-add-to-cart').length; i++) {
                            document.querySelectorAll('.success-add-to-cart')[i].remove()
                        }
                    }, 1000)
                })
         }
    },
    computed: {

        ...mapGetters(['cartItemsValue'])
        
    }
}

</script>

<style>

</style>