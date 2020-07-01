<template>
<section class = "optional-nav" id = "optional-nav">
    <div class="container optional-menu-container">
        <div class = "optional-menu" @click = "changeSize()">
            <div class="menu-icon" id = "menu-icon" v-bind:class = "{'open': !fullSize}">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <p class = "optional-menu-info">Категории</p>
        </div>
        <div class = "top-cart" href = "cart.php">
            <img src="img/icons/cart-black.svg" alt="Корзина товаров" class = "top-cart-pic">
            <div class = "top-cart-pic_info">{{cartItems.length}}</div>
            <p class = "cart-total-price">{{0}}</p>

            <div class="cart-content">
                <p v-for = "item in cartItems">Название: {{item.title}} Кол-во: {{item.amount}} Цена {{item.price}}<br><br></p>
            </div>
        </div>
    </div>
</section>
</template>

<script>

import {mapGetters, mapActions} from "vuex";

export default {

    name: 'OptionalNav',
    data() {
        return {
            sizeValue: this.$store.state.fullSize,
            cartItems: this.$store.state.cartItems
        }
    },
    methods: {
        ...mapActions(['CHANGESIZE']),

        changeSize() {
            this.sizeValue == 1 ? this.sizeValue = 0 : this.sizeValue = 1
            this.CHANGESIZE(this.sizeValue)
        }
    },
    computed: {
        ...mapGetters(['fullSize'])
    }
}



</script>