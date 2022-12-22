import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(val) {
    if (typeof val !== 'number') {
      throw new Error('amount must be a number');
    } else {
      this._amount = val;
    }
  }

  set currency(val) {
    if (!(val instanceof Currency)) {
      throw new Error('currency must be Currency');
    } else {
      this._currency = val;
    }
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
