<template>
  <fragment>
    <button @click="isActive=true">Set active</button>
    <BaseModal :isActive="isActive" @onModalClose="isActive=false">
      <InstrumentList slot="instrumentList" />
      <!--<div slot="equalizer">adios</div>-->
    </BaseModal>
  </fragment>
</template>
<script>
//import InstrumentList from "@/components/InstrumentList.vue";
import BaseModal from "@/components/BaseModal.vue";
import InstrumentList from "@/components/InstrumentList.vue";
export default {
  components: {
    BaseModal,
    InstrumentList
  },
  data() {
    return {
      isActive: false
    };
  }
};
</script>
<style scoped>
</style>