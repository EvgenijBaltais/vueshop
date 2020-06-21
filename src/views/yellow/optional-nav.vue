<template>
<section class = "optional-nav" id = "optional-nav">
    <div class="container optional-menu-container">
        <div class = "optional-menu">
            <div class="menu-icon open" id = "menu-icon">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <p class = "optional-menu-info">Категории</p>
        </div>
        <a class = "top-cart" href = "cart.php">
            <img src="img/icons/cart-black.svg" alt="Корзина товаров" class = "top-cart-pic">
            <div class = "top-cart-pic_info">1</div>
            <p class = "cart-total-price">10 000</p>
        </a>
    </div>
</section>
</template>

<script>

export default {

    name: 'OptionalNav',
    date() {
        return {}
    }
}
</script>