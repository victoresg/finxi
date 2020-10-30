import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
})

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [vuexLocalStorage.plugin]
})
