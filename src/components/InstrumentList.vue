<template>
  <fragment>
    <ul class="instrumentsList__type">
      <fragment v-for="(sample, i) in builtInSamples" :key="i">
        <InstrumentListTypeItem :sample="sample" />
      </fragment>
    </ul>
    <div class="instrumentsList__name">
      <fragment v-for="(sample, i) in builtInSamples" :key="i">
        <InstrumentListName :sample="sample" v-if="sample.isSelected" />
      </fragment>
    </div>
  </fragment>
</template>

<script>
import InstrumentListTypeItem from "./InstrumentListTypeItem";
import InstrumentListName from "./InstrumentListName";

import { mapGetters } from "vuex";
export default {
  components: {
    InstrumentListTypeItem,
    InstrumentListName
  },

  computed: {
    ...mapGetters(["builtInSamples"])
  }
};
</script>

<style lang="scss" scoped>
$color-active: #5a005a;

.instrumentsList_type {
  width: 40%;
  box-shadow: 1px 0 #d8d7d8;
  padding: 0;
  margin: 0;
  list-style: none;
  margin: 0;
  height: 80vh;
  overflow: auto;
  .active {
    background: #5a00aa;
    color: white;
    &.instrument {
      .iconContainer {
        background: #fff;
      }
    }
  }

  .instrument {
    height: 67px;
    box-shadow: 0 1px #ccc;
    display: flex;
    align-items: center;
    padding: 0;
    padding-left: 15px;
    cursor: pointer;

    i {
      color: #6020ae;
      position: relative;
      top: 4px;
      &:before {
        margin: 0;
      }
    }

    .icon-space {
      height: 40px;
      width: 40px;
      background-color: rgba(90, 0, 170, 0.1);
      margin-right: 12px;
      border-radius: 50%;
      min-width: 40px;
      text-align: center;
    }
  }
}
.instrumentsList__name {
  width: 60%;
  height: 80vh;
  overflow: auto;
  & .type-name-list {
    padding: 0;
    width: 100%;
    margin: 0;

    & li {
      cursor: pointer;
      color: #000;
      list-style: none;
      font-weight: 100;
      width: 100%;
      height: 40px;
      border-bottom: 1px solid rgba(33, 33, 33, 0.2);
      text-align: left;
      padding: 0 25px;
      display: flex;
      align-items: center;
      background-color: #f5f5f5;
    }
  }
}
</style>