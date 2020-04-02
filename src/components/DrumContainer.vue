<template>
  <div class="general">
    <div class="controls">
      <div>
        <button class="btn" type="button" @click="reset" v-if="instruments.length">
          <i class="fi-refresh"></i> Reset
        </button>
      </div>

      <div>
        <button class="btn" type="button" @click="openSweet">
          <i class="fi-plus"></i> Add Instrument
        </button>
      </div>
    </div>
    <sweet-modal ref="modal" title="Select an Instrument">
      <template slot="box-action"></template>
      <SelectInstrument @emitAddInst="onEmitAddInst" />
    </sweet-modal>

    <div class="drumPad">
      <div class="drumkit-container">
        <div class="row">
          <div v-if="!instruments.length" class="empty-of-instruments">
            <span>Please add a new instrument</span>
          </div>
          <div v-else class="row beats">
            <Tempo />
            <template v-for="(instrument, i) in instruments">
              <DrumRow
                :key="i"
                :instrument="instrument"
                @removeToParent="onEmitRemoveInst"
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
import Tempo from "@/components/Tempo.vue";
import DrumRow from "@/components/DrumRow.vue";
import SelectInstrument from "@/components/SelectInstrument.vue";
import BeatPad from "../drum/BeatPad";
export default {
  name: "DrumContainer",
  components: {
    SelectInstrument,
    DrumRow,
    Tempo
  },
  data() {
    return {
      searchInstruments: "",
      isModalVisible: false,
      beatPad: new BeatPad(16),
      instruments: []
    };
  },
  methods: {
    closeSweet() {
      this.$refs.modal.close();
    },
    openSweet() {
      this.$refs.modal.open();
      document.querySelector("body").style = "";
    },
    reset() {
      this.instruments = this.beatPad.removeAllInstruments().getInstruments();
    },
    addInstrument(instrument) {
      this.instruments = this.beatPad
        .addInstrument(instrument)
        .getInstruments();
      this.closeSweet();
    },
    removeInstrument(instrument) {
      this.instruments = this.beatPad
        .removeInstrument(instrument)
        .getInstruments();
    },
    onEmitAddInst(instrument) {
      const { name } = instrument;
      this.addInstrument(name);
    },
    onEmitRemoveInst(instrument) {
      const { name } = instrument;
      this.removeInstrument(name);
    },
    onEmitBeat(instrument) {
      const { type, pos } = instrument;
      const beatValue = this.beatPad.instruments[type][pos];
      if (beatValue == 1) {
        this.instruments = this.beatPad.removeBeat(type, pos).getInstruments();
        return;
      }
      this.instruments = this.beatPad.addBeat(type, pos).getInstruments();
    }
  },
  watch: {
    instruments: function(val) {
      console.log(val);
    }
  }
};
</script>

<style lang="scss">
@import "../assets/css/style.css";

.drumPad {
  margin-top: 25px;
}
.empty-of-instruments {
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: center;
  background: #858585;
  height: 30vh;
  color: white;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.btn {
  background: white;
  border-radius: 0;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 150ms ease-in-out;
  height: 40px;
  font-size: 1em;
  border-radius: 2px;
  border: none;
  padding: 5px 25px;
  cursor: pointer;
  outline: none;
  width: 180px;
}
.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tempo {
  color: #fff;
}
</style>