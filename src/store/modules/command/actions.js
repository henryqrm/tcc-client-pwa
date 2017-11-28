import {
  OPEN_COMMAND,
  CLOSE_COMMAND,
  PAYMENT_COMMAND,
  REQUEST_WAITER,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
} from './mutations';

export default {
  closeCommend(context) {
    context.commit(CLOSE_COMMAND);
  },
  openCommand(context, command) {
    if (window) {
      window.localStorage.setItem('CommandID', command._id);
    }
    return context.commit(OPEN_COMMAND, command);
  },
  paymentCommand(context, typePayment) {
    context.commit(PAYMENT_COMMAND, typePayment);
  },
  requestWaiter(context) {
    context.commit(REQUEST_WAITER);
  },
  addProduct(context, payload) {
    context.commit(ADD_PRODUCT, payload);
  },
  removeProduct(context, payload) {
    context.commit(REMOVE_PRODUCT, payload);
  },
};
