<template>
    <f7-page>
      <f7-navbar :title="product.name" back-link="Back" sliding></f7-navbar>
      <img class="media" :src="product.image" :alt="product.name">
      <div class="heart">
        <f7-button @click="product.heart = false" v-if="product.heart" icon-f7="heart_fill" color="red" style="font-size: 35px;">
        </f7-button>
        <f7-button @click="product.heart = true" v-if="!product.heart" icon-f7="heart" color="red" style="font-size: 35px;">
        </f7-button>
      </div>
      <f7-block class="wrapper">
        <div class="row">
          <div class="col-50">Quantidade: </div>
          <div class="col-50 row">
            <span>
              <f7-button icon-material="remove" @click="removeProduct(product)"></f7-button>
            </span>
            <span style="align-self: center">{{ product.selected }}</span>
            <span>
              <f7-button icon-material="add" @click="addProduct(product)"></f7-button>
            </span>
          </div>
        </div>
        <div class="rated">
          <div class="rating">
            <span :class="{'is-active': rated(index, product.rated)}" v-for="index in [5, 4, 3, 2, 1]" :key="index">☆</span>
          </div>
        </div>
        <f7-buttons>
          <f7-button :raised="isSelectRaised" @click="isSelectRaised=true" tab-link="#tab-1" active>Detalhes</f7-button>
          <f7-button :raised="!isSelectRaised" @click="isSelectRaised=false" tab-link="#tab-2">Tabela nutricional</f7-button>
        </f7-buttons>
        <f7-tabs class="tab">
          <f7-tab id="tab-1" active>
            {{product.description}}
          </f7-tab>
          <f7-tab id="tab-2">
            <table>
              <thead>
                <tr>
                  <th>Desert</th>
                  <th>Calories</th>
                  <th>Fat</th>
                  <th>Carbs</th>
                  <th>Protein</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Frozen yogurt</td>
                  <td>159</td>
                  <td>6.0</td>
                  <td>24</td>
                  <td>4.0</td>
                </tr>
                <tr>
                  <td>Ice cream</td>
                  <td>237</td>
                  <td>9.0</td>
                  <td>37</td>
                  <td>4.4</td>
                </tr>
                <tr>
                  <td>Eclair</td>
                  <td>262</td>
                  <td>16.0</td>
                  <td>24</td>
                  <td>6.0</td>
                </tr>
                <tr>
                  <td>Cupcake</td>
                  <td>305</td>
                  <td>3.7</td>
                  <td>67</td>
                  <td>4.3</td>
                </tr>
              </tbody>
            </table>
          </f7-tab>
        </f7-tabs>
      </f7-block>
      <f7-fab color="blue" @click="back()">
        <f7-icon icon="icon-back"></f7-icon>
      </f7-fab>
    </f7-page>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      isSelectRaised: true,
      product: {},
      isFavorite: false,
    };
  },
  computed: {
    ...mapGetters('Product', ['getProduct']),
  },
  mounted() {
    this.product = this.getProduct(this.$route.params.id);
  },
  methods: {
    rated(index, rated) {
      return index === Math.floor(rated);
    },
    back() {
      this.$router.back();
    },
    removeProduct(product) {
      if (product.selected === 0) {
        return;
      }
      this.$f7Router.framework7.addNotification({
        message: `Pedido removido: ${product.name}`,
        hold: 3000,
      });
      // this.socket_addProduct(product);
      /* eslint-disable no-param-reassign */
      product.selected -= 1;
    },
    addProduct(product) {
      this.$f7Router.framework7.addNotification({
        message: `Pedido adicionado: ${product.name}`,
        hold: 3000,
      });
      // this.socket_addProduct(product);
      /* eslint-disable no-param-reassign */
      product.selected += 1;
    },
  },
};
</script>

<style scoped>
.row .col-50 {
  justify-content: space-between;
}
th {
  text-align: left;
}

table {
  width: 100%;
}
.tab {
  padding-top: 10px;
  min-height: 150px;
}
.media {
  width: 100%;
}

.heart {
  position: absolute;
  top: 70px;
  right: 10px;
}
.rated{
  display: flex;
  justify-content: flex-start;
}
.rating {
  unicode-bidi: bidi-override;
  direction: rtl;
}

.rating > span {
  display: inline-block;
  position: relative;
  width: 1em;
  font-size: 25px;
}


.rating > .is-active:before,
.rating > .is-active ~ span:before{
  content: "\2605";
  position: absolute;
  color: gold;
}
.btn-success {
  width: 100%;
}
</style>

