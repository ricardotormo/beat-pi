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
        {{ type | capitalize | toSpace }}
      </li>
    </ul>
    <div class="instrument-name">
      <input
        class="search-inst-input"
        v-if="activeTypeEls.length"
        type="text"
        v-model="searchInstruments"
        placeholder="Search Instrument"
      />
      <ul class="type-name-list">
        <li
          @click="addInst(active.name)"
          v-for="(active, i) in filterInstruments"
          :key="i"
          class="typeNames"
        >
          <span id="type-name-list-span">{{ active.name | capitalize | toSpace }}</span>
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
      activeTypeEls: drumList["drums"],
      activeType: "drums",
      searchInstruments: ""
    };
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    toSpace: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.replace(/_/g, " ");
    }
  },
  methods: {
    showInstList(type) {
      this.activeType = type;
      this.activeTypeEls = this.instruments[type];
      this.searchInstruments = "";
    },
    addInst(name) {
      this.$emit("emitAddInst", { name, type: this.activeType });
    }
  },
  computed: {
    filterInstruments: function() {
      if (!this.searchInstruments.length) {
        return this.activeTypeEls;
      }
      return this.activeTypeEls.filter(instrument => {
        return instrument.name
          .toLowerCase()
          .replace(/_/g, " ")
          .includes(this.searchInstruments.toLowerCase());
      });
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
  overflow: hidden !important;
}

.sweet-content {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.sweet-modal .sweet-content {
  padding-top: 0 !important;
}

.sweet-modal-overlay {
  background: rgba(255, 255, 255, 0.3) !important;
}
.sweet-content-content {
  display: flex !important;
}
.search-inst-input {
  margin: 20px auto;
  outline: none;
  height: 35px;
  width: 60%;
  border-radius: 3px;
  border: 1px solid #ccc;
  padding-left: 10px;
  display: block;
}

.instruments-type {
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
