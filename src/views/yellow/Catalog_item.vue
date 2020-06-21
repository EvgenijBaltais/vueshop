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
        <p class = "product-title"><a href = "/product.php">{{products.title}}</a></p>
        <p class = "product-price">{{products.price}} р.</p>
        <div class = "product-buttons-container">
            <div class = "product-info"></div>
            <div class = "product-button product-minus">
                <div class = "product-button-inset">
                    <div class = "product-button-anim-first"></div>
                    <div class = "product-button-anim-second product-minus"></div>
                </div>
            </div>
            <div class = "product-button products-amount">
                <div class = "product-button-inset">
                    <div class = "product-button-anim-first">1</div>
                    <div class = "product-button-anim-second">1</div>
                </div>
            </div>
            <div class = "product-button product-plus">
                <div class = "product-button-inset">
                    <div class = "product-button-anim-first"></div>
                    <div class = "product-button-anim-second product-plus"></div>
                </div>
            </div>
            <div class = "product-button product-order" data-info = "В корзину">
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
        return {}
    }
}
</script>

<style>

</style>