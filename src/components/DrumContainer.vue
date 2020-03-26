<template>
  <div class="general">
    <button type="button" class="btn" @click="showModal">
      Open Modal!
    </button>
    <Modal v-show="isModalVisible" @close="closeModal" />
  </div>
</template>
<script>
import Modal from "@/components/Modal.vue";
import drumList from "../drum/drum-list";
export default {
  name: "DrumContainer",
  components: {
    Modal
  },
  data() {
    return {
      drumList: Object.values(drumList),
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
};
</script>
<style lang="scss" scoped></style>
