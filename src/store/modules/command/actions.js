import {
  OPEN_COMMAND,
  CLOSE_COMMAND,
  ADD_TABLE,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
} from './mutations';

export default {
  closeCommend(context) {
    context.commit(CLOSE_COMMAND);
  },
  openCommand(context) {
    return context.commit(OPEN_COMMAND);
  },
  addTable(context, table) {
    context.commit(ADD_TABLE, table);
  },
  addProduct(context, payload) {
    context.commit(ADD_PRODUCT, payload);
  },
  removeProduct(context, payload) {
    context.commit(REMOVE_PRODUCT, payload);
  },
};
