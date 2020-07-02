<template>
<nav class = "main-nav" id = "main-nav">
    <div class = "main-nav-wrap">
        <div class = "main-nav-logo">
            <router-link :to = "{name: 'Main'}">Flower shop</router-link>
        </div>
        <ul class = "main-nav-list">
            <li class = "main-nav-item">
                <router-link :to = "{name: 'Main'}" class = "main-nav-link">Главная</router-link>
            </li>
            <li class = "main-nav-item">
                <router-link :to = "{name: 'Catalog'}" class = "main-nav-link">Каталог</router-link>
            </li>
            <li class = "main-nav-item">
                <a href = "/" class = "main-nav-link">Блог</a>
            </li>
            <li class = "main-nav-item">
                <a href = "/" class = "main-nav-link">О нас</a>
            </li>
            <li class = "main-nav-item">
                <router-link :to = "{name: 'myContact'}" class = "main-nav-link">Контакты</router-link>
            </li>
        </ul>
        <Cart></Cart>
        <div class = "main-nav-phone">
            <a href="tel:+77777777777" class = "main-top-phone">+7 (777) 777-77-77</a>
        </div>
    </div>
</nav>
</template>

<script>

import {mapGetters} from 'vuex'
import Cart from './cart'

export default {

    name: 'MainNav',
    data() {
        return {}
    },
    components: {
        Cart
    },
    computed: {

        ...mapGetters(['cartItemsValue', 'cartPrice'])
    }
}
</script>