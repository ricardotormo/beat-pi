<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <General />
    <TopBar />
    <InstRow />
    <Modal />
    <Button />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import General from "./components/General.vue";
import TopBar from "./components/TopBar.vue";
import InstRow from "./components/InstRow.vue";
import Modal from "./components/Modal.vue";
import Button from "./components/Button.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    General,
    TopBar,
    InstRow,
    Modal,
    Button
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
