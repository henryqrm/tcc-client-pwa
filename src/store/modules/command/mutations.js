export const OPEN_COMMAND = 'OPEN_COMMAND';
export const CLOSE_COMMAND = 'CLOSE_COMMAND';
export const PAYMENT_COMMAND = 'PAYMENT_COMMAND';
export const REQUEST_WAITER = 'REQUEST_WAITER';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const ADD_TABLE = 'ADD_TABLE';
export const SUB = 'SUB';

function Command() {
  return {
    name: '',
    table: {},
    products: [],
    date: new Date(),
    typePayment: '',
    subTotal: 0,
    total: 0,
  };
}


export default {
  [OPEN_COMMAND](state) {
    state.push(new Command());
  },
  [SUB](state) {
    /* eslint-disable no-param-reassign */
    state[0].subTotal = 0;
    state[0].total = 0;
    state[0].products.forEach((element) => {
      if (element.selected !== 0) {
        element.totalValue = element.value * element.selected;
        state[0].subTotal += element.totalValue;
      }
    });
    state[0].total = state[0].subTotal;
  },
  [ADD_PRODUCT](state, product) {
    state[0].products.push(product);
    // state[0].subTotal += product.value;
    // state[0].total += product.value;
  },
  [ADD_TABLE](state, table) {
    /* eslint-disable no-param-reassign */
    state[0].table = table;
  },
  [REMOVE_PRODUCT](state, product) {
    const indexOf = state.products.indexOf(product);
    if (indexOf > -1) {
      state.splice(indexOf, 1);
      // state[0].subTotal -= product.value;
      // state[0].total -= product.value;
    }
  },
};
