<template>
  <fragment>
    <div class="type">
      <div class="trash" @click="removeInstrument(instrument.name)">
        <span>
          <i class="fi-trash"></i>
        </span>
      </div>
      <div class="name">
        <span class="instrument-cell">{{ instrument.name }}</span>
      </div>
    </div>
    <fragment>
      <div
        class="cell"
        @click="toggleBeat(instrument.name, i)"
        v-for="(beat, i) in instrument.beats"
        :key="i"
        :class="{ active: beat == 1 }"
      ></div>
    </fragment>
  </fragment>
</template>
<script>
export default {
  props: {
    instrument: {
      array: Number
    }
  },
  data() {
    return {};
  },
  methods: {
    toggleBeat(name, pos) {
      this.$emit("beatToParent", { name, pos });
    },
    removeInstrument(instrument) {
      this.$emit("removeToParent", { name: instrument });
    }
  }
};
</script>
<style lang="scss" scoped>
.type {
  display: flex;
  justify-content: center;
  align-content: center;
  & .name {
    width: 80%;
  }
}
.trash {
  height: 100%;
  box-shadow: 1px 0 0 rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  cursor: pointer;
  &:hover {
    span {
      background: rgba(255, 255, 255, 0.6);
    }
  }
  span {
    height: 20px;
    width: 20px;
    background: white;
    border-radius: 50%;
    text-align: center;
    color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.instrument-cell {
  text-align: center;
  max-width: 80%;
  margin: auto;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 0.7em;
}
</style>
