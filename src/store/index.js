import Vue from 'vue';
import Vuex from 'vuex';
import Product from './modules/product';
import Command from './modules/command';
import Table from './modules/table';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: 'asdasd',
  },
  modules: {
    Command,
    Product,
    Table,
  },
});
