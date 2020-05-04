import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import builtInSamples from "../drum/builtInSamples";
const socket = new WebSocket("ws://localhost:8999");
Vue.use(Vuex)

const myPlugin = store => {
  console.log(store.subscribe)
  // called when the store is initialized
  store.subscribe((mutation, state) => {
    if (mutation.type === 'addSample') {
      // Emit data to Sonic Pi
      const message = JSON.stringify({
        address: "instrument/add_instrument",
        name: mutation.payload,
        beats: state['userSamples'][mutation.payload].beats
      });
      socket.send(message);
    }
    if (mutation.type === 'addBeat') {
      // Emit data to Sonic Pi
      const message = JSON.stringify({
        address: "instrument/set_beats",
        name: name,
        beats: state['userSamples'][mutation.payload.name].beats
      });
      socket.send(message);
    }
  })
}

export default new Vuex.Store({
  state: {
    action: {
      edit: { isCurrent: false, sampleName: "" },
      add: { isCurrent: false }
    },
    userSamples: {},
    builtInSamples: builtInSamples,
    globalLevel: 1
  },
  getters,
  actions,
  mutations,
  plugins: [myPlugin]
})
