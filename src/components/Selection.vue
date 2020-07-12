<template>
<div class = "selection-block">

<VueRangeSlider v-model = "rangeValue" :min = "min" :max = "max" :enable-cross = "enableCross"></VueRangeSlider>

<div class = "color-choose">
    <p>Выберите цветовую палитру:</p>

<div class = "color-versions">

    <div
        v-for = "(item, index) in colors"
        v-if = "!item.nesting"
        :key = "item.id"
        v-bind:class = "[index?``:`choosen-color`, `color-variant`, item.value + `-color`]"
        @click = 'getColorQuery($event)'
        :data-color-id = item.id
    >
    </div>
    <div
        v-else-if = "item.nesting == 1"
        v-bind:class = "[index?``:`choosen-color`, `color-variant`, item.value + `-color`]"
        @click = 'getColorQuery($event)'
        :data-color-id = item.id
    >
        <div
            v-for = "key in colors"
            v-if = "item.subcategory == key.subcategory && key.hex"
            v-bind:class = "[item.value + `-color__item`]"
            v-bind:style = "{backgroundColor: '#' + key.hex}"
        >
        </div>
    </div>
    <div
        v-bind:class = "[`color-variant`, `random-color`]"
        @click = 'getRandomColor($event)'
    >
        <svg enable-background="new 0 0 512 512" height="50px" id="Dice" class = "dice-pic" version="1.1" viewBox="0 0 512 512" width="50px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M255.999,445.614l164.211-94.813h-0.001V161.19l-164.21-94.804L91.79,161.19v189.611L255.999,445.614 M128.877,346.508  c-9.264-3.693-16.789-14.32-16.789-23.745c0.027-9.424,7.525-14.07,16.789-10.405c9.265,3.693,16.79,14.321,16.79,23.773  C145.667,345.527,138.142,350.201,128.877,346.508z M111.642,274.072c0-9.424,7.498-14.07,16.79-10.404  c9.236,3.693,16.762,14.32,16.762,23.744c0,9.432-7.525,14.078-16.79,10.405C119.14,294.124,111.642,283.476,111.642,274.072z   M128.877,247.856c-9.264-3.693-16.762-14.314-16.762-23.745c0-9.424,7.498-14.07,16.789-10.377  c9.265,3.672,16.763,14.32,16.763,23.717C145.667,246.91,138.142,251.556,128.877,247.856z M217.438,397.359  c-9.265-3.693-16.79-14.321-16.79-23.746c0.027-9.424,7.525-14.069,16.79-10.404c9.264,3.693,16.789,14.32,16.789,23.773  C234.228,396.378,226.702,401.052,217.438,397.359z M200.203,324.924c0-9.424,7.497-14.07,16.789-10.405  c9.236,3.693,16.762,14.321,16.762,23.745c0,9.432-7.525,14.077-16.789,10.404C207.7,344.975,200.203,334.327,200.203,324.924z   M217.438,298.707c-9.265-3.693-16.763-14.314-16.763-23.744c0-9.425,7.498-14.07,16.79-10.378  c9.265,3.673,16.762,14.321,16.762,23.718C234.228,297.762,226.702,302.407,217.438,298.707z M186.718,153.972  c4.331-6.964,18.194-11.841,31.008-10.868c12.778,0.938,19.629,7.376,15.305,14.333c-4.352,6.992-18.215,11.869-31,10.896  C189.217,167.367,182.366,160.929,186.718,153.972z M278.257,160.851c4.323-6.992,18.216-11.841,31.001-10.904  c12.785,0.973,19.663,7.404,15.305,14.368c-4.323,6.985-18.216,11.841-31,10.897C280.756,174.239,273.905,167.808,278.257,160.851z   M358.289,313.607c-7.692,9.564-18.612,11.518-24.371,4.424c-5.814-7.115-4.27-20.615,3.423-30.15  c7.685-9.563,18.611-11.525,24.398-4.402C367.525,290.565,365.975,304.072,358.289,313.607z" fill = "#586BA4"/></svg>
    </div>
</div>
    </div>

</div>
</template>


<script>

import 'vue-range-component/dist/vue-range-slider.css'
import VueRangeSlider from 'vue-range-component'
import axios from 'axios'

export default {

    name: 'Selection',
    data(){
        return {
            colors: [],
            products: []
        }
    },
    components: {
        VueRangeSlider
    },
    methods: {

        getRandomColor: function(e){
            let parent = this.getParent(e.target, 'color-versions')
                if (parent.classList.contains('in-proccess')) {console.log('return');return false}
                parent.classList.add('in-proccess');
                parent.querySelector('.choosen-color').classList.remove('choosen-color');

            let colorItems = parent.querySelectorAll('.color-variant')

                let num = this.randomInteger(5, 20);

                    let itemIndex = 0,
                        iterationNumber = 0;

                    let q = new Promise((resolve, reject) => {
                    let go = setTimeout(function run() {
                        colorItems[itemIndex].classList.remove('choosen-color');
                        itemIndex++
                        iterationNumber++

                        if (itemIndex == colorItems.length - 1) {
                            itemIndex = 0
                        }
                        
                        colorItems[itemIndex].classList.add('choosen-color');

                        if (iterationNumber == num - 1) {
                            parent.classList.remove('in-proccess');
                            resolve()
                            return false
                        }
                        setTimeout(run, 100);
                    }, 0);

                    }).then(()=>{
                        this.$store.dispatch('changeCatalog', {'id': colorItems[itemIndex].getAttribute('data-color-id')})
                    })
                    
        },
        getColorQuery: function(e){

            let parent = this.getParent(e.target, 'color-versions')
                if (parent.classList.contains('in-proccess')) return false

            parent.querySelector('.choosen-color').classList.remove('choosen-color');

            this.$store.dispatch('changeCatalog', {'id': e.target.getAttribute('data-color-id')})

            if (e.target.classList.contains('color-variant')) {
                e.target.classList.add('choosen-color');
                return false
            }
            this.getParent(e.target, 'color-variant').classList.add('choosen-color');
        },
        getParent: function(el, cls){
            while ((el = el.parentElement) && !el.classList.contains(cls));
            return el;
        },
        randomInteger: function(min, max) {
            let rand = min + Math.random() * (max + 1 - min);
                return Math.floor(rand);
        }
    },
    created() {
        this.speed = 1
        this.step = 0
        this.enableCross = false
    },
    computed: {
        min(){
            return this.$store.state.priceMin
        },
        max(){
            return this.$store.state.priceMax
        },
        rangeValue: {
            get(){
                return [this.$store.state.priceMin, this.$store.state.priceMax]
            },
            set(){
                []
            }
        }
    },
    mounted() {
        axios.get('http://localhost:3000/colors')
        .then((response) => {this.colors = response.data})
    }
}

</script>