import { GET_PRODUCT } from './mutations';

export default {
  addProduct(context, payload) {
    context.commit('ADD_PRODUCT', payload);
  },
  getProduct(context, idProduct) {
    return context.commit(GET_PRODUCT, idProduct);
  },
  // removeProduct(context, payload) {

  // },
  // changeProduct(context, payload) {

  // },
  // deleteProduct(context, payload) {

  // },
};
