export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(val) {
    if (typeof val !== 'string') {
      throw new Error('code must be a string');
    } else {
      this._code = val;
    }
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw new Error('name must be a string');
    } else {
      this._name = val;
    }
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
