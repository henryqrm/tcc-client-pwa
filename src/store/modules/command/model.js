export default class Command {
  constructor() {
    this.name = '';
    this.table = '';
    this.products = [];
    this.date = new Date();
    this.typePayment = '';
  }
  setName(name) {
    this.name = name;
  }
  setTable(table) {
    this.table = table._id;
  }
  setTypePayment(typePayment) {
    this.typePayment = typePayment;
  }
  addProduct(product) {
    this.products.push(product);
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
