<template>
  <div class="btn__container">
    <BaseButton @onButtonAction="removeAllSamples" class="btn__button btn__button--reset">
      <span slot="title">
        <i class="fi-refresh"></i> Reset
      </span>
    </BaseButton>
    <BaseButton
      @onButtonAction="openSampleModal({action: 'add', sampleName:''})"
      class="btn__button btn__button--add"
    >
      <span slot="title">
        <i class="fi-plus"></i> Add a sample
      </span>
    </BaseButton>
  </div>
</template>
<script>
import BaseButton from "./BaseButton.vue";
import { mapActions } from "vuex";

export default {
  components: {
    BaseButton
  },
  methods: {
    ...mapActions(["removeAllSamples", "openSampleModal"])
  }
};
</script>
<style lang="scss">
.btn__container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}
</style>
