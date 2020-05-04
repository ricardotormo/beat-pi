export default {
  selectSampleType({ commit }, name) {
    commit('selectSampleType', name)
  },
  addSample({ commit }, name) {
    commit('addSample', name)
  },
  removeSample({ commit }, name) {
    commit('removeSample', name)
  },
  removeAllSamples({ commit }) {
    commit('removeAllSamples')
  },
  addBeat({ commit }, payload) {
    commit('addBeat', payload)
  },
  removeBeat({ commit }, payload) {
    commit('removeBeat', payload)
  },
  openSampleModal({ commit }, payload) {
    commit('openSampleModal', payload)
  },
  closeSampleModal({ commit }, name) {
    commit('closeSampleModal', name)
  }
}