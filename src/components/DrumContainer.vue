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

    <div class="drumPad">
      <div class="drumkit-container">
        <div class="row">
          <div v-if="!instruments.length" class="empty-of-instruments">
            <span>Please add a new instrument</span>
          </div>
          <div v-else class="row beats">
            <div class="beat-pos"></div>
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
import BeatPad from "../drum/BeatPad";
const bPad = new BeatPad(16);
const socket = new WebSocket("ws://localhost:8999");

export default {
  name: "DrumContainer",
  components: {
    DrumRow,
    Tempo
  },
  data() {
    return {
      searchInstruments: "",
      isModalVisible: false,
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
      this.instruments = bPad.removeAllInstruments().instruments;
    },
    addInstrument(instrument) {
      this.instruments = bPad.addInstrument(instrument).instruments;
      this.closeSweet();
    },
    removeInstrument(instrument) {
      this.instruments = bPad.removeInstrument(instrument).instruments;
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
      const { name, pos } = instrument;
      const beatValue = bPad._instruments[name][pos];
      const action = beatValue == 1 ? "removeBeat" : "addBeat";
      bPad[action](name, pos);
      this.instruments = bPad.instruments;
      const message = JSON.stringify({
        address: "instrument/set_beats",
        name,
        beats: bPad._instruments[name]
      });
      socket.send(message);
    }
  },
  watch: {
    instruments: function(newVal, oldVal) {
      if (newVal.length > oldVal.length) {
        const { name, beats } = getAddedInstrument(newVal);
        const message = JSON.stringify({
          address: "instrument/add_instrument",
          name,
          beats
        });
        socket.send(message);
      } else if (newVal.length < oldVal.length) {
        const { name, beats } = getRemovedInstrument(oldVal, newVal);
        const message = JSON.stringify({
          address: "instrument/remove_instrument",
          name,
          beats
        });
        socket.send(message);
      }
    }
  },
  mounted() {
    socket.onmessage = function(msg) {
      const beatPosEl = document.querySelector(".beat-pos");

      if (!beatPosEl) {
        return;
      }
      const val = eval(JSON.parse(msg.data).args[0].value);

      if (val[0] == 1) {
        beatPosEl.classList.remove("active-beat-whole");
        beatPosEl.classList.add("active-beat-half");
        document.querySelector(
          ".active-beat-half"
        ).style.animationDuration = `${val[1]}s`;
      }
      if (val[0] == 2) {
        beatPosEl.classList.remove("active-beat-half");
        beatPosEl.classList.add("active-beat-whole");
        document.querySelector(
          ".active-beat-whole"
        ).style.animationDuration = `${val[1]}s`;
      }
    };
  }
};

function getAddedInstrument(values) {
  return values[values.length - 1];
}

function getRemovedInstrument(oldValues, currentValues) {
  return oldValues.filter(oldVal => {
    return !currentValues.find(currVal => currVal.name == oldVal.name);
  })[0];
}
</script>

<style lang="scss">
//@import "../assets/css/style.css";
</style>