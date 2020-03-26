export default class DrumPad {
  constructor(mesure) {
    this.mesure = mesure; // 8n, 16n, 1m, 4m ...
    this.pad = {};
  }

  addRow(type) {
    this.pad[type] = Array.from({ length: this.mesure }, () => -1);
  }

  addBeat(type, pos) {
    this.pad[type][pos] = 1;
  }

  removeBeat(type, pos) {
    this.pad[type][pos] = -1;
  }
}
