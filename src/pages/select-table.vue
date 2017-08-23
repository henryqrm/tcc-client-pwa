<template>
  <f7-page>
    <f7-navbar title="Selecione a Mesa" sliding></f7-navbar>
    <f7-list media-list v-for="local in locals" :key="local.name">
      <f7-list-item :title="local.name" divider></f7-list-item>
      <f7-list-item v-for="table in local.tables" :key="table.name" @click="select(table)" :title="table.name" :badge="`${table.occupations.current}/${table.occupations.total}`" :text="table.status" badge-color="blue">
        <div slot="media">
          <f7-chip :bg="table.isOccupied ? 'red' : 'green'">
          </f7-chip>
        </div>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
import LOCALS from '@/store/table';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      locals: LOCALS,
    };
  },
  methods: {
    ...mapActions('Command', ['socket_openCommand']),
    onF7Init(f7) {
      this.f7 = f7;
    },
    select(table) {
      this.socket_openCommand(table)
        .then(() => {
          this.f7.mainView.router.back();
        });
    },
  },
};
</script>
