<template>
  <div>
    <button @click="addBeat({name: 'tuba', pos: 3})">addBeat</button>
    <button @click="removeBeat({name: 'tuba', pos: 3})">removeBeat</button>
    <button @click="addInstrument('tuba')">addInst</button>
    <button @click="removeInstrument('tuba')">remInst</button>
    {{instruments}}
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions([
      "addBeat",
      "removeBeat",
      "addInstrument",
      "removeInstrument"
    ])
  },
  computed: {
    ...mapGetters(["instruments"])
  }
};
</script>
