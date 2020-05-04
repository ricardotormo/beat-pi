<template>
  <li @click="addSample(item.id)" class="sampleList__item">
    <span id="type-name-list-span">{{ item.name }}</span>
  </li>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    ...mapActions(["addSample"])
  }
};
</script>

<style lang="scss" scoped>
.sampleList__item {
  cursor: pointer;
  color: #000;
  list-style: none;
  font-weight: 100;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid rgba(33, 33, 33, 0.2);
  text-align: left;
  padding: 0 25px;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
}
</style>