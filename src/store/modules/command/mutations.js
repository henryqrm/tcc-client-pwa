export const SELECT_TABLE = 'SELECT_TABLE';
export const CLOSE = 'CLOSE';
export const ADD_ORDER = 'ADD_ORDER';
export const REMOVE_ORDER = 'REMOVE_ORDER';
export const PAYMENT = 'PAYMENT';


export default {
  [SELECT_TABLE](state, idTable) {
    /* eslint-disable */
    state[0].id = idTable;
  },
};
