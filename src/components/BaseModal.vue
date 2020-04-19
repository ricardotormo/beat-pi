<template>
  <sweet-modal ref="modal" title="title" v-on:close="resetActiveOnClose">
    <template slot="box-action"></template>
    <div v-if="hasAllContentSlots">
      <sweet-modal-tab title="Instruments" id="tab1">
        <slot name="instrumentList"></slot>
      </sweet-modal-tab>
      <sweet-modal-tab title="Instruments" id="tab2">
        <slot name="equalizer"></slot>
      </sweet-modal-tab>
    </div>
    <slot v-else-if="hasOnlySampleList" name="instrumentList"></slot>
  </sweet-modal>
</template>
<script>
export default {
  props: {
    isActive: {
      type: Boolean
    }
  },
  data() {
    return {
      openModal: this.isActive
    };
  },
  methods: {
    resetActiveOnClose() {
      this.$emit("onModalClose");
    }
  },
  computed: {
    hasAllContentSlots() {
      return !!this.$slots["instrumentList"] && !!this.$slots["equalizer"];
    },
    hasOnlySampleList() {
      return !!this.$slots["instrumentList"];
    }
  },
  watch: {
    isActive(newValue) {
      if (newValue) {
        this.$refs.modal.open();
      }
    }
  }
};
</script>

<style scoped>
</style>