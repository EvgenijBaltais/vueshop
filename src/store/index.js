import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fullSize: 0,
    cartItems: []
  },
  mutations: {
    INCREMENT: (state, value) => {
      state.fullSize = value
    },
    CARTCHANGE: (state, item) => {

      let alreadyExists = -1;

        for (let i = 0; i < state.cartItems.length; i++) {
          if (state.cartItems[i]['id'] == item['id']) {
              alreadyExists = i                           // если такой товар уже есть в корзине
          }
        }

        console.log(alreadyExists)

        if (alreadyExists != -1) {
          state.cartItems[alreadyExists].price += item.price * item.amount
          state.cartItems[alreadyExists].amount += item.amount
          return false
        }
        state.cartItems.push(item)
    }
  },
  actions: {
    CHANGESIZE({commit}, value){
      commit('INCREMENT', value)
    },
    ADDTOCART({commit}, item){
      commit('CARTCHANGE', item)
    }
  },
  getters: {
    fullSize: state => {
      return state.fullSize
    },
    cartItemsValue: state => {
      return state.cartItemsValue
    },
    cartItems: state => {
      return state.cartItems
    },
    cartPrice: state => {
      return state.cartPrice
    }
  },
  modules: {
  }
})
