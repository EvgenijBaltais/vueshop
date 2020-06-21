<template>
        <section class = "container">

            <p class = "main-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet molestias cumque ex voluptatem debitis nulla maxime, adipisci ad beatae odio totam tenetur suscipit corporis numquam eum asperiores ab nostrum optio.</p>
            
            <div class = "single-product-page">
                <div class = "single-product-slider">

                    <div class = "single-main" id = "single-main" style = "background-image: url('/img/bouqets/1.jpg');">
                        <img src = "img/bouqets/1.jpg" class="single-main-img" id="single-main-img" alt="">
                    </div>
                    <div class = "single-dop">
                        <div class = "single-dop-left"></div>
                        <div class = "dop-row">
                            <div class = "dop-row-inside">
                                <img src="img/bouqets/1.jpg" alt="" class = "dop-row-img">
                                <img src="img/bouqets/2.jpg" alt="" class = "dop-row-img">
                                <img src="img/bouqets/3.jpg" alt="" class = "dop-row-img">
                                <img src="img/bouqets/4.jpg" alt="" class = "dop-row-img">
                                <img src="img/bouqets/5.jpg" alt="" class = "dop-row-img">
                                <img src="img/bouqets/1.jpg" alt="" class = "dop-row-img">
                                <img src="img/bouqets/2.jpg" alt="" class = "dop-row-img">
                                <img src="img/bouqets/3.jpg" alt="" class = "dop-row-img">
                                <img src="img/bouqets/4.jpg" alt="" class = "dop-row-img">
                                <img src="img/bouqets/5.jpg" alt="" class = "dop-row-img">
                            </div>
                        </div>
                        <div class = "single-dop-right"></div>
                    </div>
                </div>
                <div class = "single-product-info">
                    <h1 class = "single-product-title">SOLID BACKPACK</h1>
                    <div class = "rate-review">
                        <div class = "star-rating">
                            <span>&#x2730;</span>
                            <span>&#x2730;</span>
                            <span class = "full-star">&#x2605;</span>
                            <span class = "full-star">&#x2605;</span>
                            <span class = "full-star">&#x2605;</span>
                        </div>
                    </div>
                    <hr class = "grey-line">
                    <p class = "single-product-descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. At autem asperiores excepturi perspiciatis ea! Accusamus doloribus ex necessitatibus officiis eaque, delectus assumenda, qui, doloremque error aliquid maiores dolorum velit porro!</p>
                    <hr class = "grey-line">
                    <p class = "single-product-price">6000 рублей</p>
                    <div class = "single-product-panel">
                        <span class = "single-number-of">Количество:</span>
                        <input type="text" class = "single-number-input">
                        <button class = "single-add-to-cart">В корзину</button>
                        <div class = "single-add-to-wishlist">
                            <svg enable-background="new 0 0 96 96" height="96px" class = "empty-heart" version="1.1" viewBox="0 0 96 96" width="96px"><path d="M87.598,15.029c-9.373-9.373-24.568-9.373-33.94,0L48,20.686l-5.657-5.656c-9.373-9.373-24.569-9.373-33.941,0  c-9.373,9.373-9.373,24.568,0,33.941l5.657,5.654L48,88.566l33.941-33.941l5.656-5.654C96.971,39.598,96.971,24.402,87.598,15.029z   M70.627,54.627L48,77.254L25.374,54.627L14.061,43.314c-6.249-6.248-6.249-16.379,0-22.629c6.249-6.248,16.379-6.248,22.627,0  L48,32l11.314-11.314c6.248-6.248,16.379-6.248,22.627,0c6.248,6.25,6.248,16.379,0,22.629L70.627,54.627z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>



export default {

    name: 'Product',
    data() {
        return {}
    }
}
</script>