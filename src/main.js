import Vue from "vue";
import App from "./App.vue";
import Fragment from "vue-fragment";
import SweetModal from "sweet-modal-vue/src/plugin.js";
import store from './store'

Vue.use(SweetModal);
Vue.use(Fragment.Plugin);
Vue.config.productionTip = false;

new Vue({
  store,
  el: "#app",
  render: h => h(App)
}).$mount("#app");
