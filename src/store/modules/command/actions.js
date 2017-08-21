import { isNumber } from 'lodash';

import {
  SELECT_TABLE,
} from './mutations';

export default {
  selectTable(context, idTable) {
    if (!isNumber(idTable)) {
      throw new Error('ID inválido');
    }

    context.commit(SELECT_TABLE, idTable);
  },
  // close(context, payload) {
  //   console.log(payload);
  // },
  // addOrder(context, payload) {
  //   console.log(payload);
  // },
  // removeOrder(context, payload) {
  //   console.log(payload);
  // },
  // payment(context, payload) {
  //   console.log(payload);
  // },
};
