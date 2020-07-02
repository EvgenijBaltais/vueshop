<template>
<section class = "top-stripe" id = "top-stripe">
    <div class="container stripe-content">
        <div class = "stripe-left">
            <p class = "text-info delivery-icon-text">Бесплатная доставка по Красногорску от 3000 р.</p>
        </div>
        <div class = "stripe-center">
            <p class = "text-info">Скидки и акции для всех клиентов</p>
        </div>
        <div class = "stripe-right">
            <a class = "stripe-left__loginlink" href="/">Логин</a>
            <span class = "link-between"> / </span>
            <a class = "stripe-left__loginlink" href="/">Авторизация</a>
        </div>
    </div>
</section>
</template>

<script>

export default {

    name: 'TopStripe',
    date() {
        return {}
    }
}
</script>