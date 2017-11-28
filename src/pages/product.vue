<template>
    <f7-page>
      <f7-navbar :title="`Detalhes - ${product.name}`" back-link="Back" sliding></f7-navbar>
      <img class="media" :src="product.image" :alt="product.name">
      <div class="heart">
        <f7-button @click="favorite()" v-if="isFavorite" icon-f7="heart_fill" color="red" style="font-size: 35px;">
        </f7-button>
        <f7-button @click="favorite()" v-if="!isFavorite" icon-f7="heart" color="red" style="font-size: 35px;">
        </f7-button>
      </div>
      <f7-block class="wrapper">
        <div class="amount">
          <div>Quantidade: </div>
          <div>
            + 0 -
          </div>
        </div>
        <div class="rated">
          <div class="rating">
            <span :class="{'is-active': rated(index, product.rated)}" v-for="index in [5, 4, 3, 2, 1]" :key="index">☆</span>
          </div>
        </div>
        <f7-buttons>
          <f7-button tab-link="#tab-1" active>Detalhes</f7-button>
          <f7-button tab-link="#tab-2">Tabela nutricional</f7-button>
        </f7-buttons>
        <f7-tabs>
          <f7-tab id="tab-1" active>
            {{product.description}}
          </f7-tab>
          <f7-tab id="tab-2">Tab 2</f7-tab>
        </f7-tabs>
      </f7-block>
      <f7-toolbar bottom>
        <f7-button class="button btn-success" big @click="back()">VOLTAR</f7-button>
      </f7-toolbar>
    </f7-page>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
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
      console.log('Voltar');
    },
    favorite() {
      this.isFavorite = !this.isFavorite;
    },
  },
};
</script>

<style scoped>
.amount {
  display: flex;
  justify-content: space-between;
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

</style>

