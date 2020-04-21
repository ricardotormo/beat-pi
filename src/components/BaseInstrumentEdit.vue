<template>
  <fragment>
    <BaseModal :isActive="isActive" @onModalClose="isActive=false">
      <InstrumentList slot="instrumentList" />
      <BaseEqualizer slot="equalizer" />
    </BaseModal>
  </fragment>
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