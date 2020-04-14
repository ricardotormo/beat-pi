<template>
  <div id="app">
    <BaseInstrumentSelector />
    <VuexTest />
    <DrumContainer />
  </div>
</template>

<script>
import VuexTest from "./components/VuexTest.vue";
import DrumContainer from "./components/DrumContainer.vue";
import BaseInstrumentSelector from "./components/BaseInstrumentSelector.vue";
export default {
  name: "App",
  components: {
    BaseInstrumentSelector,
    DrumContainer,
    VuexTest
  },
  data() {
    return {
      isModalVisible: false
    };
  }
};
</script>

<style lang="scss">
@import "./assets/css/foundation-icons.css";
#app {
  margin: 5% auto 0 auto;
  max-width: 1200px;
}
</style>
