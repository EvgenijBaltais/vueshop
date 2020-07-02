<template>
<footer class = "footer" id = "footer">
    <div class = "big-subscribe">
        <div class="container big-subscribe-cont">
            <div class = "subscribe-text">
                <img v-bind:src="'../assets/img/icons/envelope.svg'" alt="Подписка на новости и скидки!" class = "subscribe-envelope"/>
                <p class = "subscribe-info">Подписка на новости и скидки!</p>
            </div>
            <div class = "subscribe-form">
                <div class = "sub-form">
                    <form action="">
                        <input type="text" name = "subscribe" class = "subscribe-input" placeholder = "Введите email">
                        <button class = "subscribe-submit" id = "subscribe-submit">Подписка</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-container container">
        <div class = "footer-block">
            <p>Контактная информация</p>
            <ul class = "footer-contact-info">
                <li class = "footer-info-item footer-info-address">Московская область, г. Красногорск, Первомайская 7</li>
                <li class = "footer-info-item footer-info-phone">8 (905) 738-39-87</li>
                <li class = "footer-info-item footer-info-email">info@home-trees.ru</li>
            </ul>
        </div>
        <div class = "footer-block">
            <p></p>
        </div>
        <div class = "footer-block">
            <p>Меню</p>
        </div>
        <div class = "footer-block">
            <p>Соцсети</p>
        </div>
    </div>
</footer>
</template>

<script>

export default {

    name: 'Footer',
    date() {
        return {

            envelope: '/assets/img/icons/envelope.svg'
        }
    }
}
</script>