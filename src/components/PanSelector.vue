<template>
  <div class="pan__container">
    <div class="pan__container__slider"></div>
    <div class="pan__slider">
      <p class="pan__name">Pan</p>
      <RangeSlider class="slider" min="1" max="100" step="1" v-model="sliderValue" />
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
.pan__container {
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eaeaea;
  line-height: 0;
  padding-top: 10px;
  padding-bottom: 20px;
  & .slider {
    padding: 0;
    & .range-slider-fill {
      background: #5a00aa !important;
    }
  }
  .pan__slider {
    width: 100%;
    padding: 0 55px;
  }
  .pan__name,
  .slider__value {
    margin-left: 0px;
  }
}
</style>