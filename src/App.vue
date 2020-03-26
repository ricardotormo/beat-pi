<template>
  <div id="app">
    <DrumContainer />
    <TopBar />
    <DrumRow />
    <Button />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import DrumContainer from "./components/DrumContainer.vue";
import TopBar from "./components/TopBar.vue";
import DrumRow from "./components/DrumRow.vue";
// import Modal from "./components/Modal.vue";
import Button from "./components/Button.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    DrumContainer,
    TopBar,
    DrumRow,
    // Modal,
    Button
  },
  data() {
    return {
      isModalVisible: false
    };
  }
  // methods: {
  //   showModal() {
  //     this.isModalVisible = true;
  //   },
  //   closeModal() {
  //     this.isModalVisible = false;
  //   }
  // }
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
