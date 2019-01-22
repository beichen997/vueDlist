import Vue from 'vue'
import Vuex from 'vuex'
import routerStore from './modules/routeStore'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    routerStore
  },
  getters
})

export default store
