export default {
  addInstrument({ commit }, name) {
    commit('addInstrument', name)
  },
  removeInstrument({ commit }, name) {
    commit('removeInstrument', name)
  },
  addBeat({ commit }, payload) {
    commit('addBeat', payload)
  },
  removeBeat({ commit }, payload) {
    commit('removeBeat', payload)
  }
}