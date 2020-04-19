<template>
  <fragment v-if="sample">
    <input class="search-inst-input" type="text" v-model="search" placeholder="Search Instrument" />
    <ul class="type-name-list">
      <fragment v-for="(item, i) in sample.items" :key="i">
        <InstrumentListNameItem :item="item" />
      </fragment>
    </ul>
  </fragment>
</template>

<script>
import InstrumentListNameItem from "./InstrumentListNameItem";
export default {
  props: {
    sample: {
      type: Object
    }
  },
  components: {
    InstrumentListNameItem
  },
  data() {
    return {
      search: ""
    };
  }
};
</script>

<style lang="scss" scoped>
</style>