<template>
  <div class="pan__container">
    <div class="pan__container__slider"></div>
    <div class="pan__slider">
      <p class="pan__name">Pan</p>

      <RangeSlider class="slider" min="-1" max="1" step="1" v-model="sample.pan" />
      <p class="slider__value">Value: {{ sample.pan }}</p>
    </div>
  </div>
</template>
<script>
import RangeSlider from "vue-range-slider";
import "vue-range-slider/dist/vue-range-slider.css";
import { mapActions } from "vuex";

export default {
  props: {
    sample: {
      type: Object
    }
  },
  components: {
    RangeSlider
  },
  data() {
    return {
      sliderValue: 0
    };
  },
  methods: {
    ...mapActions(["editPan"])
  },
  watch: {
    "sample.pan"(newValue) {
      this.editPan({ name: this.sample.name, value: newValue });
    }
  }
};
</script>
<style lang="scss">
.pan__container {
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eaeaea;
  line-height: 0;
  padding: 40px 0;
  & .slider {
    padding: 0;
    & .range-slider-fill {
      background: #5a00aa !important;
    }
  }
  .pan__slider {
    width: 100%;
    padding: 0 65px;
  }
  .pan__name,
  .slider__value {
    margin-left: 0px;
  }
}
</style>