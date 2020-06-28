
document.addEventListener("DOMContentLoaded", function(){

// Меню - открытие, закрытие
/*
let menuIcon = document.getElementById('menu-icon'),
	menuList = document.getElementById('optional-menu-block');

	menuIcon.addEventListener('click', function(){

		if (this.classList.contains('open')) {
			this.classList.remove('open');

			document.getElementById('wrapper').classList.remove('separated-page');
			document.getElementById('wrapper').classList.add('full-page');
		}
		else {
			this.classList.add('open');

			document.getElementById('wrapper').classList.add('separated-page');
			document.getElementById('wrapper').classList.remove('full-page');
		}
	})
*/
// Меню - скрытие левой секции страницы

// Смена варианта отображения товаров

let modeButtons = document.getElementsByClassName('view-mode-pic');

	for (let i = 0; i < modeButtons.length; i++) {

		modeButtons[i].addEventListener('click', function(){

			if (this.classList.contains('active')) {

				for(let i = 0; i < modeButtons.length; i++) {
					modeButtons[i].classList.remove('active')
				}
				this.classList.remove('active')
				this.parentNode.parentNode.querySelector('.products-wrapper').classList.add('list-mode')
			}
			else {
				for(let i = 0; i < modeButtons.length; i++) {
					modeButtons[i].classList.remove('active')
				}
				this.classList.add('active')
				this.parentNode.parentNode.querySelector('.products-wrapper').classList.remove('list-mode')
			}

			if (this.classList.contains('view-mode-list')) {
				this.parentNode.parentNode.querySelector('.products-wrapper').classList.add('list-mode')
			}
			else {
				this.parentNode.parentNode.querySelector('.products-wrapper').classList.remove('list-mode')
			}
		})
	}


	let basketClick = document.getElementsByClassName('add-to-cart');

	for (let i = 0; i < basketClick.length; i++) {
		basketClick[i].addEventListener('click', function(){

			const request = new XMLHttpRequest();

			let price = 3000,
				product = "Букет из 101 розы",
				mainCartValue = +document.querySelector('.cart-order').innerText;
			
			// Указываем путь до файла на сервере, который будет обрабатывать наш запрос 
			const url = 'php/send_to_cart.php';
			const params = "price=" + price + "&product=" + product + "&amount=" + mainCartValue;
			request.open("POST", url, true);
			request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			request.addEventListener("readystatechange", () => {
				if(request.readyState === 4 && request.status === 200) {       
					console.log(request.responseText);
				}
			});
			 
			//	Вот здесь мы и передаем строку с данными, которую формировали выше. И собственно выполняем запрос. 
			request.send(params);
					// Добавление в корзину

					let mainCart = document.getElementsByClassName('main-cart-link'),
						mainCartValueBlock = document.getElementsByClassName('cart-order');

						for (let i = 0; i < mainCartValueBlock.length; i++) {
							mainCartValueBlock[i].style.display = 'block';
						}

						mainCartValue++;

						for (let i = 0; i < mainCartValueBlock.length; i++){
							mainCartValueBlock[i].innerText = mainCartValue;
						}

					// Запись в куки
						/*
					let amount = getCookie('amount');

					console.log(amount + ' *');

					if (Number(amount) == 0){
						console.log('! ' + amount);
						amount++;
						console.log('!! ' + amount);
					}
					else {
						amount = 0
					}
					console.log(typeof amount + ' *');
					if (amount == undefined) amount = 0;
					amount++

					console.log(amount + ' **');

					let cookie_product = encodeURIComponent("product=" + product + "; max-age=86400; path=/"),   				// Одни сутки
						cookie_amount = encodeURIComponent("amount=" + amount + "; max-age=86400; path=/");
					document.cookie = cookie_product;
					document.cookie = cookie_amount;
					*/
		});
	}

	// Карточка товара - Добавить, убавить - в избранное и в корзину

	// Плюс
	let productsPlus = document.getElementsByClassName('product-plus');
		for (let i = 0; i < productsPlus.length; i++) {
			productsPlus[i].addEventListener('click', function(){
				let valueBlock = this.previousElementSibling.querySelector('div').querySelectorAll('div'),
					value = +valueBlock[0].innerText;
				if (value >= 20) return false;
					value++;

					for (let key in valueBlock) {
						valueBlock[key].innerText = value;
					}
					animateIncrease(valueBlock[0]);
			})
		}

	// Минус
	let productsMinus = document.getElementsByClassName('product-minus');
		for (let i = 0; i < productsMinus.length; i++) {
			productsMinus[i].addEventListener('click', function(){
				let valueBlock = this.nextElementSibling.querySelector('div').querySelectorAll('div'),
					value = +valueBlock[0].innerText;
				if (value <= 0) return false;
					value--;

					for (let key in valueBlock) {
						valueBlock[key].innerText = value;
					}
					animateIncrease(valueBlock[0]);
			})
		}

	function animateIncrease(element) {

		let increase = new Promise((resolve, reject) => {
			element.classList.add('increaseProducts')
			setTimeout(function(){
				resolve()
			}, 200)
		})

		increase.then(() => {
			element.classList.remove('increaseProducts')
		})
	}

	// Карточка товара - Добавить, убавить - в избранное и в корзину, конец



// Меню, прокрутка

let nav = document.getElementById('main-nav'),
	beforeNav = document.getElementById('top-stripe'),
	stickyNavHeight = nav.clientHeight + parseInt(getComputedStyle(nav).marginTop) + parseInt(getComputedStyle(nav).marginBottom),
	staticBasket = nav.querySelector('.main-cart-link-static'),
	scrollBasket = nav.querySelector('.main-cart-link-scroll'),
	fromTop = document.getElementById('optional-nav').offsetTop;

window.addEventListener('scroll', function(){

	if (window.pageYOffset > fromTop) {
		nav.classList.add('sticky-nav');
		beforeNav.style.marginBottom = stickyNavHeight + 'px';
	}
	else {
		nav.classList.remove('sticky-nav');
		beforeNav.style.marginBottom = 0;
	}
});


// Всякие функции для работы

function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
	  "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}




})