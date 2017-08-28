export default class Command {
  constructor(table) {
    this.name = '';
    this.table = table;
    this.products = [];
    this.date = new Date();
    this.typePayment = '';
  }
  get totalPaymentAmount() {
    let total = 0;
    for (let index = 0; index < this.products.length; index += 1) {
      const product = this.products[index];
      total += product.total;
    }
    return total;
  }
}
