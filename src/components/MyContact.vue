<template>
<div>

<Breadcrumbs />

<section class = "container title-block">
    <h1 class = "main-title">Наши контакты</h1>
    <p class = "main-text">
        Наши контакты и все о нашем магазине
    </p>

    <div class = "map-block">
        <div class = "map-info">
            <p>Контактная информация</p>
            <ul class = "footer-contact-info">
                <li class = "footer-info-item footer-info-address">Московская область, г. Красногорск, Первомайская 7</li>
                <li class = "footer-info-item footer-info-phone">8 (905) 738-39-87</li>
                <li class = "footer-info-item footer-info-email">info@home-trees.ru</li>
            </ul>
        </div>
        <div class = "our-map">
            <iframe class = "map-iframe" src="https://yandex.ru/map-widget/v1/?um=constructor%3AkLPa3TkwymGRKOUJ12GbGlVIDsvTgd95&amp;source=constructor" width="600" height="450" frameborder="0"></iframe>
        </div>
    </div>

</section>
</div>
</template>

<script>
import Breadcrumbs from './breadcrumbs'
export default {

    name: 'Test',
    data() {
        return {}
    },
    components: {
        Breadcrumbs
    }
}
</script>