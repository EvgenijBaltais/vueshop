<template>
    <div>
            {{a}}
    </div>
</template>





<script>

import axios from 'axios'

export default {

    data(){
        return {
            a: this.$route.params
        }
    },
    mounted(){

        axios.get('//localhost:8000/getItem')
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    }


}

console.log

</script>