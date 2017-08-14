import ProductModel from '@/model/product';

export default class Product {
  constructor() {
    this.Product = new ProductModel();
    this.resource = this.$resource('product/{id}/{prop}');
  }

  index() {
    return this.resource
      .query()
      .then(res => res.json(), () => {
        throw new Error('Erro ao listar produtos.');
      });
  }

  show(id) {
    return this.resource
      .get({ id })
      .then(res => res.json());
  }

  create(product) {
    return this.resource
      .save(product)
      .then(res => res.json(), () => {
        throw new Error('Erro ao salvar produto');
      });
  }

  update(product) {
    return this.resource
      .update({ id: product.id }, product)
      .then(res => res.json(), () => {
        throw new Error('Erro ao salvar produto');
      });
  }

  updateRated(id, value) {
    return this.resource
      .update({
        id,
        prop: 'rated',
      }, value);
  }

  destroy(id) {
    return this.resource
      .delete({ id })
      .then(res => res.json(), () => {
        throw new Error('Não foi possivel deletar este produto');
      });
  }
}
