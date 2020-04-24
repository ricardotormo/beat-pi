<template>
  <fragment>
    <!-- //linea  aguja-->

    <div class="stepIndicator">
      <div class="stepIndicator--half"></div>
      <div class="stepIndicator--whole"></div>
    </div>

    <div class="tempo__container">
      <div class="tempo__value">Tempo: {{ sliderValue }} bpm</div>
      <div class="tempo__slider">
        <RangeSlider
          class="slider"
          min="60"
          max="240"
          step="10"
          v-model="sliderValue"
        />
      </div>
    </div>
  </fragment>
</template>
<script>
import RangeSlider from "vue-range-slider";
import "vue-range-slider/dist/vue-range-slider.css";
const socket = new WebSocket("ws://localhost:8999");

export default {
  components: {
    RangeSlider,
  },
  data() {
    return {
      sliderValue: 60,
    };
  },
  watch: {
    sliderValue: function(newVal) {
      const message = JSON.stringify({
        address: "instrument/set_bpm",
        name: "bpm",
        beats: [newVal],
      });
      socket.send(message);
    },
  },
};
</script>
<style lang="scss">
.tempo__container {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #4d4d4d;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  & .slider {
    & .range-slider-fill {
      background: #fed134 !important;
    }
  }
  .tempo__value {
    width: 12%;
    color: #fff;
  }
  .tempo__slider {
    width: 87%;
    padding: 0 20px;
  }
}
</style>
