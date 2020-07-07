<template>
<div class = "selection-block">


<VueRangeSlider v-model = "rangeValue" :min = "min" :max = "max" :enable-cross = "enableCross"></VueRangeSlider>

</div>
</template>


<script>

import 'vue-range-component/dist/vue-range-slider.css'
import VueRangeSlider from 'vue-range-component'

export default {

    name: 'Selection',
    data(){
        return {
            rangeValue: [0, 100]
        }
    },
    components: {
        VueRangeSlider
    },
    created() {
        this.min = 0
        this.max = 100
        this.speed = 1
        this.step = 0
        this.enableCross = false
    }

}

</script>