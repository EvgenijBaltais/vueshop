import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    namespaced: true,
    cartEmpty: 1,
    fullSize: 0,
    cartItems: [],
    products: [],
    priceMin: 0,
    priceMax: 0,
    menuItems: [],
    subMenuItems: []
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
        state.cartEmpty = 0
        state.cartItems.push(item)
    },
    SETCATALOG: (state, products) => {
        state.products = products
    },
    REMAKECATALOG: (state, products) => {
        state.products = products
    },
    GETPRICES: (state, products) => {
      let min = products[0].price,
        max = 0
        for (let i = 0; i < products.length; i++) {
            min > products[i].price ? min = products[i].price : ''
            max < products[i].price ? max = products[i].price : ''
        }
      state.priceMin = min
      state.priceMax = max
    },
    GETMOREPRODUCTS: (state, products) => {
      for (let i = 0; i < products.length; i++) {
        state.products.push(products[i])
      }
    },
    GETMENUITEMS: (state, menuItems) => {
      state.menuItems = menuItems
    },
    GETSUBMENUITEMS: (state, subMenuItems) => {
      state.subMenuItems = subMenuItems
    }
  },
  actions: {
    CHANGESIZE({commit}, value){
      commit('INCREMENT', value)
    },
    ADDTOCART({commit}, item){
      commit('CARTCHANGE', item)
    },
    getPrices({commit}) {
      return axios('//localhost:3000/prices', {
        method: 'GET'
      })
      .then((response) => {
        commit('GETPRICES', response.data)
        return response
      })
      .catch((error) => {
        return error
      })
    },
    getCatalog({commit}) {
      return axios('//localhost:3000/products', {
        method: 'GET', params: {'limit': 12}
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
        commit ('REMAKECATALOG', response.data)
        return response
      })
      .catch((error) => {
        return error
      })
    },
    getMoreProducts({commit}, from) {
      return axios('//localhost:3000/getMoreProducts', {
        method: 'GET', params: {'from': from}
      })
      .then((response) => {
        commit('GETMOREPRODUCTS', response.data)
        return response
      })
      .catch((error) => {
        return error
      })
    },
    getMenu({commit}) {
      return axios('//localhost:3000/getMenu', {
        method: 'GET'
      })
      .then(response => {
        commit('GETMENUITEMS', response.data)
        return response
      }).catch(error => {
        return error
      })
    },
    getSubMenu({commit}) {
      return axios('//localhost:3000/getSubMenu', {
        method: 'GET'
      })
      .then(response => {
        commit('GETSUBMENUITEMS', response.data)
        return response
      }).catch(error => {
        return false
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
