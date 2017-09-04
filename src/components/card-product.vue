<template>
  <div class="card card-header-pic">
    <div :style="{backgroundImage: `url('${item.image}')`}" valign="bottom" class="card-header color-white no-border">
      {{item.name}}
      <f7-button raised color="white" bg="green" @click="addProduct(item)">
        <f7-icon icon="icon-plus"></f7-icon>
      </f7-button>
      <!-- <f7-fab class="btn-add-product" @click="addProduct(item)">
                                            <f7-icon icon="icon-plus"></f7-icon>
                                          </f7-fab> -->
    </div>
    <div class="card-content">
      <div class="card-content-inner">
        <div>
          <p class="row color-gray">
            <span class="col-40">{{ item.amount }} {{item.amountUnit}}</span>
            <span class="col-30 text-right">R$ {{ item.value }}</span>
          </p>
        </div>
        <p>{{ item.description }}</p>
      </div>
    </div>
    <div class="card-footer row">
      <div class="col-20">
        <i class="f7-icons size-20 color-yellow">star_fill</i>{{ item.rated }}
      </div>
      <f7-button class="col-40" color="red" @click="removeProduct(item)" v-if="countOfProduts !== 0">remover</f7-button>
      <div class="col-15">
        <f7-chip v-if="countOfProduts !== 0" :text="countOfProduts" bg="green" color="white"></f7-chip>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import CommandService from './../services/command';

export default {
  name: 'card-product',
  props: ['item'],
  computed: {
    ...mapGetters('Command', ['commandId']),
  },
  data() {
    return {
      commandService: new CommandService(this.$resource),
      countOfProduts: 0,
    };
  },
  methods: {
    ...mapActions('Command', ['socket_addProduct', 'socket_removeProduct']),
    addProduct(product) {
      this.commandService.updateCommand(this.commandId, product)
        .then(() => {
          this.$f7Router.framework7.addNotification({
            message: `Pedido adicionado: ${product.name}`,
            hold: 3000,
          });
          this.socket_addProduct(product);
          this.countOfProduts += 1;
        });
    },
    removeProduct(product) {
      this.socket_removeProduct(product)
        .then(() => {
          this.$f7Router.framework7.addNotification({
            message: `Pedido removido: ${product.name}`,
            hold: 3000,
          });
          this.countOfProduts -= 1;
        });
    },
  },
};
</script>
<style scoped>
.card-header-swaper {
  height: 40vw;
}

.card-header-pic .card-header {
  height: 40vw;
  background-size: cover;
  background-position: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, .8);
  color: #fff;
  font-size: 1.8em;
}

.text-right {
  text-align: right;
}

.btn-add-product {
  bottom: -15px;
}
</style>
