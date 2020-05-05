import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import builtInSamples from "../drum/builtInSamples";
const socket = new WebSocket("ws://localhost:8999");
Vue.use(Vuex)

const socketPlugin = store => {
  socket.onmessage = function (msg) {
    const values = eval(JSON.parse(msg.data).args[0].value)
    const stepObject = { step: values[0], duration: values[1] };
    store.commit('setStep', stepObject)
  }
  store.subscribeAction((action, state) => {
    if (action.type === 'removeAllSamples') {
      Object.keys(state.userSamples).forEach(sample => {
        const message = JSON.stringify({
          address: "instrument/remove_instrument",
          name: sample
        });
        socket.send(message);
      })
    }
  })
  store.subscribe((mutation, state) => {
    if (mutation.type === 'addSample') {
      const message = JSON.stringify({
        address: "instrument/add_instrument",
        name: mutation.payload,
        beats: state['userSamples'][mutation.payload].beats
      });
      socket.send(message);
    }
    if (mutation.type === 'removeSample') {
      const message = JSON.stringify({
        address: "instrument/remove_instrument",
        name: mutation.payload
      });
      socket.send(message);
    }

    if (mutation.type === 'addBeat' || mutation.type === 'removeBeat') {
      const message = JSON.stringify({
        address: "instrument/set_beats",
        name: mutation.payload.name,
        beats: state['userSamples'][mutation.payload.name].beats
      });
      socket.send(message);
    }

    if (mutation.type == 'setBpm') {
      console.log(mutation)
      const message = JSON.stringify({
        address: "instrument/set_bpm",
        name: "bpm",
        beats: [mutation.payload],
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
    globalLevel: 1,
    stepIndicator: {},
    bpm: 60
  },
  getters,
  actions,
  mutations,
  plugins: [socketPlugin]
})
