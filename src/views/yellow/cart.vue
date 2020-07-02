<template>
    <div class = "top-cart">
        <img src="img/icons/cart-black.svg" alt="Корзина товаров" class = "top-cart-pic">
        <div class = "top-cart-pic_info">{{cartItems.length}}</div>
        <p class = "cart-total-price">{{0}}</p>
        <div class="cart-content">
            <p v-for = "item in cartItems">Название: {{item.title}} Кол-во: {{item.amount}} Цена {{item.price}}<br><br></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cart',
    data(){
        return {
            sizeValue: this.$store.state.fullSize,
            cartItems: this.$store.state.cartItems
        }
    }
}
</script>