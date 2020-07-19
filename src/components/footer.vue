<template>
<footer class = "footer" id = "footer">
    <div class = "big-subscribe">
        <div class="container big-subscribe-cont">
            <div class = "subscribe-text">
                <img v-bind:src="'/img/icons/envelope.svg'" alt="Подписка на новости и скидки!" class = "subscribe-envelope"/>
                <p class = "subscribe-info">Подписка на новости и скидки!</p>
            </div>
            <div class = "subscribe-form">
                <form action="" v-on:submit.prevent id = "footer-subscribe-form" class = "footer-subscribe-form form">
                    <div class = "sub-form">
                        <input type="text" class = "subscribe-input" v-model = "email" v-on:input = "changeEmailForm($event)" placeholder = "Введите email">
                        <button class = "subscribe-submit" id = "subscribe-submit" @click = "subscribe($event)">Подписка</button>
                    </div>
                    <label class = "personal-data-label">
                        <input type = "checkbox" name = "personal-data" v-model = "checked" class = "personal-data" @click = "personalDataChange($event)">
                        <p class = "personal-data-text" @click = "personalDataChange($event)">Предоставить свои данные для обработки и хранения согласен!</p>
                    </label>
                </form>
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

import axios from 'axios'

export default {

    name: 'Footer',
    data() {
        return {
            email: "",
            checked: 1
        }
    },
    methods: {

        subscribe: function(e){
            
            let parent = this.getParent(e.target, 'form')

                if (this.checked != 1) {
                    parent.querySelector('.personal-data-text').style.color = 'red'
                    return false
                }

            if (this.email.indexOf("@") == -1 && !parent.querySelector('.wrong-email')) {
                let wrongEmail = document.createElement('div')
                    wrongEmail.classList.add('wrong-email')
                    wrongEmail.innerText = "Email введен некорректно"
                    parent.prepend(wrongEmail)
            }

            axios.get('http://localhost:3000/subscribe', {params: {'email': this.email.trim()}})
            .then((response) => {
                if (response.status == 200) {
                    e.target.innerText = response.data
                    this.email = ''
                }
            })
        },
        changeEmailForm: function(e) {

            let parent = this.getParent(e.target, 'form')
                if (parent.querySelector('.wrong-email')) {
                    parent.querySelector('.wrong-email').remove()
                }
        },
        personalDataChange: function(e){

            e.target.parentNode.querySelector('.personal-data-text').style.color = "#000"
        },
        getParent: function(el, cls){
            while ((el = el.parentElement) && !el.classList.contains(cls));
            return el;
        }
    },
    computed: {

    }
}
</script>