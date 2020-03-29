<template>
  <div id="app">
    <DrumContainer />
  </div>
</template>

<script>
import DrumContainer from "./components/DrumContainer.vue";

export default {
  name: "App",
  components: {
    DrumContainer
  },
  data() {
    return {
      isModalVisible: false
    };
  }
};
</script>

<style lang="scss">
</style>
