document.addEventListener("DOMContentLoaded", function(){

        let activeItem = 0,
            mainBlock = document.getElementById('single-main');
            pics = document.querySelector('.dop-row-inside');
            pics.style.marginLeft = 0;
            images = pics.querySelectorAll('.dop-row-img');
            images[activeItem].classList.add('active-dop-item');

        document.querySelector('.single-dop-right').addEventListener('click', function(){
            let row = this.parentNode.querySelector('.dop-row-inside');
            if (row.classList.contains('moving')) {return false;}
            if (activeItem >= images.length - 4) {
                row.style.marginLeft = 0;
                row.classList.add('slideLeftToStart');
                images[activeItem].classList.remove('active-dop-item');
                activeItem = 0;
                images[activeItem].classList.add('active-dop-item');
                setTimeout(() => {
                    row.classList.remove('slideLeftToStart');
                }, 1000)
                return false;
            }
                images[activeItem].classList.remove('active-dop-item');
                activeItem++;
                images[activeItem].classList.add('active-dop-item');

            let img = row.querySelectorAll('img');
                rowPosition = parseInt(row.style.marginLeft);
                activeSlideWidth = img[activeItem].offsetWidth + parseInt(getComputedStyle(img[activeItem]).getPropertyValue("margin-right"));
                row.classList.add('moving');
                row.style.marginLeft = rowPosition - activeSlideWidth + 'px';

                let fadeIn = new Promise((resolve, reject) => {
                    mainBlock.classList.add('fadeInImg');
                    document.getElementById('single-main-img').src = images[activeItem].getAttribute('src');
                    mainBlock.style.backgroundImage = 'url(' + images[activeItem].getAttribute('src') + ')';
                    setTimeout(() => {
                        resolve();
                    }, 200)
                });
                fadeIn.then(()=>{
                    mainBlock.classList.remove('fadeInImg');
                })

                setTimeout(() => {
                    row.classList.remove('moving'); 
                }, 300)
        });

        document.querySelector('.single-dop-left').addEventListener('click', function(){

            let row = this.parentNode.querySelector('.dop-row-inside');

            if (activeItem <= 0 || row.classList.contains('moving')) { return false;}

                images[activeItem].classList.remove('active-dop-item');
                activeItem--;
                images[activeItem].classList.add('active-dop-item');

            let img = row.querySelectorAll('img');
                rowPosition = parseInt(row.style.marginLeft);
                activeSlideWidth = img[activeItem].offsetWidth + parseInt(getComputedStyle(img[activeItem]).getPropertyValue("margin-right"));
                row.classList.add('moving');
                row.style.marginLeft = rowPosition + activeSlideWidth + 'px';

                let fadeIn = new Promise((resolve, reject) => {
                    mainBlock.classList.add('fadeInImg');
                    document.getElementById('single-main-img').src = images[activeItem].getAttribute('src');
                    mainBlock.style.backgroundImage = 'url(' + images[activeItem].getAttribute('src') + ')';
                    setTimeout(() => {
                        resolve();
                    }, 200)
                });
                fadeIn.then(()=>{
                    mainBlock.classList.remove('fadeInImg');
                })

                setTimeout(() => {
                    row.classList.remove('moving'); 
                }, 300)
        });

    // Нажатие на отдельную картинку

        for (let i = 0; i < images.length; i++) {

            (function(index){
                images[i].addEventListener('click', function(){

                    if (activeItem == index) return false;

                    images[activeItem].classList.remove('active-dop-item');
                    images[index].classList.add('active-dop-item');
                    activeItem = index;
                    let fadeIn = new Promise((resolve, reject) => {
                        mainBlock.classList.add('fadeInImg');
                        document.getElementById('single-main-img').src = this.getAttribute('src');
                        mainBlock.style.backgroundImage = 'url(' + this.getAttribute('src') + ')';
                        setTimeout(() => {
                            resolve();
                        }, 200)
                    });
                    fadeIn.then(()=>{
                        mainBlock.classList.remove('fadeInImg');
                    })
                });
            })(i);
        }

        // Эффект лупы

        mainBlock.addEventListener('mousemove', function(event){
            zoom(event);
        })

        function zoom(event) {
            let zoomer = event.currentTarget;
        
            event.offsetX ? (offsetX = event.offsetX) : (offsetX = event.touches[0].pageX);
            event.offsetY ? (offsetY = event.offsetY) : (offsetX = event.touches[0].pageX);
        
            let x = offsetX / zoomer.offsetWidth  * 100;
            let y = offsetY / zoomer.offsetHeight * 100;
        
            zoomer.style.backgroundPosition = x + "% " + y +"%";
        }

});