export default {
  instruments: state => Object.keys(state.instruments).map(name => {
    return { name, beats: state.instruments[name]["beats"] };
  })
}