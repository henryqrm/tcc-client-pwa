<template>
  <f7-page>
    <h2>Metodo de pagamento</h2>
    <f7-list media-list class="list">
      <f7-list-item @click="open" text="Dinheiro">
        <div slot="media">
          <img src="static/img/money.png">
        </div>
      </f7-list-item>
      <f7-list-item @click="open" text="Outra pessoa">
        <div slot="media">
          <img src="static/img/person.png">
        </div>
      </f7-list-item>
      <f7-list-item @click="open" text="**** 1590 (credit)">
        <div slot="media">
          <img src="static/img/cred.png">
        </div>
      </f7-list-item>
    </f7-list>
    <a>Adicionar forma de pagamento</a>
  </f7-page>
</template>
<script>
export default {
  methods: {
    alert() {
      this.$f7.alert('Use a opção "Selecionar mesa".', 'Não implementado');
    },
    open() {
      this.$f7.mainView.router.load({
        url: '/app',
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
.list img {
    width: 24px;
}

.list .item-media {
    padding-top: 7px !important;
    padding-bottom: 7px !important;
}
</style>
