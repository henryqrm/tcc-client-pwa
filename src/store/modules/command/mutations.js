import { merge } from 'lodash';

export const OPEN_COMMAND = 'OPEN_COMMAND';
export const CLOSE_COMMAND = 'CLOSE_COMMAND';
export const PAYMENT_COMMAND = 'PAYMENT_COMMAND';
export const REQUEST_WAITER = 'REQUEST_WAITER';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export default {
  [OPEN_COMMAND](state, command) {
    merge(state, command);
  },
  // [CLOSE_COMMAND](state, ) { },
  // [PAYMENT_COMMAND](state, ) { },
  // [REQUEST_WAITER](state, ) { },
  [ADD_PRODUCT](state, product) {
    state.products.push(product);
  },
  [REMOVE_PRODUCT](state, product) {
    const indexOf = state.products.indexOf(product);
    if (indexOf > -1) {
      state.splice(indexOf, 1);
    }
  },
};
