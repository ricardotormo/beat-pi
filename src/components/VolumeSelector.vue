<template>
  <div class="volume__container">
    <div class="volume__container__slider">
      <div class="volume__slider">
        <i class="fi-volume-none"></i>
        <RangeSlider class="slider" min="1" max="500" step="1" v-model="sample.volume" />
        <i class="fi-volume"></i>
      </div>
    </div>
    <!-- <p class="slider__value">Value: {{sample.volume}}</p> -->
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
  methods: {
    ...mapActions(["setVolume"])
  },
  watch: {
    "sample.volume"(newValue) {
      this.setVolume({ name: this.sample.name, value: newValue });
    }
  }
};
</script>
<style lang="scss">
.volume__container {
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eaeaea;
  line-height: 0;
  padding: 10px 0 10px 0;
  .slider__value {
    padding: 0px 65px;
  }
  & .slider {
    padding: 0 15px;
    & .range-slider-fill {
      background: #5a00aa !important;
    }
  }
  .volume__value {
    width: 12%;
    color: #fff;
  }
  .volume__slider {
    display: flex;
    align-items: center;
    width: 87%;
    padding: 0 20px;
  }
  .int__name {
    margin-bottom: 10px;
  }
}
.volume__container__slider {
  display: flex;
  justify-content: center;
}
</style>