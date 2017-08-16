import ProductModel from '@/model/product';

export const MOCK = [
  {
    name: 'Hambúrguer',
    description: 'Esta é uma descrição de Sanduíches'.toUpperCase(),
    products: [
      {
        name: 'Frios',
        description: 'Todos servidos com salada',
        items: [
          {
            name: 'Pepino',
            isActive: true,
            image: './static/img/background.jpg',
            description: 'pão de forma, pepino japonês, peito de peru e cream cheese',
            value: 8,
            amount: 1,
            amountUnit: 'Sanduíche',
            rated: 5,
          },
          {
            name: 'Pepino',
            isActive: true,
            image: './static/img/background.jpg',
            description: 'pão de forma, pepino japonês, peito de peru e cream cheese',
            value: 8,
            amount: 1,
            amountUnit: 'Sanduíche',
            rated: 5,
          },
        ],
      },
      {
        name: 'Quente',
        description: 'Todos servidos com salada',
        items: [
          {
            name: 'Pepino',
            isActive: true,
            image: './static/img/background.jpg',
            description: 'pão de forma, pepino japonês, peito de peru e cream cheese',
            value: 8,
            amount: 1,
            amountUnit: 'Sanduíche',
            rated: 5,
          },
          {
            name: 'Pepino',
            isActive: true,
            image: './static/img/background.jpg',
            description: 'pão de forma, pepino japonês, peito de peru e cream cheese',
            value: 8,
            amount: 1,
            amountUnit: 'Sanduíche',
            rated: 5,
          },
        ],
      },
    ],
  }, {
    name: 'Sanduíches',
    description: 'Esta é uma descrição de Sanduíches'.toUpperCase(),
    products: [
      {
        name: 'Frios',
        description: 'Todos servidos com salada',
        items: [
          {
            name: 'Pepino',
            isActive: true,
            image: './static/img/background.jpg',
            description: 'pão de forma, pepino japonês, peito de peru e cream cheese',
            value: 8,
            amount: 1,
            amountUnit: 'Sanduíche',
            rated: 5,
          },
          {
            name: 'Pepino',
            isActive: true,
            image: './static/img/background.jpg',
            description: 'pão de forma, pepino japonês, peito de peru e cream cheese',
            value: 8,
            amount: 1,
            amountUnit: 'Sanduíche',
            rated: 5,
          },
        ],
      },
      {
        name: 'Quente',
        description: 'Todos servidos com salada',
        items: [
          {
            name: 'Pepino',
            isActive: true,
            image: './static/img/background.jpg',
            description: 'pão de forma, pepino japonês, peito de peru e cream cheese',
            value: 8,
            amount: 1,
            amountUnit: 'Sanduíche',
            rated: 5,
          },
          {
            name: 'Pepino',
            isActive: true,
            image: './static/img/background.jpg',
            description: 'pão de forma, pepino japonês, peito de peru e cream cheese',
            value: 8,
            amount: 1,
            amountUnit: 'Sanduíche',
            rated: 5,
          },
        ],
      },
    ],
  },
];

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
