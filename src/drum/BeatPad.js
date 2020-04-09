export default class BeatPad {
  constructor(mesure) {
    this.mesure = mesure; // 8n, 16n, 1m, 4m ...
    this._instruments = {};
  }

  addInstrument(name) {
    this._instruments[name] = Array.from({ length: this.mesure }, () => -1);
    return this;
  }

  removeInstrument(name) {
    delete this._instruments[name];
    return this;
  }

  addBeat(name, pos) {
    this._instruments[name][pos] = 1;
    return this;
  }

  removeBeat(name, pos) {
    this._instruments[name][pos] = -1;
    return this;
  }

  removeAllInstruments() {
    this._instruments = {};
    return this;
  }

  get instruments() {
    return Object.keys(this._instruments).map(name => {
      return { name, beats: this._instruments[name] };
    });
  }

  set instruments(instruments) {
    this._instruments = instruments;
  }
}