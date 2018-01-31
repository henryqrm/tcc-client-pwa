<template>
  <f7-page>
    <f7-block>
      <h2>Atendimento</h2>
      <f7-list media-list class="list">
          <f7-list-item text="Muito satisfeito">
              <div slot="media">
              <img src="static/img/laughing-face-stroke.png">
              </div>
          </f7-list-item>
          <f7-list-item text="Satisfeito">
              <div slot="media">
              <img src="static/img/smiling-emoticon-face.png">
              </div>
          </f7-list-item>
          <f7-list-item text="Neutro">
              <div slot="media">
                <img src="static/img/emoticon-neutral-face-outline.png">
              </div>
          </f7-list-item>
          <f7-list-item text="Neutro">
              <div slot="media">
                <img src="static/img/sad-face-outline.png">
              </div>
          </f7-list-item>
          <f7-list-item text="Neutro">
              <div slot="media">
                <img src="static/img/angry-emoticon.png">
              </div>
          </f7-list-item>
          <f7-list-item divider></f7-list-item>
          <f7-list-item>
            <f7-label>Comentário</f7-label>
            <f7-input type="textarea" placeholder="Deixe aqui sua mensagem."></f7-input>
          </f7-list-item>
      </f7-list>
    </f7-block>
    <f7-toolbar bottom>
      <f7-button style="width: 100%" big @click="alert">Terminar</f7-button>
    </f7-toolbar>
  </f7-page>
</template>
<script>
export default {
  methods: {
    alert() {
      this.$f7.alert('Obrigado por testar o protótipo usando Progressive Web App (PWA).', 'Termino da navegação');
    },
  },
};
</script>

<style scoped>

</style>
