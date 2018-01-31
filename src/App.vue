<template>
  <div id="app">
    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>
    <!-- Right Panel -->
    <f7-panel right cover layout="dark">
      <f7-view id="right-panel-view" navbar-through :dynamic-navbar="true">
        <f7-navbar v-if="$theme.ios" title="Right Panel" sliding></f7-navbar>
        <f7-pages>
          <f7-page>
            <f7-navbar v-if="$theme.material" title="Right Panel" sliding></f7-navbar>
            <f7-block>
            </f7-block>
            <f7-block-title>Load page in panel</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About"></f7-list-item>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>
    <!-- Main Views -->
    <f7-views>
      <f7-view url="/home/" id="main-view" navbar-through :dynamic-navbar="true" main>
      </f7-view>
    </f7-views>
  </div>
</template>

<script>

export default {
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    setTimeout(() => {
      this.onInit();
    });
  },
  methods: {
    onInit() {
      this.messageLoadApp();
    },
    messageLoadApp() {
      this.$f7.addNotification({
        message: 'Aplicativo carregado',
        hold: 1000,
      });
    },
  },
};
</script>
<style scoped>
#app {
  max-width: 768px;
  margin: 0 auto;
  background-color: black;
}
</style>
