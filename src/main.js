import Vue from "vue";
import App from "./App.vue";
import Fragment from "vue-fragment";
import SweetModal from "sweet-modal-vue/src/plugin.js";
import VueSimpleWebSocket from 'vue-simple-websocket'

Vue.use(VueSimpleWebSocket, 'ws://localhost:8999', {
  reconnectEnabled: true,
  reconnectInterval: 5000 // time to reconnect in milliseconds
});
Vue.use(SweetModal);
Vue.use(Fragment.Plugin);
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: h => h(App)
}).$mount("#app");
