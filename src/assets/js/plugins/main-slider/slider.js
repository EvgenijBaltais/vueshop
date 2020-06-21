const _slider = function(options){

	const slider = document.getElementById('slider')

	if (!slider) return false  // Если нет слайдера то конец

	let slides = slider.getElementsByClassName('slider-slide'),
		dots = slider.querySelectorAll('.slider-nav-dot'),
		activeSlide = 0,
		autoPlay = options.autoPlay,
		autoPlayInterval =  options.autoPlayInterval || 5000

	function removeActive(index) {
		slides[activeSlide].classList.remove('active-slide')
		dots[activeSlide].classList.remove('slider-nav-dot-active')
	}

	function makeActive(index) {
		slides[activeSlide].classList.add('active-slide')
		dots[activeSlide].classList.add('slider-nav-dot-active')
	}

	const changeSlide = {

		next(){

			removeActive(activeSlide)
			activeSlide++
			activeSlide >= slides.length ? activeSlide = 0 : ''

			makeActive(activeSlide)
		},
		previous() {
			removeActive(activeSlide)
			activeSlide--
			activeSlide < 0 ? activeSlide = slides.length - 1 : ''

			makeActive(activeSlide)
		},
		getСertainSlide() {

			removeActive(activeSlide)

			for (let i = 0; i < dots.length; i++) {
				dots[i] == event.target ? activeSlide = i : ''
			}

			makeActive(activeSlide)
		},
		autoPlay() {
			if (!autoPlay) return false;
			
				setInterval(() => {
					removeActive(activeSlide)
					activeSlide++
					activeSlide >= slides.length ? activeSlide = 0 : ''
					makeActive(activeSlide)
				}, autoPlayInterval)
		}
	}

	return changeSlide;
}

document.addEventListener("DOMContentLoaded", function(){
    
    let options = {
        autoPlay: false,
        autoPlayInterval: 5000
    }

// Карусель

let carousel = _slider(options);

    carousel.autoPlay()

let dots = document.getElementsByClassName('slider-nav-dot');

document.getElementById('slider').addEventListener('click', function(event){

    event.target.classList.contains('slider-arrow-right') && carousel.next()
    event.target.classList.contains('slider-arrow-left') && carousel.previous()

    event.target.classList.contains('slider-nav-dot') && carousel.getСertainSlide()
})

  // Получение индекса элемента (номер слайда)

});