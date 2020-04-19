export default {
  userSamples: state => Object.keys(state.userSamples).map(name => {
    return { name, beats: state.userSamples[name]["beats"] };
  }),
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