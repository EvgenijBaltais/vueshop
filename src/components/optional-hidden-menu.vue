<template>
<div class = "optional-menu-block" id = "optional-menu-block">
    <ul class = "optional-menu-list">
        <li v-for = "(item, index) in menuItems" :key = "item.id" class = "optional-menu-item link-parent">
            <div v-bind:class = "[{'optional-menu-item-wrap': item.submenu}]">
                <a class = "optional-menu-link" :href = "'/' + item.url" @click.prevent = "goToSection($event)">{{item.title}}</a>
                <ul class = "child-nav-list" v-if = item.submenu>
                    <li class = "child-nav-item" v-for = "i in subMenuItems" :key = "i.id" v-if = "i.menu_id == item.id">
                        <a :href = "'/' + item.url + '/' + i.url" class = "child-nav-item__link" @click.prevent = "goToSection($event)">{{i.title}}</a>
                    </li>
                </ul>
            </div>
            <hr class = "optional-menu-hr" v-if = "index != menuItems.length - 1">
        </li>
    </ul>
</div>
</template>

<script>
export default {

    name: 'OptionalHiddenMenu',
    data() {
        return {
            roses: 'roses'
        }
    },
    methods: {

        goToSection: function(e){

            let path = e.target.getAttribute('href')
                this.$router.push({ path: path })
        }
    },
    computed: {
        menuItems(){
            return this.$store.state.menuItems
        },
        subMenuItems(){
            return this.$store.state.subMenuItems
        }
    }
}
</script>