<template>
  <div id="app">
    <YellowLayout></YellowLayout>
  </div>
</template>

<script>
import YellowLayout from './layouts/yellow-layout'

export default {
  name: 'app',
  components: {
    YellowLayout
  },
  created(){

    this.$store.dispatch('getCatalog')
  }
}
</script>


<style>
@import 'assets/css/style.css';
@import 'assets/css/media.css';
@import 'assets/css/product.css';
@import 'assets/css/cart.css';
@import 'assets/css/contacts.css';

</style>
