<template>
  <f7-page>
    <f7-navbar title="Resumo" back-link="Voltar" sliding></f7-navbar>
  </f7-page>
</template>
<script>
import COMMAND from '@/store/command';

export default {
  data() {
    return {
      command: COMMAND,
    };
  },
  methods: {
    onF7Init(f7) {
      this.f7 = f7;
    },
    confirm() {

    },
    add() {

    },
    remove() {

    },
  },
};
</script>
