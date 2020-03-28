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
          <p id="choose-title">
            <slot name="title"></slot>
          </p>
          <button
            type="button"
            class="btn-close"
            @click="close()"
            aria-label="Close modal"
          >
            x
          </button>
        </header>
        <section class="modal-body" id="modalDescription">
          <slot name="content"></slot>
        </section>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "Test",
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>
<style lang="scss">
body {
  position: relative;
}

.modal-backdrop {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  //   height: 100vh !important;
  height: 100vh;
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  width: 80%;
  //   max-height: 100vh;
  height: 80%;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #000;
  position: relative;
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
  position: absolute;
  right: 0;
  top: 0;
  outline: none;
}
</style>
