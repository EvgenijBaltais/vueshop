<template>
<section class = "container breadcrumbs" v-if = $breadcrumbs.length>
{{a}}
    <div class = "breadcrumbs-home" v-for = "(key, index) in $breadcrumbs">
            1
    </div>
<!--
    <div class = "breadcrumbs-home">
        <a href = "" class = "breadcrumbs-link-main" v-on:click.prevent = "qqq">Главная</a>
    </div>
    <div class = "breadcrumbs-next">></div>
    <div class = "breadcrumbs-item">
        <a href = "" class = "breadcrumbs-link">Корзина</a>
    </div>
    <div class = "breadcrumbs-next">></div>
    <div class = "breadcrumbs-item">
        <a class = "breadcrumbs-link breadcrumbs-link-last">Корзина</a>
    </div>
    -->
</section>
</template>

<script>

import VueBreadcrumbs from 'vue-2-breadcrumbs';

export default {

    name: 'Breadcrumbs',
    data() {
        return {
            a: this.$breadcrumbs.length
        }
    },
    methods: {
        qqq(){
            console.log(this.$breadcrumbs[0]);
        }
    },
    computed: {

    }
}
</script>