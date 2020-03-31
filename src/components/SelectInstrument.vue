<template>
  <fragment>
    <ul class="instruments-type">
      <li
        v-for="(instrument, type) in instruments"
        :class="{ active: activeType == type && activeType !== null }"
        :key="type"
        class="instrument"
        @click="showInstList(type)"
      >
        <span class="icon-space">
          <i :class="`inst-${type}`"></i>
        </span>
        {{ type }}
      </li>
    </ul>
    <div class="instrument-name">
      <ul class="type-name-list">
        <li v-for="(active, i) in activeTypeEls" :key="i" class="typeNames">
          <span @click="addInst(active.name)" id="type-name-list-span">{{ active.name }}</span>
        </li>
      </ul>
    </div>
  </fragment>
</template>
<script>
import drumList from "../drum/drum-list";
export default {
  data() {
    return {
      instruments: drumList,
      activeTypeEls: null,
      activeType: null
    };
  },
  methods: {
    showInstList(type) {
      this.activeType = type;
      this.activeTypeEls = this.instruments[type];
    },
    addInst(name) {
      this.$emit("childToParent", { name, type: this.activeType });
    }
  }
};
</script>
<style lang="scss">
@import "../assets/css/flaticon.css";
* {
  box-sizing: border-box;
}

.sweet-modal {
  max-height: 90% !important;
  //overflow: hidden !important;
}

.sweet-content {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.sweet-content-content {
  display: flex !important;
  border-top: 1px solid #ccc !important;
}

.instruments-type {
  width: 40%;
  box-shadow: 1px 0 #d8d7d8;
  padding: 0;
  margin: 0;
  list-style: none;
  margin: 0;
  .active {
    background: #5a00aa;
    color: white;
    &.instrument {
      .icon-space {
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
.instrument-name {
  width: 60%;
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
