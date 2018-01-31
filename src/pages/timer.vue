<template>
  <f7-page>
    <h3>Já estamos processando o seu pedido</h3>
    <h2>
        <countdown :deadline="minutes(new Date(), 20)"></countdown>
    </h2>
    <p>Tempo aproximado</p>
    <f7-block>
      <h4>Metodo de pagamento</h4>
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
    </f7-block>
    <f7-block style="display: flex; flex-flow: column nowrap; justify-content: space-around; height: ">
      <h4>Ações</h4>
      <f7-list media-list class="list">
        <f7-list-item text="Trazer bebidas">
        </f7-list-item>
        <f7-list-item text="Fazer novos pedidos">
        </f7-list-item>
        <f7-list-item text="Ver resume">
        </f7-list-item>
      </f7-list>
    </f7-block>
    <f7-toolbar bottom>
      <f7-button @click="open" style="width: 100%" raised big>Fechar Commanda</f7-button>
    </f7-toolbar>
  </f7-page>
</template>
<script>
import countdown from 'vuejs-countdown';

export default {
  components: {
    countdown,
  },
  methods: {
    minutes: (date, minutes) => new Date(date.getTime() + (minutes * 60000)),
    alert() {
      this.$f7.alert('Use outra opção.', 'Não implementado');
    },
    open() {
      this.$f7.mainView.router.load({
        url: '/feedback',
        pushState: true,
        animatePages: true,
      });
    },
  },
};
</script>

<style scoped>
h2,
p,
h3 {
  text-align: center;
  display: block;
}
</style>
