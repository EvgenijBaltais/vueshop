<template>
<section class = "container main-slider" id = "main-slider">
    <div class = "slider-arrow-left" id = "slider-arrow-left" @click = "slideAction($event, 'left')"></div>
    <div class = "slider-arrow-right" id = "slider-arrow-right" @click = "slideAction($event, 'right')"></div>
    <!--<div class = "slide-info">
        <p class = "slider-banner-promo">Скидка 20%</p>
    </div>-->

    <div class = "slider-slide" :class = "{'active-slide': index == 0}" v-for = "(item, index) in slides" :key = "index">
        <img :src="item" alt="" class = "slider-pic">
    </div>
    <div class = "slider-nav">
        <div class="slider-nav-dot" :class = "{'slider-nav-dot-active': index == 0}" v-for = "(item, index) in slides" :key = "index" @click = "slideAction($event)"></div>
    </div>
</section>
</template>

<script>

export default {

    name: 'MainSlider',
    data() {
        return {
            slides: [
                    "http://tivatheme.com/wp/byhands/home2/wp-content/uploads/2016/11/slide1-h2.jpg",
                    "http://tivatheme.com/wp/byhands/home2/wp-content/uploads/2016/11/slide2-h2.jpg",
                    "http://tivatheme.com/wp/byhands/home2/wp-content/uploads/2016/11/slide1-h2.jpg",
                    "http://tivatheme.com/wp/byhands/home2/wp-content/uploads/2016/11/slide2-h2.jpg",
                    "http://tivatheme.com/wp/byhands/home2/wp-content/uploads/2016/11/slide1-h2.jpg",
                    "http://tivatheme.com/wp/byhands/home2/wp-content/uploads/2016/11/slide2-h2.jpg"
            ],
            activeSlide: 0,
            autoPlayInterval: 5000
        }
    },
    mounted: function(){

    },
    methods: {

        slideAction: function(e) {
            let parent = this.getParent(e.target, 'main-slider'),
                slides = parent.querySelectorAll('.slider-slide'),
                sliderDots = parent.querySelectorAll('.slider-nav-dot');

                slides[this.activeSlide].classList.remove('active-slide');
                sliderDots[this.activeSlide].classList.remove('slider-nav-dot-active');

                if (value == 'left') {
                    this.activeSlide == 0 ? this.activeSlide = this.slides.length - 1 : this.activeSlide--
                }
                else if (value == 'right') {
                    this.activeSlide == this.slides.length - 1 ? this.activeSlide = 0 : this.activeSlide++
                }
                else {
                    this.activeSlide = this.getIndex(sliderDots, e)
                }

                slides[this.activeSlide].classList.add('active-slide');
                sliderDots[this.activeSlide].classList.add('slider-nav-dot-active');    
        },
        getParent: function(el, cls){

            while ((el = el.parentElement) && !el.classList.contains(cls));
            return el;
        },
        getIndex: function(arr, event) {
            for (let i = 0; i < arr.length; i++) {
                if (event.target == arr[i]) return i;
            }
        },

        autoPlay: function(){

            setInterval(function(){

            })
        }
    },
    computed: {

    }
}


</script>