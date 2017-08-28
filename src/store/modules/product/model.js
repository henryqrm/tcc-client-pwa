export default class Product {
  constructor() {
    this.name = '';
    this.isActive = '';
    this.image = '';
    this.description = '';
    this.value = 0;
    this.amount = 0;
    this.amountUnit = '';
  }
  get total() {
    return this.value * this.amount;
  }
}
