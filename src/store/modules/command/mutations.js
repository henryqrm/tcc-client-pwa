import Command from './model';

export const SOCKET_OPEN_COMMAND = 'SOCKET_OPEN_COMMAND';
export const SOCKET_CLOSE_COMMAND = 'SOCKET_CLOSE_COMMAND';
export const SOCKET_PAYMENT_COMMAND = 'SOCKET_PAYMENT_COMMAND';
export const SOCKET_REQUEST_WAITER = 'SOCKET_REQUEST_WAITER';
export const SOCKET_ADD_PRODUCT = 'SOCKET_ADD_PRODUCT';
export const SOCKET_REMOVE_PRODUCT = 'SOCKET_REMOVE_PRODUCT';

export default {
  [SOCKET_OPEN_COMMAND](state, table) {
    /* eslint-disable */
    const newCommand = new Command(table);
    state.push(newCommand);
  },
  [SOCKET_CLOSE_COMMAND](state, ) {
    state[index]
  },
  [SOCKET_PAYMENT_COMMAND](state, ) {
    state[index]
  },
  [SOCKET_REQUEST_WAITER](state, ) {
    state[index]
  },
  [SOCKET_ADD_PRODUCT](state, ) {
    state[index]
  },
  [SOCKET_REMOVE_PRODUCT](state, ) {
    state[index]
  },
};
