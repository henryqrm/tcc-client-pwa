<template>
  <f7-page with-subnavbar no-page-content>
    <f7-toolbar tabbar scrollable>
      <f7-link tab-link="#tab1" active>Entradas</f7-link>
      <f7-link tab-link="#tab2">Prato principal</f7-link>
      <f7-link tab-link="#tab3">Bebidas</f7-link>
      <f7-link tab-link="#tab4">Tab 4</f7-link>
      <f7-link tab-link="#tab5">Tab 5</f7-link>
      <f7-link tab-link="#tab6">Tab 6</f7-link>
    </f7-toolbar>
    <f7-tabs swipeable>
      <f7-page-content id="tab1" tab active>
        <f7-block>
          <p>Tab 1</p>
          <cardProduct></cardProduct>
          <cardProduct></cardProduct>
        </f7-block>
      </f7-page-content>
      <f7-page-content id="tab2" tab>
        <f7-block>
          <p>Tab 2</p>
        </f7-block>
      </f7-page-content>
      <f7-page-content id="tab3" tab>
        <f7-block>
          <p>Tab 3</p>
        </f7-block>
      </f7-page-content>
      <f7-page-content id="tab4" tab>
        <f7-block>
          <p>Tab 4</p>
        </f7-block>
      </f7-page-content>
      <f7-page-content id="tab5" tab>
        <f7-block>
          <p>Tab 5</p>
        </f7-block>
      </f7-page-content>
      <f7-page-content id="tab6" tab>
        <f7-block>
          <p>Tab 6</p>
        </f7-block>
      </f7-page-content>
    </f7-tabs>
  </f7-page>
</template>
<<script>
import cardProduct from '@/components/card-product';

export default {
  components: {
    cardProduct,
  },
  created() {
    console.log(this.$CONSTANT.API); // eslint-disable-line no-console
  },
};
</script>
<style scoped>

</style>
