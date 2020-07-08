<template>
<div class = "optional-menu-block" id = "optional-menu-block">
    <ul class = "optional-menu-list">
        <li class = "optional-menu-item link-parent">
            <div class = "optional-menu-item-wrap">
                <a class = "optional-menu-link">Букеты</a>
                <ul class = "child-nav-list">
                    <li class = "child-nav-item">
                        <router-link :to = "{name: 'Catalog_items', params: {id: 1}}" class = "child-nav-item__link">
                            Букеты из роз
                        </router-link>
                    </li>
                    <li class = "child-nav-item">
                        <router-link :to = "{name: 'Catalog_items', params: {id: 2}}" class = "child-nav-item__link">
                            Букеты из лилий
                        </router-link>
                    </li>
                    <li class = "child-nav-item">
                        <router-link :to = "{name: 'Catalog_items', params: {id: 3}}" class = "child-nav-item__link">
                            Букеты из гвоздик
                        </router-link>
                    </li>
                    <li class = "child-nav-item">
                        <router-link :to = "{name: 'Catalog_items', params: {id: 4}}" class = "child-nav-item__link">
                            Букеты из фиалок
                        </router-link>
                    </li>
                    <li class = "child-nav-item">
                        <router-link :to = "{name: 'Catalog_items', params: {id: 5}}" class = "child-nav-item__link">
                            Букеты из хризантем
                        </router-link>
                    </li>
                </ul>
            </div>
            <hr class = "optional-menu-hr">
        </li>
        <li class = "optional-menu-item link-parent">
            <div class = "optional-menu-item-wrap">
                <a class  = "optional-menu-link">Цветы</a>
                <ul class = "child-nav-list">
                    <li class = "child-nav-item">
                        <router-link :to = "{name: 'Catalog_items', params: {id: 1}}" class = "child-nav-item__link">
                            Букеты из роз
                        </router-link>
                    </li>
                    <li class = "child-nav-item">
                        <router-link :to = "{name: 'Catalog_items', params: {id: 2}}" class = "child-nav-item__link">
                            Букеты из лилий
                        </router-link>
                    </li>
                    <li class = "child-nav-item">
                        <router-link :to = "{name: 'Catalog_items', params: {id: 3}}" class = "child-nav-item__link">
                            Букеты из гвоздик
                        </router-link>
                    </li>
                    <li class = "child-nav-item">
                        <router-link :to = "{name: 'Catalog_items', params: {id: 4}}" class = "child-nav-item__link">
                            Букеты из фиалок
                        </router-link>
                    </li>
                    <li class = "child-nav-item">
                        <router-link :to = "{name: 'Catalog_items', params: {id: 5}}" class = "child-nav-item__link">
                            Букеты из хризантем
                        </router-link>
                    </li>
                </ul>
            </div>
            <hr class = "optional-menu-hr">
        </li>
        <li class = "optional-menu-item">
            <a class  = "optional-menu-link">Горшечные растения</a>
            <hr class = "optional-menu-hr">
        </li>
        <li class = "optional-menu-item link-parent">
            <div class = "optional-menu-item-wrap">
                <a class  = "optional-menu-link">Акции</a>
                <ul class = "child-nav-list">
                    <li class = "child-nav-item">
                        <router-link :to = "{name: 'Catalog_items', params: {id: 1}}" class = "child-nav-item__link">
                            Букеты из роз
                        </router-link>
                    </li>
                    <li class = "child-nav-item">
                        <router-link :to = "{name: 'Catalog_items', params: {id: 2}}" class = "child-nav-item__link">
                            Букеты из лилий
                        </router-link>
                    </li>
                    <li class = "child-nav-item">
                        <router-link :to = "{name: 'Catalog_items', params: {id: 3}}" class = "child-nav-item__link">
                            Букеты из гвоздик
                        </router-link>
                    </li>
                    <li class = "child-nav-item">
                        <router-link :to = "{name: 'Catalog_items', params: {id: 4}}" class = "child-nav-item__link">
                            Букеты из фиалок
                        </router-link>
                    </li>
                    <li class = "child-nav-item">
                        <router-link :to = "{name: 'Catalog_items', params: {id: 5}}" class = "child-nav-item__link">
                            Букеты из хризантем
                        </router-link>
                    </li>
                </ul>
            </div>
            <hr class = "optional-menu-hr">
        </li>
        <li class = "optional-menu-item">
            <div class = "optional-menu-item-wrap">
                <a class  = "optional-menu-link">Упаковка</a>
            </div>
            <hr class = "optional-menu-hr">
        </li>
        <li class = "optional-menu-item">
            <div class = "optional-menu-item-wrap">
                <a class  = "optional-menu-link">Посуда</a>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {

    name: 'OptionalHiddenMenu',
    date() {
        return {}
    }
}
</script>