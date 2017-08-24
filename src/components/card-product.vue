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
      <f7-button class="col-40" color="red" @click="removeProduct(item)" v-if="command.numberOfProduct !== 0">remover</f7-button>
      <div class="col-15">
        <f7-chip v-if="command.numberOfProduct !== 0" :text="command.numberOfProduct" bg="green" color="white"></f7-chip>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'card-product',
  props: ['item'],
  data() {
    return {
      command: {
        numberOfProduct: 0,
      },
    };
  },
  methods: {
    ...mapActions('Command', ['socket_addProduct', 'socket_removeProduct']),
    addProduct(item) {
      this.command.numberOfProduct += 1;
      this.$f7Router.framework7.addNotification({
        message: `Pedido adicionado: ${item.name}`,
        hold: 3000,
      });
      this.socket_addProduct(item);
    },
    removeProduct(item) {
      this.socket_removeProduct(item)
        .then(() => {
          this.command.numberOfProduct -= 1;
          this.$f7Router.framework7.addNotification({
            message: `Pedido removido: ${item.name}`,
            hold: 3000,
          });
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
