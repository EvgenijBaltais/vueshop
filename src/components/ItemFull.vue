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
    </div>
</template>

<style scoped>
.product-item-detail * {
    outline: 1px solid red;
}
.product-item-detail {
    display: flex;
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
    margin-right: 20px;
    margin-top: 20px;
    width: 136.7px;
    height: 136.6px;
}

</style>

<script>

import axios from 'axios'

export default {

    data(){
        return {
            product_id: this.$route.params.id
        }
    },
    computed: {

        product(){

            for (let key in this.$store.state.products) {
                if (this.$store.state.products[key].id == this.product_id) {
                    return this.$store.state.products[key]
                    break
                }
            }
        }

        /*axios.get('//localhost:8000/getItem')
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })*/
    }
}


</script>