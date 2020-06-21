document.addEventListener("DOMContentLoaded", function(){

    // Добавить, убавить, убрать...

    let quantityPlus = document.getElementsByClassName('quantity-plus');

        for (let i = 0; i < quantityPlus.length; i++) {
            quantityPlus[i].addEventListener('click', function(){
                let input = this.parentNode.querySelector('.quantity-input'),
                    value = input.value;
                    if (value >= 5) {
                        return false
                    }
                    value++;
                    input.value = value;
            })
        }

    let quantityMinus = document.getElementsByClassName('quantity-minus');
    
        for (let i = 0; i < quantityMinus.length; i++) {
            quantityMinus[i].addEventListener('click', function(){
                let input = this.parentNode.querySelector('.quantity-input'),
                    value = input.value;
                    if (value <= 0) {
                        return false
                    }
                    value--;
                    input.value = value;
            })
        }
    
    let shoppingСart = document.getElementById('shopping-cart');
        rows = shoppingСart.querySelectorAll('tbody tr');

        for (let i = 0; i < rows.length; i++) {console.log(i);

           rows[i].addEventListener('click', function(e){

                if (e.target.classList.contains('quantity-remove')) {
                    
                    if (this.classList.contains('fadeOutRemove')) return false;

                    let fadeOut = new Promise((resolve, reject) => {

                            this.classList.add('fadeOutRemove');
                            setTimeout(() => {
                                resolve()
                            }, 300)
                        });

                        fadeOut.then(()=>{
                            this.parentNode.removeChild(this);
                        })
                }
            })
        }

        //console.log(Element.prototype);

});