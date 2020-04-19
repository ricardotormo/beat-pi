<template>
  <fragment v-if="sample">
    <input class="sampleList__search" type="text" v-model="search" placeholder="Search Instrument" />
    <ul class="sampleList__items">
      <fragment v-for="(item, i) in sample.items" :key="i">
        <InstrumentListNameItem v-if="isInSearch(item)" :item="item" />
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
  },
  methods: {
    isInSearch(item) {
      if (!this.search.length) {
        return true;
      }
      return item.name
        .toLowerCase()
        .replace(/_/g, " ")
        .includes(this.search.toLowerCase().replace(/_/g, " "));
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.sampleList__search {
  margin: 20px auto;
  outline: none;
  height: 35px;
  width: 60%;
  border-radius: 3px;
  border: 1px solid #ccc;
  padding-left: 10px;
  display: block;
}

.sampleList__items {
  padding: 0;
  width: 100%;
  margin: 0;
}
</style>