<template>
  <div>
    <button @click="isActive=true">Set active</button>
    <BaseModal :isActive="isActive" @onModalClose="isActive=false">
      <div slot="instrumentList">
        <InstrumentList />
      </div>
      <!--<div slot="equalizer">adios</div>-->
    </BaseModal>
  </div>
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