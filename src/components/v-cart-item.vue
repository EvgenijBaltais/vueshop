<template>  

<div class = "v-cart-item">

<img :src = " require('../assets/img/' + cart_item_data.image) " alt="" class = "cart-item-img">

    <div class = "v-cart-item__info">

        <p>{{cart_item_data.name}}</p>
        <p>{{cart_item_data.price}}</p>
        <p>{{cart_item_data.article}}</p>
    </div>

    <div class="cart-item-data__quantity">
           quantity:  <span @click = "decrementItem">-</span>
           {{cart_item_data.quantity}}
           <span @click = "incrementItem">+</span>
    </div>

    <button @click = "deleteFromCart">DELETE</button>

</div>
</template> 

<script>

export default {

    name: 'v-cart-item',
    props: {
        cart_item_data: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {
        deleteFromCart() {
            this.$emit('deleteFromCart')
        },

        decrementItem() {
            this.$emit('decrement')
        },

        incrementItem() {
            this.$emit('increment')
        }
    },
    mounted(){
        //this.$set(this.cart_item_data, 'quantity', 1)
    }

}

</script>


<style>

.v-cart-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.v-cart-item{
    outline: 1px solid #ccc;
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 30px;
}

.cart-item-img {
    width: 200px;
}
</style>