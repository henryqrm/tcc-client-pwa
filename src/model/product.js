class Product {
  constructor(name, isActive, images, description, value, category, amount, amountUnit, rated) {
    this.name = name;
    this.isActive = isActive;
    this.images = images;
    this.description = description;
    this.value = value;
    this.category = category;
    this.amount = amount;
    this.amountUnit = amountUnit;
    this.rated = rated;
  }
}

export default Object.freeze(Product);
