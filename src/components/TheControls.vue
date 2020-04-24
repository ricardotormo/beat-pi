<template>
  <div class="btn__container">
    <BaseButton class="btn__button btn__button--reset">
      <span slot="title"><i class="fi-refresh"></i> Reset</span>
    </BaseButton>
    <BaseButton class="btn__button btn__button--add">
      <span slot="title"> <i class="fi-plus"></i> Add Instrument</span>
    </BaseButton>
  </div>
</template>
<script>
import BaseButton from "./BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
};
</script>
<style lang="scss">
.btn__container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
