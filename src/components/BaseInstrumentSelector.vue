<template>
  <fragment>
    <BaseModal
      :name="'add'"
      :isOpen="action.add.isCurrent"
      :title="'Add a new sample'"
      @onModalClose="closeSampleModal('add')"
    >
      <InstrumentList slot="builtInSamples" />
    </BaseModal>
  </fragment>
</template>
<script>
import BaseModal from "@/components/BaseModal.vue";
import InstrumentList from "@/components/InstrumentList.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    BaseModal,
    InstrumentList
  },
  computed: {
    ...mapGetters(["action"])
  },
  methods: {
    ...mapActions(["closeSampleModal"])
  }
};
</script>
<style scoped></style>
