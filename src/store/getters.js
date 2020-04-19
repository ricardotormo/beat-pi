export default {
  userSamples: state => Object.keys(state.userSamples).map(name => {
    return { name, beats: state.userSamples[name]["beats"] };
  }),
  builtInSamples: state => state.builtInSamples
}