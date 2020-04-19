import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import builtInSamples from "../drum/builtInSamples";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userSamples: {},
    builtInSamples: builtInSamples,
    globalLevel: 1
  },
  getters,
  actions,
  mutations,
})