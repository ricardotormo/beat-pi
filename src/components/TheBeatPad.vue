<template>
  <div class="beatPad">
    <div class="userSamples_empty" v-if="!userSamples.length">
      <span>Please add a new sample</span>
    </div>
    <div v-else>
      <TheTempo />
      <div v-for="(userSample, i) in userSamples" :key="i">
        <BaseBeatRow :userSample="userSample" />
      </div>
    </div>
  </div>
</template>
<script>
import TheTempo from "@/components/TheTempo.vue";
import BaseBeatRow from "@/components/BaseBeatRow.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    TheTempo,
    BaseBeatRow
  },
  computed: {
    ...mapGetters(["userSamples"])
  }
};
</script>
<style scoped>
.userSamples_empty {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #858585;
  height: 30vh;
  color: white;
}
</style>
