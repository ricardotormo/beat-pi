import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    showModal: false
  },
  actions: {
    openModal() {
      this.showModal.commit = true;
    }
  }
});
