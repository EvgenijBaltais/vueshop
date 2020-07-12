import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    namespaced: true,
    fullSize: 0,
    cartItems: [],
    products: [],
    priceMin: 0,
    priceMax: 0
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

        if (alreadyExists != -1) {
          state.cartItems[alreadyExists].price += item.price * item.amount
          state.cartItems[alreadyExists].amount += item.amount
          return false
        }
        state.cartItems.push(item)
    },
    SETCATALOG: (state, products) => {

      let min = products[0].price,
          max = 0
          for (let i = 0; i < products.length; i++) {
              min > products[i].price ? min = products[i].price : ''
              max < products[i].price ? max = products[i].price : ''
          }
        state.products = products
        state.priceMin = min
        state.priceMax = max
    }
  },
  actions: {
    CHANGESIZE({commit}, value){
      commit('INCREMENT', value)
    },
    ADDTOCART({commit}, item){
      commit('CARTCHANGE', item)
    },
    getCatalog({commit}) {
      return axios('//localhost:3000/products', {
        method: 'GET'
      })
      .then((response) => {
        commit('SETCATALOG', response.data)
        return response
      })
      .catch((error) => {
          return error
      })
    },
    changeCatalog({commit}, params) {
      return axios('//localhost:3000/selectProducts', {
        method: 'GET', params: params
      })
      .then((response) => {
        commit ('SETCATALOG', response.data)
        return response
      })
      .catch((error) => {
        return error
      })
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
    },
    catalog: state => {
      return state.products
    }
  },
  modules: {
  }
})
