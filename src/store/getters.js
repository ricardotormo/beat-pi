export default {
  action: state => state.action,
  sampleModals: state => state.sampleModals,
  bpm: state => state.bpm,
  userSamples: state => Object.keys(state.userSamples).map(name => {
    return { name, beats: state.userSamples[name]["beats"] };
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