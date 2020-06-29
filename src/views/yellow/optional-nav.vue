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
        <a class = "top-cart" href = "cart.php">
            <img src="img/icons/cart-black.svg" alt="Корзина товаров" class = "top-cart-pic">
            <div class = "top-cart-pic_info">{{cartItemsValue}}</div>
            <p class = "cart-total-price">10 000</p>
        </a>
    </div>
</section>
</template>

<script>

import {mapGetters, mapActions} from "vuex";

export default {

    name: 'OptionalNav',
    data() {
        return {
            sizeValue: this.$store.state.fullSize
        }
    },
    methods: {
        ...mapActions(['CHANGESIZE']),

        changeSize() {
            this.sizeValue == 1 ? this.sizeValue = 0 : this.sizeValue = 1

            //console.log(this.sizeValue);
            this.CHANGESIZE(this.sizeValue)
        }
        
    },
    computed: {
        ...mapGetters(['fullSize', 'cartItemsValue'])
    }
}



</script>