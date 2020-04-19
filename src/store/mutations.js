import Vue from 'vue'

export default {
  selectSampleType(state, type) {
    state.builtInSamples = state.builtInSamples.map(sample => {
      return {
        ...sample,
        isSelected: sample.type == type ? true : false
      }
    })
  },

  addSample(state, name) {
    const sample = {
      [name]: {
        beats: Array.from({ length: 16 }, () => -1),
        volume: 1,
        phase: 0,
        echo: 0,
        pan: 0
      }
    }
    state.userSamples = { ...sample }
  },

  removeSample(state, name) {
    Vue.delete(state.userSamples, name)
  },

  addBeat(state, { name, pos }) {
    Vue.set(state.userSamples[name]["beats"], pos, 1)
  },

  removeBeat(state, { name, pos }) {
    Vue.set(state.userSamples[name]["beats"], pos, -1)
  }
}