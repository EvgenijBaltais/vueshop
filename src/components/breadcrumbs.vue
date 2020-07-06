<template>
<section class = "container breadcrumbs" v-if = "$breadcrumbs.length && !mainPage" v-on:click.prevent = "qqq">
    <div class = "breadcrumbs-home">
        <router-link :to = "{name: 'Main'}" href = "" class = "breadcrumbs-link-main">Главная</router-link>
    </div>
    <div class = "breadcrumbs-next">></div>
    <div class = "breadcrumbs-item" v-for = "(key, index) in $breadcrumbs">
        <router-link :to = "{name: key.name}" class = "breadcrumbs-link">{{key.meta.breadcrumb}}</router-link>
    </div>
</section>
</template>

<script>

import VueBreadcrumbs from 'vue-2-breadcrumbs';

export default {

    name: 'Breadcrumbs',
    data() {
        return {
            mainPage: this.$route.path == '/'
        }
    },
    methods: {
        qqq(){
            console.log(this.$breadcrumbs);
        }
    },
    computed: {

    }
}
</script>