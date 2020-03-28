<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header">
          <p id="choose-title">Choose your Instrument</p>
        </header>
        <section class="modal-body" id="modalDescription">
          <div class="types-parent">
            <div class="types-type">
              <ul class="types">
                <li
                  v-for="(instrument, type) in instruments"
                  :key="type"
                  class="typeItems"
                  @click="showInstList(type)"
                >
                  {{ type }}
                </li>
              </ul>
            </div>
            <div class="types-name">
              <ul class="type-name-list">
                <li
                  v-for="(active, i) in activeTypeEls"
                  :key="i"
                  class="typeNames"
                >
                  <span @click="addInst(active.name)">{{ active.name }}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  </transition>
</template>
<script>
import drumList from "../drum/drum-list";
export default {
  data() {
    return {
      instruments: drumList,
      activeTypeEls: null,
      activeType: null
    };
  },
  methods: {
    showInstList(type) {
      this.activeType = type;
      this.activeTypeEls = this.instruments[type];
    },
    addInst(name) {
      this.$emit("childToParent", { name, type: this.activeType });
    }
  }
};
</script>
<style lang="scss" scoped></style>
