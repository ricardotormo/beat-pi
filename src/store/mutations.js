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

  editEcho(state, { name, value }) {
    Vue.set(state.userSamples[name], "echo", value);
  },

  editVolume(state, { name, value }) {
    Vue.set(state.userSamples[name], "volume", value);
  },

  editPan(state, { name, value }) {
    Vue.set(state.userSamples[name], "pan", value);
  },

  setBpm(state, value) {
    Vue.set(state, "bpm", value);
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
  },

  removeBeat(state, { name, pos }) {
    Vue.set(state.userSamples[name]["beats"], pos, -1)
  },

  setStep(state, { step, duration }) {
    Vue.set(state.stepIndicator, "step", step);
    Vue.set(state.stepIndicator, "duration", duration);
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
