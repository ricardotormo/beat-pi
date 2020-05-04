<template>
  <div
    class="cell"
    @click="userSample.beats[pos] === -1 ? 
    addBeat({name: userSample.name, pos: pos}) : 
    removeBeat({name: userSample.name, pos: pos})"
    :class="{ active: userSample.beats[pos] == 1 }"
  ></div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    userSample: {
      type: Object
    },
    pos: {
      type: Number
    }
  },
  methods: {
    ...mapActions(["addBeat", "removeBeat"])
  }
};
</script>
<style lang="scss">
.cell {
  width: calc((100% - 12.5%) / 16);
  height: 70px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.9);
  cursor: pointer;
}
</style>
