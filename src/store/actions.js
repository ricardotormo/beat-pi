export default {
  selectSampleType({ commit }, name) {
    commit('selectSampleType', name)
  },
  addSample({ commit }, name) {
    commit('addSample', name)
  },
  editEcho({ commit }, payload) {
    commit('editEcho', payload)
  },
  setBpm({ commit }, value) {
    commit('setBpm', value)
  },
  editPan({ commit }, payload) {
    commit('editPan', payload)
  },
  editVolume({ commit }, payload) {
    commit('editVolume', payload)
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