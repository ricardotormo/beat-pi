<template>
  <div class="general">
    <button type="button" class="btn" @click="showModal">Open Modal!</button>
    <Modal v-show="isModalVisible" @close="closeModal" @childToParent="onEmitInst" />
    <div class="drumPad">
      <div class="drumkit-container">
        <div class="row">
          <div class="row beats">
            <template v-for="(instrument, i) in instruments">
              <DrumRow :key="i" :instrument="instrument" @beatToParent="onEmitBeat" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DrumRow from "@/components/DrumRow.vue";
import Modal from "@/components/Modal.vue";
import DrumPad from "../drum/DrumPad";
export default {
  name: "DrumContainer",
  components: {
    Modal,
    DrumRow
  },
  data() {
    return {
      isModalVisible: false,
      drumPad: new DrumPad(16),
      instruments: []
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    addInstrument(type) {
      this.instruments = this.drumPad.addInstrument(type).getPad();
    },
    removeInstrument(type) {
      this.instruments = this.drumPad.removeInstrument(type).getPad();
    },
    onEmitInst(inst) {
      this.addInstrument(inst.name);
    },
    onEmitBeat(inst) {
      if (this.drumPad.pad[inst.type][inst.pos] == 1) {
        this.instruments = this.drumPad
          .removeBeat(inst.type, inst.pos)
          .getPad();
      } else {
        this.instruments = this.drumPad.addBeat(inst.type, inst.pos).getPad();
      }
    }
  }
};
</script>
