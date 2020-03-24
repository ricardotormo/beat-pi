<template>
  <div class="general">
    <ul>
      <li v-for="(drum, i) in drumList" :key="i">{{ drum }}</li>
    </ul>
  </div>
</template>
<script>
import drumList from "../drum/drum-list";
export default {
  name: "General",
  data() {
    return {
      drumList: Object.values(drumList)
    };
  }
};
</script>
<style lang="sass" scoped>

</style>