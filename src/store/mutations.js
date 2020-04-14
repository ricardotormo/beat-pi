import Vue from 'vue'

export default {
  addInstrument(state, name) {
    const instrument = {
      [name]: {
        beats: Array.from({ length: 16 }, () => -1),
        volume: 1,
        phase: 0,
        echo: 0,
        pan: 0
      }
    }
    state.instruments = { ...instrument }
  },

  removeInstrument(state, name) {
    Vue.delete(state.instruments, name)
  },

  addBeat(state, { name, pos }) {
    Vue.set(state.instruments[name]["beats"], pos, 1)
  },

  removeBeat(state, { name, pos }) {
    Vue.set(state.instruments[name]["beats"], pos, -1)
  }
}