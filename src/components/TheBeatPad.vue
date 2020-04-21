<template>
  <div class="beatPad">
    <div class="beatPad__container">
      <div class="row">
        <div class="row beatPad__content"></div>
      </div>
    </div>
  </div>
</template>
<script>
import TheTempo from "@/components/TheTempo.vue";
import BaseBeatRow from "@/components/BaseBeatRow.vue";

export default {
  components: {
    TheTempo,
    BaseBeatRow
  }
};
</script>
<style scoped>
</style>