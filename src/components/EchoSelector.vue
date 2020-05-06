<template>
  <div class="echo__container">
    <div class="echo__slider">
      <p class="echo__name">Echo</p>
      <RangeSlider class="slider" min="0" max="1" step="1" v-model="sample.echo" />
      <p class="slider__value">Value: {{ sample.echo }}</p>
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
    ...mapActions(["editEcho"])
  },
  watch: {
    "sample.echo"(newValue) {
      this.editEcho({ name: this.sample.name, value: newValue });
    }
  }
};
</script>
<style lang="scss">
.echo__container {
  width: 100%;
  background: #fff;
  line-height: 0;
  padding: 40px 0 20px 0;
  & .slider {
    padding: 0;
    & .range-slider-fill {
      background: #5a00aa !important;
    }
  }
  .echo__slider {
    width: 100%;
    padding: 0 65px;
  }
  .echo__name,
  .slider__value {
    margin-left: 0;
  }
}
</style>