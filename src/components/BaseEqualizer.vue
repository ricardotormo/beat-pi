<template>
  <div v-if="currentSample">
    <VolumeSelector :sample="currentSample" />
    <div class="equalizer__container">
      <PanSelector :sample="currentSample" />
      <ReverbSelector :sample="currentSample" />
    </div>
  </div>
</template>
<script>
import VolumeSelector from "@/components/VolumeSelector.vue";
import PanSelector from "@/components/PanSelector.vue";
import ReverbSelector from "@/components/ReverbSelector.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    VolumeSelector,
    PanSelector,
    ReverbSelector
  },
  computed: {
    ...mapGetters(["currentSample", "userSamples"])
  }
};
</script>
<style lang="scss">
.equalizer__container {
  border: 1px solid white;
}
</style>