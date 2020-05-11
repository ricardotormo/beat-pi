<template>
  <div class="reverb__container">
    <div class="reverb__slider">
      <p class="reverb__name">Reverb</p>
      <RangeSlider class="slider" min="1" max="100" step="1" v-model="sample.reverb" />
      <!-- <p class="slider__value">Value: {{ sample.reverb }}</p> -->
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
    ...mapActions(["setReverb"])
  },
  watch: {
    "sample.reverb"(newValue) {
      this.setReverb({ name: this.sample.name, value: newValue });
    }
  }
};
</script>
<style lang="scss">
.reverb__container {
  width: 100%;
  background: #fff;
  line-height: 0;
  padding: 30px 0 0 0;
  & .slider {
    padding: 0;
    & .range-slider-fill {
      background: #5a00aa !important;
    }
  }
  .reverb__slider {
    width: 100%;
    padding: 0 65px;
  }
  .reverb__name,
  .slider__value {
    margin-left: 0;
  }
}
</style>