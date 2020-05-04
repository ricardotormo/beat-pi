
export default {
  data: function () {
    return {
      get socket() {
        const socket = new WebSocket("ws://localhost:8999");
        return socket;
      }
    }
  }
};