<template>
  <div>
    <VolumeSelector />
    <div class="equalizer__container">
      <PanSelector />
      <EchoSelector />
    </div>
  </div>
</template>
<script>
import VolumeSelector from "@/components/VolumeSelector.vue";
import PanSelector from "@/components/PanSelector.vue";
import EchoSelector from "@/components/EchoSelector.vue";
export default {
  components: {
    VolumeSelector,
    PanSelector,
    EchoSelector
  }
};
</script>
<style lang="scss">
.equalizer__container {
  border: 1px solid white;
}
</style>