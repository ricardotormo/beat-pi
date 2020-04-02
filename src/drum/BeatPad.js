export default class BeatPad {
  constructor(mesure) {
    this.mesure = mesure; // 8n, 16n, 1m, 4m ...
    this.instruments = {};
  }

  addInstrument(type) {
    this.instruments[type] = Array.from({ length: this.mesure }, () => -1);
    return this;
  }

  removeInstrument(type) {
    delete this.instruments[type];
    return this;
  }

  addBeat(type, pos) {
    this.instruments[type][pos] = 1;
    return this;
  }

  removeBeat(type, pos) {
    this.instruments[type][pos] = -1;
    return this;
  }

  removeAllInstruments() {
    this.instruments = {};
    return this;
  }

  getInstruments() {
    return Object.keys(this.instruments).map(type => {
      return { type: type, beats: this.instruments[type] };
    });
  }
}
