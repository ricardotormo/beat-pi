<template>
  <div class="beat__row__container">
    <SampleEdit :userSample="userSample" />
    <template v-for="(beat, i) in userSample.beats">
      <BeatSelector :userSample="userSample" :pos="i" :key="i" />
    </template>
  </div>
</template>
<script>
import SampleEdit from "@/components/SampleEdit.vue";
import BeatSelector from "@/components/BeatSelector.vue";
export default {
  components: {
    SampleEdit,
    BeatSelector
  },
  props: {
    userSample: {
      type: Object
    }
  }
};
</script>
<style scoped>
.beat__row__container {
  /* display: flex; */
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background: #555;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  -webkit-box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  font-size: 1em;
}
</style>
