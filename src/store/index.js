import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fullSize: 0,
    cartItems: [],
    cartItemsValue: 0
  },
  mutations: {
    INCREMENT: (state, value) => {
      state.fullSize = value
    }
  },
  actions: {
    CHANGESIZE({commit}, value){
      commit('INCREMENT', value)
    }
  },
  getters: {
    fullSize: state => {
      return state.fullSize
    },
    cartItemsValue: state => {
      return state.cartItemsValue
    }
  },
  modules: {
  }
})
