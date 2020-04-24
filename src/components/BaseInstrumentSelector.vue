<template>
  <fragment>
    <button @click="isActive = true">Set active</button>
    <BaseModal :isActive="isActive" @onModalClose="isActive = false">
      <InstrumentList slot="instrumentList" />
      <BaseEqualizer slot="equalizer" />
    </BaseModal>
  </fragment>
</template>
<script>
//import InstrumentList from "@/components/InstrumentList.vue";
import BaseModal from "@/components/BaseModal.vue";
import InstrumentList from "@/components/InstrumentList.vue";
import BaseEqualizer from "@/components/BaseEqualizer.vue";
export default {
  components: {
    BaseModal,
    InstrumentList,
    BaseEqualizer,
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>
<style scoped></style>
