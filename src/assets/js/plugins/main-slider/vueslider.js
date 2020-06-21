export default {
    name: 'Slider',
    el: '#slider',
    data: {
        slides = [
            
        ],
		dots = slider.querySelectorAll('.slider-nav-dot'),
		activeSlide = 0,
		autoPlay = options.autoPlay,
		autoPlayInterval =  options.autoPlayInterval || 5000
    },
    mounted: {
        //this.autoPlay()
    },
    methods: {

        removeActive: function(index) {
            slides[activeSlide].classList.remove('active-slide')
            dots[activeSlide].classList.remove('slider-nav-dot-active')
        },
    
        makeActive: function(index) {
            slides[activeSlide].classList.add('active-slide')
            dots[activeSlide].classList.add('slider-nav-dot-active')
        },
    
        next: function(){

            removeActive(activeSlide)
            activeSlide++
            activeSlide >= slides.length ? activeSlide = 0 : ''

            makeActive(activeSlide)
        },

        previous: function() {
            removeActive(activeSlide)
            activeSlide--
            activeSlide < 0 ? activeSlide = slides.length - 1 : ''

            makeActive(activeSlide)
        },

        getСertainSlide: function() {
            removeActive(activeSlide)
            for (let i = 0; i < dots.length; i++) {
                dots[i] == event.target ? activeSlide = i : ''
            }
            makeActive(activeSlide)
        },

        autoPlay: function() {
            if (!autoPlay) return false;
            
                setInterval(() => {
                    removeActive(activeSlide)
                    activeSlide++
                    activeSlide >= slides.length ? activeSlide = 0 : ''
                    makeActive(activeSlide)
                }, autoPlayInterval)
        }
    }
}

   // slider.autoplay()