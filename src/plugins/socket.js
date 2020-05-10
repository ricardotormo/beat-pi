const port = process.env.VUE_APP_PORT || 8999;
const socket = new WebSocket(`ws://localhost:${port}`);
const socketPlugin = store => {
  socket.onmessage = function (msg) {
    const values = eval(JSON.parse(msg.data).args[0].value)
    const step = { step: values[0], duration: values[1] };
    store.commit('setStep', step)
  }

  store.subscribeAction((action, state) => {
    if (action.type === 'removeAllSamples') {
      Object.keys(state.userSamples).forEach(sample => {
        const message = JSON.stringify({
          address: "instrument/remove_instrument",
          name: sample
        });
        socket.send(message);
      })
    }
  })
  store.subscribe((mutation, state) => {
    if (mutation.type === 'addSample') {
      const message = JSON.stringify({
        address: "instrument/add_instrument",
        name: mutation.payload,
        data: state['userSamples'][mutation.payload].beats
      });
      socket.send(message);
    }
    if (mutation.type === 'removeSample') {
      const message = JSON.stringify({
        address: "instrument/remove_instrument",
        name: mutation.payload
      });
      socket.send(message);
    }

    if (mutation.type === 'addBeat' || mutation.type === 'removeBeat') {
      const message = JSON.stringify({
        address: "instrument/set_beats",
        name: mutation.payload.name,
        data: state['userSamples'][mutation.payload.name].beats
      });
      socket.send(message);
    }

    if (mutation.type === 'setVolume') {
      const message = JSON.stringify({
        address: "instrument/set_volume",
        name: mutation.payload.name,
        data: [mutation.payload.value]
      });
      socket.send(message);
    }

    if (mutation.type === 'setPan') {
      const message = JSON.stringify({
        address: "instrument/set_pan",
        name: mutation.payload.name,
        data: [mutation.payload.value]
      });
      socket.send(message);
    }

    if (mutation.type === 'setReverb') {
      const message = JSON.stringify({
        address: "instrument/set_reverb",
        name: mutation.payload.name,
        data: [mutation.payload.value]
      });
      socket.send(message);
    }

    if (mutation.type == 'setBpm') {
      const message = JSON.stringify({
        address: "instrument/set_bpm",
        name: "bpm",
        data: [mutation.payload],
      });
      socket.send(message);
    }
  })
};

export default socketPlugin