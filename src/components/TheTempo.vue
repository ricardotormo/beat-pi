<template>
  <fragment>
    <div class="tempo__container">
      <div class="tempo__value">Tempo: {{ sliderValue }} bpm</div>
      <div class="tempo__slider">
        <RangeSlider class="slider" min="60" max="240" step="10" v-model="sliderValue" />
      </div>
    </div>
  </fragment>
</template>
<script>
import RangeSlider from "vue-range-slider";
import "vue-range-slider/dist/vue-range-slider.css";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    RangeSlider
  },
  data() {
    return {
      sliderValue: 0
    };
  },
  computed: {
    ...mapGetters(["action"])
  },
  methods: {
    ...mapActions(["setBpm"])
  },
  watch: {
    sliderValue(newValue) {
      this.setBpm(newValue);
    }
  }
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
