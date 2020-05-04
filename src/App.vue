<template>
  <div id="app">
    <BaseInstrumentSelector />
    <BaseInstrumentEdit />
    <TheControls />
    <TheBeatPad />
  </div>
</template>

<script>
import BaseInstrumentSelector from "./components/BaseInstrumentSelector.vue";
import TheControls from "@/components/TheControls.vue";
import TheBeatPad from "@/components/TheBeatPad.vue";
import BaseInstrumentEdit from "@/components/BaseInstrumentEdit.vue";
export default {
  name: "App",
  components: {
    BaseInstrumentSelector,
    BaseInstrumentEdit,
    TheControls,
    TheBeatPad
  }
};
</script>

<style lang="scss">
@import "./assets/css/style.css";
@import "./assets/css/foundation-icons.css";
#app {
  margin: 5% auto 0 auto;
  max-width: 1200px;
}
</style>
