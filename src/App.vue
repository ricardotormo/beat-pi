<template>
  <div id="app">
    <DrumContainer />
    <TopBar />
    <Button />
  </div>
</template>

<script>
import DrumContainer from "./components/DrumContainer.vue";
import Button from "./components/Button.vue";

export default {
  name: "App",
  components: {
    DrumContainer,
    Button
  },
  data() {
    return {
      isModalVisible: false
    };
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
