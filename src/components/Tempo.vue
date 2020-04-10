<template>
  <div class="tempo-container">
    <div class="tempo-bpm">Tempo: {{sliderValue}} bpm</div>
    <div class="tempo-slider">
      <RangeSlider class="slider" min="60" max="240" step="10" v-model="sliderValue" />
    </div>
  </div>
</template>

<script>
import RangeSlider from "vue-range-slider";
import "vue-range-slider/dist/vue-range-slider.css";

const socket = new WebSocket("ws://localhost:8999");

export default {
  components: {
    RangeSlider
  },
  data() {
    return {
      sliderValue: 60
    };
  },
  watch: {
    sliderValue: function(newVal) {
      const message = JSON.stringify({
        address: "instrument/set_bpm",
        name: "bpm",
        beats: [newVal]
      });
      socket.send(message);
    }
  }
};
</script>

<style lang="scss">
.tempo-container {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #4d4d4d;
  .slider {
    .range-slider-fill {
      background: #fed134 !important;
    }
  }
  .tempo-bpm {
    width: 12%;
    color: #fff;
  }
  .tempo-slider {
    width: 87%;
    padding: 0 20px;
  }
}
</style>