import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import builtInSamples from "../builtInSamples";
import VuexPersist from 'vuex-persist';
import socketPlugin from '../plugins/socket'
const vuexPersist = new VuexPersist({
  key: 'sp-app',
  storage: window.localStorage
});
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    action: {
      edit: { isCurrent: false, sampleName: "" },
      add: { isCurrent: false }
    },
    userSamples: {},
    builtInSamples: builtInSamples,
    stepIndicator: {},
    bpm: 60
  },
  getters,
  actions,
  mutations,
  plugins: [socketPlugin, vuexPersist.plugin]
})
