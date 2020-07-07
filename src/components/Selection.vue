<template>
<div class = "selection-block">


<VueRangeSlider v-model = "rangeValue" :min = "min" :max = "max" :enable-cross = "enableCross"></VueRangeSlider>

<div class = "color-versions">

    <div class = "color-variant custom-color choosen-color"></div>
    <div class = "color-variant red-color"></div>
    <div class = "color-variant white-color"></div>
    <div class = "color-variant pink-color"></div>
    <div class = "color-variant yellow-color"></div>
    <div class = "color-variant orange-color"></div>
    <div class = "color-variant purple-color"></div>
    <div class = "color-variant green-color"></div>
    <div class = "color-variant pastel-color"></div>
    <div class = "color-variant bright-color"></div>
    <div class = "color-variant random-color"></div>
</div>

</div>
</template>


<script>

import 'vue-range-component/dist/vue-range-slider.css'
import VueRangeSlider from 'vue-range-component'

export default {

    name: 'Selection',
    data(){
        return {
            rangeValue: [0, 25000]
        }
    },
    components: {
        VueRangeSlider
    },
    created() {
        this.min = 0
        this.max = 25000
        this.speed = 1
        this.step = 0
        this.enableCross = false
    }

}

</script>