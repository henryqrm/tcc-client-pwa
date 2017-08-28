import {
  SOCKET_OPEN_COMMAND,
  SOCKET_CLOSE_COMMAND,
  SOCKET_PAYMENT_COMMAND,
  SOCKET_REQUEST_WAITER,
  SOCKET_ADD_PRODUCT,
  SOCKET_REMOVE_PRODUCT,
} from './mutations';

export default {
  socket_closeCommend(context) {
    context.commit(SOCKET_CLOSE_COMMAND);
  },
  socket_openCommand(context, command) {
    return context.commit(SOCKET_OPEN_COMMAND, command);
  },
  socket_paymentCommand(context, typePayment) {
    context.commit(SOCKET_PAYMENT_COMMAND, typePayment);
  },
  socket_requestWaiter(context) {
    context.commit(SOCKET_REQUEST_WAITER);
  },
  socket_addProduct(context, payload) {
    context.commit(SOCKET_ADD_PRODUCT, payload);
  },
  socket_removeProduct(context, payload) {
    context.commit(SOCKET_REMOVE_PRODUCT, payload);
  },
};
