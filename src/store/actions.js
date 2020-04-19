export default {
  selectSampleType({ commit }, name) {
    commit('selectSampleType', name)
  },
  addSample({ commit }, name) {
    commit('addSample', name)
  },
  removeSample({ commit }, name) {
    commit('removeInstrument', name)
  },
  addBeat({ commit }, payload) {
    commit('addBeat', payload)
  },
  removeBeat({ commit }, payload) {
    commit('removeBeat', payload)
  }
}