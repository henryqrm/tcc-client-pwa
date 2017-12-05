<template>
  <f7-page without-subnavbar no-page-content class="cardapio">
      <f7-toolbar class="tabs" tabbar scrollable>
        <f7-link :tab-link="`#${category.name}`" v-for="(category, $index) in getProducts" :key="$index" active>{{ category.name }}</f7-link>
      </f7-toolbar>
      <f7-tabs swipeable>
      <f7-page-content :id="`${category.name}`" tab v-for="category in getProducts" :key="category.name">
          <section v-for="product in category.products" :key="product.name">
              <cardProduct :products="product.items"></cardProduct>
          </section>
      </f7-page-content>
      </f7-tabs>
      <f7-fab color="blue" @click="open">
        <i class="material-icons">done</i>
      </f7-fab>
  </f7-page>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import Popup from '@/components/popup';
import home from '@/pages/home';
import login from '@/pages/login';
import SelectTable from '@/pages/select-table';
import Product from '@/pages/product';
import cardProduct from '@/components/card-product';
import CommandService from '../services/command';

export default {
  components: {
    home,
    login,
    Popup,
    SelectTable,
    cardProduct,
    Product,
  },
  data() {
    return {
      categories: [],
      currentTabName: 'Hambúrguer',
      commandService: new CommandService(this.$resource),
    };
  },
  computed: {
    ...mapGetters('Product', ['getProducts']),
  },
  methods: {
    ...mapActions('Command', ['addProduct']),
    currentTab(category) {
      this.currentTabName = category.name;
    },
    open() {
      /* eslint-disable */
      for (const category in this.getProducts) {
        if (this.getProducts.hasOwnProperty(category)) {
          const products = this.getProducts[category].products;
          for (const key in products) {
            if (products.hasOwnProperty(key)) {
              const element = products[key].items;
              element.forEach(product => {
                if (product.selected !== 0) {
                  this.addProduct(product);
                }
              });
            }
          }
        }
      }
      this.$f7.mainView.router.load({
        url: '/command',
        pushState: true,
        animatePages: true,
      });
    },
  },
};
</script>
<style scoped>
section {
  margin-bottom: 10px;
}
.btn-success{
  width: 100%!important;
  background-color: seagreen;
}
.tabs{
  top: 0!important;
}
.size-20 {
  font-size: 20px;
  margin-right: 6px;
}
</style>
