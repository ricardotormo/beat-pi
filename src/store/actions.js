export default {
  selectSampleType({ commit }, name) {
    commit('selectSampleType', name)
  },
  addSample({ commit }, name) {
    commit('addSample', name)
  },
  setReverb({ commit }, payload) {
    commit('setReverb', payload)
  },
  setBpm({ commit }, value) {
    commit('setBpm', value)
  },
  setPan({ commit }, payload) {
    commit('setPan', payload)
  },
  setVolume({ commit }, payload) {
    commit('setVolume', payload)
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