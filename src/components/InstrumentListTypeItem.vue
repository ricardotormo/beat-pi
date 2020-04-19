<template>
  <li
    :class="{ active: sample.isSelected}"
    @click="selectSampleType(sample.type)"
    class="sample__type"
  >
    <span class="iconContainer">
      <i :class="`inst-${sample.type}`"></i>
    </span>
    {{ sample.type }}
  </li>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    sample: {
      type: Object
    }
  },
  methods: {
    ...mapActions(["selectSampleType"])
  }
};
</script>

<style lang="scss" scoped>
.iconContainer {
  height: 40px;
  width: 40px;
  background-color: rgba(90, 0, 170, 0.1);
  margin-right: 12px;
  border-radius: 50%;
  min-width: 40px;
  text-align: center;
}
.active {
  background: #5a00aa;
  color: white;

  .iconContainer {
    background: #fff;
  }
}

.sample__type {
  height: 67px;
  box-shadow: 0 1px #ccc;
  display: flex;
  align-items: center;
  padding: 0;
  padding-left: 15px;
  cursor: pointer;

  i {
    color: #6020ae;
    position: relative;
    top: 4px;
    &:before {
      margin: 0;
    }
  }
}
</style>