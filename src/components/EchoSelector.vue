<template>
  <div class="echo__container">
    <div class="echo__slider">
      <p class="echo__name">Echo</p>
      <RangeSlider class="slider" min="0" max="100" step="1" v-model="sliderValue" />
      <p class="slider__value">Value: {{ sliderValue }}</p>
    </div>
  </div>
</template>
<script>
import RangeSlider from "vue-range-slider";
import "vue-range-slider/dist/vue-range-slider.css";
export default {
  components: {
    RangeSlider
  },
  data() {
    return {
      sliderValue: 0
    };
  }
};
</script>
<style lang="scss">
.echo__container {
  width: 100%;
  background: #fff;
  line-height: 0;
  padding-top: 10px;
  padding-bottom: 0;
  & .slider {
    & .range-slider-fill {
      background: #5a00aa !important;
    }
  }
  .echo__slider {
    width: 100%;
    padding: 0 55px;
  }
  .echo__name,
  .slider__value {
    margin-left: 0;
  }
}
</style>