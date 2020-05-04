<template>
  <div>
    <button @click="emitActionName" class="btn" type="button">
      <slot name="title"></slot>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    emitActionName() {
      this.$emit("onButtonAction");
    }
  },
  created() {
    console.log(this.socket);
  }
};
</script>

<style lang="scss">
.btn {
  background: white;
  border-radius: 0;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 150ms ease-in-out;
  height: 40px;
  font-size: 1em;
  border-radius: 2px;
  border: none;
  padding: 5px 25px;
  cursor: pointer;
  outline: none;
  width: 180px;
}
</style>
