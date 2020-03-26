<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            Choose your Drum
            <button
              type="button"
              class="btn-close"
              @click="close()"
              aria-label="Close modal"
            >x</button>
          </slot>
        </header>
        <section class="modal-body" id="modalDescription">
          <!-- <slot name="body">
            More Drum options
            <ul>
              <li v-for="(instrument, type) in instruments" :key="type">
                {{ type }}
              </li>
            </ul>
          </slot>-->
          <div class="types-parent">
            <div class="types-type">
              <ul class="types">
                <li
                  v-for="(instrument, type) in instruments"
                  :key="type"
                  class="typeItems"
                  @click="showInstList(instruments[type])"
                >{{ type }}</li>
              </ul>
            </div>
            <!-- ***************************? -->
            <div class="types-name">
              <ul class="type-name-list">
                <li v-for="(active, name) in activeTypeEls" :key="name" class="typeNames">
                  <span>{{ active.name }}</span>
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
      activeTypeEls: null
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    showInstList(type) {
      this.activeTypeEls = type;
    }
  }
};
</script>
<style lang="scss">
.modal-backdrop {
  // top: 0;
  // bottom: 0;
  // left: 0;
  // right: 0;
  // background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  width: 60%;
  max-height: 70vh;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #000;
  justify-content: space-between;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: rgba(51, 91, 12, 0.2);
  background: transparent;
}

.types {
  height: 250px;
  padding: 20px auto;
}
.typeItems {
  background-color: rgba(51, 91, 12, 0.2);
  list-style: none;
  margin: 0 5px 5px 5px;
  padding: 10px 5px 10px;
  border-radius: 5px;
  box-shadow: 3px 3px 3px rgba(11, 10, 10, 0.2);
  cursor: pointer;
}
.types-parent {
  width: 95%;
  border: 1px solid black;
  border-radius: 10px;
  overflow: auto;
  display: flex;
  padding-left: 0;
}
.types-name {
  width: 63%;
}
.typeNames {
  list-style: none;
}

li.typeNames {
  width: 33%;
  height: 80px;
  box-shadow: 0 0 1px #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /*    display:flex; */
  /*    text-align:justify; */
}
.typeNames span {
  display: flex;
}

.type-name-list {
  display: flex;
  /*     background:red; */
  flex-wrap: wrap;
  width: 100%;
}
</style>
