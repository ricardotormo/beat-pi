<template>
  <fragment
    class="instrument"
    @click="showInstList(type)"
    :class="{ active: activeType == type && activeType !== null }"
    :key="type"
  >
    <span class="iconContainer">
      <i :class="`inst-${type}`"></i>
    </span>
    {{ type }}
  </fragment>
</template>

<script>
export default {
  showInstList(type) {
    this.activeType = type;
    this.activeTypeEls = this.instruments[type];
    this.searchInstruments = "";
  }
};
</script>

<style lang="scss" scoped>
</style>