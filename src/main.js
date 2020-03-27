import Vue from "vue";
import App from "./App.vue";
import Fragment from "vue-fragment";

import { store } from "./store/store";
Vue.use(Fragment.Plugin);
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  store: store,
  render: h => h(App)
}).$mount("#app");
