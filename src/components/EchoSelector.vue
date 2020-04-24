<template>
  <div class="echo__container">
    <p class="echo__name">Echo</p>
    <div class="echo__slider">
      <RangeSlider
        class="slider"
        min="0"
        max="100"
        step="1"
        v-model="sliderValue"
      />
      <p class="slider__value">Value: {{ sliderValue }}</p>
    </div>
  </div>
</template>
<script>
import RangeSlider from "vue-range-slider";
import "vue-range-slider/dist/vue-range-slider.css";
export default {
  components: {
    RangeSlider,
  },
  data() {
    return {
      sliderValue: 0,
    };
  },
};
</script>
<style lang="scss">
.echo__container {
  width: 100%;
  background: #fff;
  line-height: 0;

  & .slider {
    & .range-slider-fill {
      background: #5a00aa !important;
    }
  }
  .echo__value {
    width: 12%;
    color: #fff;
  }
  .echo__slider {
    width: 87%;
    padding: 0 20px;
  }
  .echo__name,
  .slider__value {
    margin-left: 30px;
  }
}
</style>
