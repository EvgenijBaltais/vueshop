<template>
    <div class = "cart-block">


        <router-link :to = "{name: 'catalog'}">
            <div class="link-to-cart">Back to catalog</div>
        </router-link>

            <h2>Cart</h2>

            <p v-if = '!cart_data.length'>Нет товаров</p>

            <v-cart-item 
            v-for = "(item, index) in cart_data"
            :key = "item.article"
            :cart_item_data = "item"
            @deleteFromCart = "deleteFromCart(index)"
            @increment = "increment(index)"
            @decrement = "decrement(index)"
            />

            <div class="cart-total">

                <div class = "total-name">Total: </div>
                <div class = "total-name">{{cartTotalCost}} р.</div>
            </div>
    </div>
</template>

<script>

import vCartItem from './v-cart-item'
import {mapActions} from 'vuex'

export default {

    name: 'v-cart',
    components: {
       vCartItem 
    },
    props: {

        cart_data: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data(){
            return {
                //title: 'Добро пожаловать в корзину',
            }
    },
    computed: {
        cartTotalCost(){

            if (this.cart_data.length) {

                let result = []

                for (let item of this.cart_data) {
                    result.push(item.price * item.quantity)
                }
                
                result = result.reduce(function(sum, el){
                    return sum + el
                })
                return result
            }
            else return 0
        }
    },
    methods: {

        ...mapActions([
            'DELETE_FROM_CART',
            'INCREMENT_CART_ITEM',
            'DECREMENT_CART_ITEM'
        ]),

        increment(index) {
            this.INCREMENT_CART_ITEM(index)
        },
        decrement(index){
            this.DECREMENT_CART_ITEM(index)  
        },

        deleteFromCart(index) {
            this.DELETE_FROM_CART(index)
        }
    },
    watch: {

    }

}

</script>

<style>

.cart-block {
    width: 900px;
    margin: 0 auto;
    padding: 50px;
    box-sizing: border-box;
}

.cart-total {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    color: #fff;
    width: 100%;
    padding: 30px;
    box-sizing: border-box;

    background: rgb(24, 134, 24);
}

.total-name {
    display: inline-block;
    margin-right: 20px;
}

</style>