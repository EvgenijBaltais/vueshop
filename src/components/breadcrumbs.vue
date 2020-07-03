<template>
<section class = "container breadcrumbs" v-if = $breadcrumbs.length>
    <div class = "breadcrumbs-home">
        <router-link :to = "{name: 'Main'}" href = "" class = "breadcrumbs-link-main">Главная</router-link>
    </div>
    <div class = "breadcrumbs-next">></div>
    <div class = "breadcrumbs-item" v-for = "(key, index) in $breadcrumbs">
        <router-link :to = "{name: key.name}" class = "breadcrumbs-link">{{key.meta.breadcrumb}}</router-link>
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