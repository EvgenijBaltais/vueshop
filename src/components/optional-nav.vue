<template>
<section class = "optional-nav" id = "optional-nav">
    <div class="container optional-menu-container">
        <div class = "optional-menu" @click = "changeSize()">
            <div class="menu-icon" id = "menu-icon" v-bind:class = "{'open': !fullSize}">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <p class = "optional-menu-info">Категории</p>
        </div>
        <Cart></Cart>
    </div>
</section>
</template>

<script>

import {mapGetters, mapActions} from "vuex";
import Cart from './cart'

export default {

    name: 'OptionalNav',
    data() {
        return {
            sizeValue: this.$store.state.fullSize,
            cartItems: this.$store.state.cartItems
        }
    },
    components: {
        Cart
    },
    methods: {
        ...mapActions(['CHANGESIZE']),

        changeSize() {
            this.sizeValue == 1 ? this.sizeValue = 0 : this.sizeValue = 1
            this.CHANGESIZE(this.sizeValue)
        }
    },
    computed: {
        ...mapGetters(['fullSize'])
    }
}



</script>