<template>

<div class = "product">
        <img :src="'/img/bouqets/' + products.id + '/' + '1.jpg'" alt = "img" class = "item_img">
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
            <a :href = "'/' + products.category_title + '/' + products.id" class = "product-button product-watch" data-info = "Подробнее" @click.prevent = "goToLink($event)">
                <div class = "product-button-inset">
                    <div class = "product-button-anim-first"></div>
                    <div class = "product-button-anim-second"></div>
                </div>
            </a>
        </div>
        <div style = "padding: 20px 0 10px 0; text-align: center;">
            <button>Заказать в один клик!</button>
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
            default() {}
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
         },
         goToLink: function(e){
            let url = this.getParent(e.target, 'product-buttons-container').querySelector('.product-watch').getAttribute('href')
                this.$router.push({ path: url }).catch(e => {})
         },
        getParent: function(el, cls){
            while ((el = el.parentElement) && !el.classList.contains(cls));
            return el;
        },
    },
    computed: {
        ...mapGetters(['cartItemsValue'])
    }
}
</script>