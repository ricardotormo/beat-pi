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
      beats: Array.from({ length: 16 }, () => -1),
      volume: 1,
      phase: 0,
      echo: 0,
      pan: 0
    }
    Vue.set(state.userSamples, name, sample);

    // Setting current actions
    Vue.set(state.action.edit, "isCurrent", false);
    Vue.set(state.action.edit, "name", "");
    Vue.set(state.action.add, "isCurrent", false);
  },

  removeSample(state, name) {
    Vue.delete(state.userSamples, name)
  },

  removeAllSamples(state) {
    Object.keys(state.userSamples).forEach(sample => {
      Vue.delete(state.userSamples, sample)
    })
  },

  addBeat(state, { name, pos }) {
    Vue.set(state.userSamples[name]["beats"], pos, 1);
    // const message = JSON.stringify({
    //   address: "instrument/set_beats",
    //   name: name,
    //   beats: state.userSamples[name]["beats"]
    // });
    // socket.send(message);
  },

  removeBeat(state, { name, pos }) {
    Vue.set(state.userSamples[name]["beats"], pos, -1)
  },

  openSampleModal(state, { sampleName, action }) {
    Vue.set(state.action[action], "isCurrent", true);
    if (sampleName.length) {
      Vue.set(state.action[action], "name", sampleName);
    }
  },

  closeSampleModal(state, name) {
    Vue.set(state.action[name], "isCurrent", false);
    Vue.set(state.action['edit'], "name", "");
  }
}
