export default {
  action: state => state.action,
  sampleModals: state => state.sampleModals,
  currentSample: state => state.userSamples[state.action.edit.sampleName],
  bpm: state => state.bpm,
  userSamples: state => Object.keys(state.userSamples).map(name => {
    return { ...state.userSamples[name] };
  }),
  stepIndicator: state => state.stepIndicator,
  builtInSamples: state => state.builtInSamples.map(sample => {
    return {
      ...sample,
      items: [
        ...sample.items.map(item => {
          return {
            ...item,
            name: item.name.toLowerCase()
              .replace(/_/g, " ")
          }
        })
      ]
    }
  })
}