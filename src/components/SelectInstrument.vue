<template>
  <fragment>
    <ul class="instruments-type">
      <li
        v-for="(instrument, type) in instruments"
        :key="type"
        class="instrument"
        @click="showInstList(type)"
      >{{ type }}</li>
    </ul>
    <div class="instrument-name">
      <ul class="type-name-list">
        <li v-for="(active, i) in activeTypeEls" :key="i" class="typeNames">
          <span @click="addInst(active.name)">{{ active.name }}</span>
        </li>
      </ul>
    </div>
  </fragment>
</template>
<script>
import drumList from "../drum/drum-list";
export default {
  data() {
    return {
      instruments: drumList,
      activeTypeEls: null,
      activeType: null
    };
  },
  methods: {
    showInstList(type) {
      this.activeType = type;
      this.activeTypeEls = this.instruments[type];
    },
    addInst(name) {
      this.$emit("childToParent", { name, type: this.activeType });
    }
  }
};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}

.sweet-content-content {
  display: flex !important;
  border-top: 1px solid #ccc !important;
}

.instruments-type {
  width: 30%;
  box-shadow: 1px 0 #ccc;
  padding: 0;
  margin: 0;
  list-style: none;
  margin: 0;
  .instrument {
    height: 60px;
    box-shadow: 0 1px #ccc;
    display: flex;
    align-items: center;
    padding: 15px;
  }
}
</style>
