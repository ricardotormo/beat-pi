<template>
  <fragment>
    <BaseModal
      :name="'edit'"
      :isOpen="action.edit.isCurrent"
      :title="'Edit sample: ' + action.edit.name"
      @onModalClose="closeSampleModal('edit')"
    >
      <InstrumentList slot="builtInSamples" />
      <BaseEqualizer slot="equalizer" />
    </BaseModal>
  </fragment>
</template>
<script>
import BaseModal from "@/components/BaseModal.vue";
import BaseEqualizer from "@/components/BaseEqualizer.vue";
import InstrumentList from "@/components/InstrumentList.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    BaseModal,
    BaseEqualizer,
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
