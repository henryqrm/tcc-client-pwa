
export const GET_PRODUCT = 'GET_PRODUCT';

export default {
  [GET_PRODUCT](state, idProduct) {
    /* eslint-disable */
    let _product;
    for (const category in state) {
      if (state.hasOwnProperty(category)) {
        const products = state[category].products;
        for (const key in products) {
          if (products.hasOwnProperty(key)) {
            const element = products[key].items;
            element.forEach(product => {
              if (product.id === Number(idProduct)) {
                _product = product;
              }
            });
          }
        }
      }
    }
    return _product;
  },
};
