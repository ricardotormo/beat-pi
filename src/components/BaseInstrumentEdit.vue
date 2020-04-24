<template>
  <fragment>
    <!-- <BaseModal :isActive="isActive" @onModalClose="isActive=false"> -->
    <BaseModal @onModalClose="isActive = false">
      <InstrumentList slot="instrumentList" />

      <BaseEqualizer slot="equalizer" />
    </BaseModal>
  </fragment>
</template>
<script>
import BaseModal from "@/components/BaseModal.vue";
import BaseEqualizer from "@/components/BaseEqualizer.vue";
import InstrumentList from "@/components/InstrumentList.vue";
export default {
  components: {
    BaseModal,
    BaseEqualizer,
    InstrumentList,
  },
};
</script>
<style scoped></style>
