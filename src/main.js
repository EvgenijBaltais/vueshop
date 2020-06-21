import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'


/*import "./assets/js/plugins/main-slider/slider"*/
/*import "./assets/js/plugins/main-slider/vueslider"*/
import "./assets/js/script"
import "./assets/js/carousel"

Vue.config.productionTip = false

import Meta from 'vue-meta';
Vue.use(Meta);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
