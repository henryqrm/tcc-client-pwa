<template>
  <f7-page>
    <h2>Selecione a Mesa</h2>
    <f7-list media-list v-for="local in locals" :key="local.name">
      <f7-list-item :title="local.name" divider></f7-list-item>
      <f7-list-item v-for="table in local.tables" :key="table.name" @click="select(table)" :title="table.name" :text="table.status === 'Ocupado' ? table.status : table.status + ' com ' + table.occupations.total + ' lugares'" :class="{'danger': table.status === 'Ocupado', 'success': table.status === 'Livre'}">
        <div slot="media">
          <img style="width: 48px" src="static/img/table.png">
        </div>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('Table', ['locals']),
  },
  methods: {
    ...mapActions('Command', ['addTable']),
    onF7Init(f7) {
      this.f7 = f7;
    },
    select(table) {
      if (table.isOccupied) {
        this.$f7.alert('Aguarde a mesa fechar a comanda e ficar disponível.', 'Mesa ocupada');
        return;
      }
      this.addTable(table);
      this.openPayment();
    },
    openPayment() {
      this.$f7.mainView.router.load({
        url: '/payment',
        pushState: true,
        animatePages: true,
      });
    },
  },
};
</script>
<style scoped>
h2,
a {
    margin-left: 16px;
}
</style>


<style>
.danger .item-text{
  color: red !important;
}
.success .item-text{
  color: green !important;
}
</style>
