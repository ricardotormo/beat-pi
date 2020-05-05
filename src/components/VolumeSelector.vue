<template>
  <div class="volume__container">
    <p class="int__name">Instrument name</p>
    <div class="volume__container__slider">
      <div class="volume__slider">
        <i class="fi-volume-none"></i>
        <RangeSlider class="slider" min="0" max="100" step="1" v-model="sliderValue" />
        <i class="fi-volume"></i>
      </div>
    </div>
  </div>
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
    ...mapActions(["editVolume"])
  },
  watch: {
    sliderValue(newValue) {
      this.editVolume({ name: this.action.edit.name, value: newValue });
    }
  }
};
</script>
<style lang="scss">
.volume__container {
  width: 100%;
  text-align: center;
  background: #fff;
  border-bottom: 1px solid #eaeaea;
  line-height: 0;
  padding-top: 10px;
  padding-bottom: 0;
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