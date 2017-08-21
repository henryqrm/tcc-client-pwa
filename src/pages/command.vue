<template>
  <f7-page>
    <f7-navbar title="Resumo" back-link="Voltar" sliding></f7-navbar>
  </f7-page>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  methods: {
    onF7Init(f7) {
      this.f7 = f7;
    },
    ...mapGetters([]),
    ...mapActions([]),
  },
};
</script>
