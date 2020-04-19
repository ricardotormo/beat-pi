<template>
  <li @click="addSample(item.name)" class="typeNames">
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
</style>