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
import { mapActions } from 'vuex';
import LocalService from '@/services/local';
import CommandService from '@/services/command';

export default {
  data() {
    return {
      locals: {},
      localService: new LocalService(this.$resource),
      commandService: new CommandService(this.$resource),
    };
  },
  created() {
    this.localService
      .index()
      .then((locals) => {
        this.locals = locals;
      });
  },
  methods: {
    ...mapActions('Command', ['socket_openCommand']),
    onF7Init(f7) {
      this.f7 = f7;
    },
    select(table) {
      this.commandService()
        .create(table)
        .then(command => {
          this.socket_openCommand(command)
            .then(() => {
              this.f7.prompt(
                'Qual é seu nome?',
                'Nome da comanda',
                (value) => {
                  this.setName(value);
                  this.f7.mainView.router.back();
                },
              );
            });
        });
    },
    setName(name) {
      console.log(name);
    },
  },
};
</script>
