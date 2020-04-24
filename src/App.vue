<template>
  <div id="app">
    <BaseInstrumentSelector />
    <DrumContainer />
    <TheControls />
    <!-- <BaseEqualizer /> -->
    <TheBeatPad />
  </div>
</template>

<script>
//import VuexTest from "./components/VuexTest.vue";
import DrumContainer from "./components/DrumContainer.vue";
import BaseInstrumentSelector from "./components/BaseInstrumentSelector.vue";
import TheControls from "@/components/TheControls.vue";
// import BaseEqualizer from "@/components/BaseEqualizer.vue";
import TheBeatPad from "@/components/TheBeatPad.vue";
export default {
  name: "App",
  components: {
    BaseInstrumentSelector,
    DrumContainer,
    TheControls,
    // BaseEqualizer,
    TheBeatPad,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
};
</script>

<style lang="scss">
@import "./assets/css/foundation-icons.css";
#app {
  margin: 5% auto 0 auto;
  max-width: 1200px;
}
</style>
