<template>
  <fragment>
    <BaseModal
      :name="'edit'"
      :isOpen="action.edit.isCurrent"
      :title="'Edit sample: ' + action.edit.sampleName"
      @onModalClose="closeSampleModal('edit')"
    >
      <BaseEqualizer slot="equalizer" />
    </BaseModal>
  </fragment>
</template>
<script>
import BaseModal from "@/components/BaseModal.vue";
import BaseEqualizer from "@/components/BaseEqualizer.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    BaseModal,
    BaseEqualizer
  },
  computed: {
    ...mapGetters(["action"])
  },
  methods: {
    ...mapActions(["closeSampleModal"])
  }
};
</script>
