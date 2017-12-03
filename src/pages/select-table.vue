<template>
  <f7-page>
    <f7-navbar title="Selecione a Mesa" sliding></f7-navbar>
    <f7-block>
      <h2>Tênis Ball</h2>
      <p>A ideia inovadora e o ambiente alegre, aliados a um cardápio delicioso e inédito, onde um bacon crocante e exclusivo reina absoluto, fez do Tênis Ball um grande sucesso na cidade.</p>
    </f7-block>
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
import Command from '../store/modules/command/model';

export default {
  computed: {
    ...mapGetters('Table', ['locals']),
  },
  created() {
  },
  methods: {
    ...mapActions('Command', ['socket_openCommand']),
    onF7Init(f7) {
      this.f7 = f7;
    },
    select(table) {
      if (table.isOccupied) {
        this.$f7.alert('Aguarde a mesa fechar a comanda e ficar disponível.', 'Mesa ocupada');
        return;
      }
      this.promptName(table)
        .then(name => this.newCommand(name, table));
    },
    promptName(table) {
      return new Promise((resolve) => {
        this.f7.prompt(
          'Qual é seu nome?',
          `Comanda - Mesa ${table.id}`,
          (name) => {
            resolve(name);
          },
        );
      });
    },
    newCommand(name, table) {
      const command = new Command();

      command.setName(name);
      command.setTable(table);
      this.f7.mainView.router.back();
    },
  },
};
</script>
<style>
.danger .item-text{
  color: red !important;
}
.success .item-text{
  color: green !important;
}
</style>
