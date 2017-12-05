<template>
  <f7-page>
    <h2>Bem vindo a casa Happy Hour</h2>
    <a @click="close">Ver cardápio</a>
    <img src="static/img/qrcode.svg">
    <p>Escolha a mesa e escaneie o QR Code</p>
    <a @click="loadTables">Selecionar mesa</a>
    <f7-toolbar bottom>
      <f7-button class="button" big @click="alert">Escanear</f7-button>
    </f7-toolbar>
  </f7-page>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('Command', ['openCommand']),
    close() {
      this.$router.back();
    },
    alert() {
      this.$f7.alert('Use a opção "Selecionar mesa".', 'Não implementado');
    },
    loadTables() {
      this.openCommand();
      this.$f7.mainView.router.load({
        url: '/select-table',
        pushState: true,
        animatePages: true,
      });
    },
  },
};
</script>

<style scoped>
h2,
a,
img,
p {
  text-align: center;
  display: block;
}
.button {
  width: 100%;
}
img {
  margin: 10% auto;
  width: 60%;
}
</style>
