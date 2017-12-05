<template>
  <f7-page>
    <h2>Meus pedidos</h2>
    <f7-list media-list v-for="product in command.products" :key="product.name">
      <f7-list-item v-for="table in local.tables" :key="table.name" @click="select(table)" :title="table.name" :text="table.status === 'Ocupado' ? table.status : table.status + ' com ' + table.occupations.total + ' lugares'" :class="{'danger': table.status === 'Ocupado', 'success': table.status === 'Livre'}">
        <div slot="media">
          <img style="width: 48px" :src="local.image">
        </div>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      command: {},
    };
  },
  methods: {
    ...mapGetters([]),
    ...mapActions([]),
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  display: block;
}
</style>
