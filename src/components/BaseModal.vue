<template>
  <sweet-modal :ref="name" :isOpen="isOpen" :title="title" v-on:close="onModalClose">
    <template slot="box-action"></template>
    <div v-if="hasAllContentSlots">
      <sweet-modal-tab title="Instruments" id="tab1">
        <slot name="builtInSamples"></slot>
      </sweet-modal-tab>
      <sweet-modal-tab title="Equalizer" id="tab2">
        <slot name="equalizer"></slot>
      </sweet-modal-tab>
    </div>
    <slot v-else-if="hasOnlySampleList" name="builtInSamples"></slot>
  </sweet-modal>
</template>
<script>
export default {
  props: {
    name: {
      type: String
    },
    title: {
      type: String
    },
    isOpen: {
      type: Boolean
    }
  },
  methods: {
    onModalClose() {
      this.$emit("onModalClose");
    }
  },
  watch: {
    isOpen(newVal) {
      if (newVal) {
        this.$refs[this.name].open();
      } else {
        this.$refs[this.name].close();
      }
    }
  },
  computed: {
    hasAllContentSlots() {
      return !!this.$slots["builtInSamples"] && !!this.$slots["equalizer"];
    },
    hasOnlySampleList() {
      return !!this.$slots["builtInSamples"];
    }
  }
};
</script>

<style lang="scss">
@import "../assets/css/flaticon.css";
.sweet-content-content > div {
  width: 100%;
}
.sweet-modal-tab {
  display: flex;
}
.sweet-modal-tab > div {
  width: 100%;
}
.sweet-modal {
  max-height: 90% !important;
  overflow: hidden !important;
}

.sweet-content {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.sweet-modal .sweet-content {
  padding-top: 0 !important;
}

.sweet-modal-overlay {
  background: rgba(255, 255, 255, 0.3) !important;
}
.sweet-content-content {
  display: flex !important;
}
</style>
