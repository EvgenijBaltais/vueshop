<template>
    <div class="product-item-detail">

        <div class="product-gallery">
            <div class="gallery-main">
                <img src="" alt="" class="gallery-main-pic">
            </div>
            <div class="gallery-dop">
                <div class="gallery-dop-w">
                    <div class = "gallery-dop-pic"></div>
                    <div class = "gallery-dop-pic"></div>
                    <div class = "gallery-dop-pic"></div>
                    <div class = "gallery-dop-pic"></div>
                    <div class = "gallery-dop-pic"></div>
                </div>
            </div>
        </div>

        <div class="product-item-section">
            <h2 class = "product-item-title">{{product_item.title}}</h2>
            <div class = "product-item-price">
                {{product_item.price}}
            </div>
            <p>{{product_item.description}}</p>
        </div>
    </div>
</template>

<style scoped>
.product-item-detail * {
    outline: 1px solid red;
}
.product-item-detail {
    display: flex;
}
.product-item-section {
    padding-left: 20px;
    box-sizing: border-box;
}
.product-gallery {
    width: 450px;
}
.gallery-main {
    height: 400px;
}
.gallery-dop {
    width: 100%;
    overflow: hidden;
}
.gallery-dop-w {
    width: 10000px;
    display: flex;
}
.gallery-dop-pic {
    margin-right: 10px;
    margin-top: 10px;
    width: 143.4px;
    height: 143.4px;
}

.product-item-price {
    padding: 20px 0
}

</style>

<script>

import axios from 'axios'

export default {

    data(){
        return {
            product_id: this.$route.params.id,
            product_item: []
        }
    },
    mounted() {
        axios.get('//localhost:3000/products/:id', {params: {'id': this.product_id}})
        .then(response => {
            console.log(response)
            this.product_item = response.data[0]
        })
        .catch(err => {
            console.log(err)
        })
    }
}


</script>