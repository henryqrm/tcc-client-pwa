<template>
  <f7-page with-subnavbar no-page-content>
    <f7-toolbar tabbar scrollable>
      <f7-link :tab-link="category.name" v-for="category in categories" :key="category.name">{{ category.name }}</f7-link>
    </f7-toolbar>
    <f7-tabs swipeable>
      <f7-page-content :id="category.name" tab v-for="category in categories" :key="category.name">
        <section v-for="product in category.products" :key="product.name">
          <f7-block-title>{{ product.name }}</f7-block-title>
          <f7-block>
            <cardProduct v-for="item in product.items" :key="item.name" v-if="item.isActive" :item="item"></cardProduct>
          </f7-block>
        </section>
      </f7-page-content>
    </f7-tabs>
  </f7-page>
</template>
<<script>
import cardProduct from '@/components/card-product';
import { MOCK } from '@/providers/product';

export default {
  components: {
    cardProduct,
  },
  data() {
    return {
      categories: MOCK,
    };
  },
};
</script>
<style scoped>

</style>
