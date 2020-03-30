<template>
  <div class="general">
    <button class="btn" type="button" @click="openSweet">open sweet</button>
    <sweet-modal ref="modal">
      <SelectInstrument />
    </sweet-modal>

    <div class="drumPad">
      <div class="drumkit-container">
        <div class="row">
          <div class="row beats">
            <template v-for="(instrument, i) in instruments">
              <DrumRow
                :key="i"
                :instrument="instrument"
                @beatToParent="onEmitBeat"
              />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DrumRow from "@/components/DrumRow.vue";
import SelectInstrument from "@/components/SelectInstrument.vue";
import BeatPad from "../drum/BeatPad";
export default {
  name: "DrumContainer",
  components: {
    SelectInstrument,
    DrumRow
  },
  data() {
    return {
      isModalVisible: false,
      beatPad: new BeatPad(16),
      instruments: []
    };
  },
  methods: {
    openSweet() {
      this.$refs.modal.open();
    },
    addInstrument(instrument) {
      this.instruments = this.beatPad
        .addInstrument(instrument)
        .getInstruments();
    },
    removeInstrument(instrument) {
      this.instruments = this.beatPad
        .removeInstrument(instrument)
        .getInstruments();
    },
    onEmitInst(instrument) {
      const { name } = instrument;
      this.addInstrument(name);
    },
    onEmitBeat(instrument) {
      const { type, pos } = instrument;
      if (this.beatPad.instruments[type][pos] == 1) {
        this.instruments = this.beatPad.removeBeat(type, pos).getInstruments();
      } else {
        this.instruments = this.beatPad.addBeat(type, pos).getInstruments();
      }
    }
  }
};
</script>
