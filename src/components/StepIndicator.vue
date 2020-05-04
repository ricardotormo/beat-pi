<template>
  <div
    v-bind:style="{ animationDuration: stepIndicator.duration+'s'}"
    :class="stepIndicator.step == 1 ? 'active--half' : 'active--whole'"
    class="stepIndicator"
  ></div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["stepIndicator"])
  }
};
</script>

<style lang="scss" scoped>
.stepIndicator {
  position: absolute;
  background: rgba(255, 255, 255, 0.6);
  margin-left: 12.5%;
  width: 2px;
  height: 100%;
  left: 0;
  &.active--half {
    animation-name: step-animation-half;
    animation-timing-function: linear;
  }

  &.active--whole {
    animation-name: step-animation-whole;
    animation-timing-function: linear;
  }
}

@keyframes step-animation-half {
  from {
    left: 0;
  }
  to {
    left: 43.75%;
  }
}

@keyframes step-animation-whole {
  from {
    left: 43.75%;
  }
  to {
    left: 87.5%;
  }
}
</style>
