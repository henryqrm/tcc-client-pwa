import { merge } from 'lodash';

export const SOCKET_OPEN_COMMAND = 'SOCKET_OPEN_COMMAND';
export const SOCKET_CLOSE_COMMAND = 'SOCKET_CLOSE_COMMAND';
export const SOCKET_PAYMENT_COMMAND = 'SOCKET_PAYMENT_COMMAND';
export const SOCKET_REQUEST_WAITER = 'SOCKET_REQUEST_WAITER';
export const SOCKET_ADD_PRODUCT = 'SOCKET_ADD_PRODUCT';
export const SOCKET_REMOVE_PRODUCT = 'SOCKET_REMOVE_PRODUCT';

export default {
  [SOCKET_OPEN_COMMAND](state, command) {
    merge(state, command);
  },
  // [SOCKET_CLOSE_COMMAND](state, ) { },
  // [SOCKET_PAYMENT_COMMAND](state, ) { },
  // [SOCKET_REQUEST_WAITER](state, ) { },
  [SOCKET_ADD_PRODUCT](state, product) {
    state.products.push(product);
  },
  [SOCKET_REMOVE_PRODUCT](state, product) {
    const indexOf = state.products.indexOf(product);
    if (indexOf > -1) {
      state.splice(indexOf, 1);
    }
  },
};
