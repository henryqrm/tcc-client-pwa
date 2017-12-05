<template>
    <f7-list media-list class="products">
      <f7-list-item 
      v-for="product in products"
      :key="product.name" 
      v-if="product.isActive"
      :title="product.name"
      :text="product.description"
      :after="'R$ ' + product.value"
      :link="`/product/${product.id}`"
      link-view="#main-view"
      link-close-panel
      >
        <div slot="media"><img class="media" :src="product.image" :alt="product.name"></div>
        <div slot="inner">
          <div class="row">
            <div class="col-50">
              <div class="rating">
                <span :class="{'is-active': rated(index,product.rated)}" v-for="index in [5, 4, 3, 2, 1]" :key="index">☆</span>
              </div>
            </div>
            <div class="col-5">
              <span class="total">{{product.selected || ''}}</span>
            </div>
            <div class="col-45">
              <a href="#" class="button" @click="add(product)">Adicionar</a>
            </div>
          </div>
        </div>
       </f7-list-item>
    </f7-list>
</f7-list>
</template>
<script>
export default {
  name: 'card-product',
  props: ['products'],
  methods: {
    rated(index, rated) {
      return index === Math.floor(rated);
    },
    add(product) {
      this.$f7Router.framework7.addNotification({
        message: `Pedido adicionado: ${product.name}`,
        hold: 3000,
      });
      /* eslint-disable no-param-reassign */
      product.selected += 1;
    },
    removeProduct(product) {
      this.socket_removeProduct(product).then(() => {
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
.rating {
  unicode-bidi: bidi-override;
  direction: rtl;
}

.rating > span {
  display: inline-block;
  position: relative;
  width: 0.9em;
}

.rating > .is-active:before,
.rating > .is-active ~ span:before{
  content: "\2605";
  position: absolute;
  color: gold;
}

.total{
  font-size: 12px;
  font-weight: 600;
  color: crimson;
}

.row {
  padding-top: 8px;
}

.button {
  font-size: 12px;
  line-height: 27px;
  height: 25px;
  padding: 0;
}

.media {
  height: 13vh;
  transform: translateY(5px);
}

.card-header-swaper {
  height: 40vw;
}

.card-header-pic .card-header {
  height: 40vw;
  background-size: cover;
  background-position: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
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
