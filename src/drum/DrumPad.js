export default class DrumPad {
  constructor(mesure) {
    this.mesure = mesure; // 8n, 16n, 1m, 4m ...
    this.pad = {};
  }

  addInstrument(type) {
    this.pad[type] = Array.from({ length: this.mesure }, () => -1);
    return this;
  }

  removeInstrument(type) {
    delete this.pad[type];
    return this;
  }

  addBeat(type, pos) {
    this.pad[type][pos] = 1;
    return this;
  }

  removeBeat(type, pos) {
    this.pad[type][pos] = -1;
    return this;
  }

  getPad() {
    const self = this;
    return Object.keys(self.pad).map(type => {
      return { type: type, beats: self.pad[type] };
    });
  }
}
