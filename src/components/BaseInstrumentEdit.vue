<template>
  <div>
    <BaseModal>
      <template slot="instrumentList">
        <InstrumentList />
      </template>
      <template slot="equalizer">
        <BaseEqualizer />
      </template>
    </BaseModal>
  </div>
</template>
<script>
import BaseModal from "@/components/BaseModal.vue";
import BaseEqualizer from "@/components/BaseEqualizer.vue";
export default {
  components: {
    BaseModal,
    BaseEqualizer
  }
};
</script>
<style scoped>
</style>