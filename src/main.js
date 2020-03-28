import Vue from "vue";
import App from "./App.vue";
import Fragment from "vue-fragment";
import closeOutside from "./shared/directives/closeOutside";
import SweetModal from "sweet-modal-vue/src/plugin.js";

Vue.directive("close-outside", closeOutside);
Vue.use(SweetModal);
Vue.use(Fragment.Plugin);
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: h => h(App)
}).$mount("#app");
