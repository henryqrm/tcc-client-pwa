<template>
  <f7-page>
    <h2>Meus pedidos</h2>
    <f7-list media-list class="list">
      <f7-list-item 
        v-for="product in command.products"
        :key="product.name"
        :title="product.name"
        :text="`R$ ${product.totalValue}`">
        <div slot="media">
          <img style="width: 48px" :src="product.image">
        </div>
        <div slot="after">
          <div class="action">
            <span>
              <f7-button icon-material="remove" @click="removeProduct(product)"></f7-button>
            </span>
            <span>{{ product.selected }}</span>
            <span>
              <f7-button icon-material="add" @click="addProduct(product)"></f7-button>
            </span>
          </div>
        </div>
      </f7-list-item>
    </f7-list>
    <f7-block>
      <div class="row">
        <div class="col-50">
          <span>Sub-total</span>
        </div>
        <div class="col-20">
          {{`R$ ${command.subTotal}`}}
        </div>
      </div>
    </f7-block>
    <f7-block inner>
      <div class="row" style="font-size: 16px; font-weight:600">
        <div class="col-50">
          <span>TOTAL</span>
        </div>
        <div class="col-20">
          {{`R$ ${command.subTotal}`}}
        </div>
      </div>
    </f7-block>
    <f7-toolbar bottom>
      <f7-button @click="open" style="width: 100%" raised big>Concluir Pedidos</f7-button>
    </f7-toolbar>
  </f7-page>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  mounted() {
    this.subTotal();
  },
  computed: {
    ...mapGetters('Command', ['command']),
  },
  methods: {
    ...mapActions('Command', ['subTotal']),
    removeProduct(product) {
      if (product.selected === 0) {
        return;
      }
      this.$f7Router.framework7.addNotification({
        message: `Pedido removido: ${product.name}`,
        hold: 1000,
      });
      /* eslint-disable no-param-reassign */
      product.selected -= 1;
      this.subTotal();
    },
    open() {
      this.$f7.mainView.router.load({
        url: '/timer',
        pushState: true,
        animatePages: true,
      });
    },
    addProduct(product) {
      this.$f7Router.framework7.addNotification({
        message: `Pedido adicionado: ${product.name}`,
        hold: 1000,
      });
      /* eslint-disable no-param-reassign */
      product.selected += 1;
      this.subTotal();
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  display: block;
}
.action {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
}
</style>
