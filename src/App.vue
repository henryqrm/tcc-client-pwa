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
              <p>Right panel content goes here</p>
            </f7-block>
            <f7-block-title>Load page in panel</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About"></f7-list-item>
              <f7-list-item link="/form/" title="Form"></f7-list-item>
            </f7-list>
            <f7-block-title>Load page in main view</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About" link-view="#main-view" link-close-panel></f7-list-item>
              <f7-list-item link="/form/" title="Form" link-view="#main-view" link-close-panel></f7-list-item>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- iOS Theme Navbar -->
        <f7-navbar v-if="$theme.ios">
          <f7-nav-center sliding>Cardápio - Mesa 1</f7-nav-center>
          <f7-nav-right>
            <span>Menu</span>
            <f7-link icon="icon-bars" open-panel="right"></f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-pages>
          <f7-page with-subnavbar no-page-content>
            <!-- Material Theme Navbar -->
            <f7-navbar v-if="$theme.material">
              <f7-nav-center sliding>Cardápio - Mesa 1</f7-nav-center>
              <f7-nav-right>
                <span>Menu</span>
                <f7-link icon="icon-bars" open-panel="right"></f7-link>
              </f7-nav-right>
            </f7-navbar>
            <f7-toolbar tabbar scrollable>
              <f7-link @click="currentTab(category)" :tab-link="category.name" v-for="category in getProducts" :key="category.name">{{ category.name }}</f7-link>
            </f7-toolbar>
            <f7-tabs swipeable>
              <f7-page-content :id="category.name" tab v-for="category in getProducts" :key="category.name">
                <section v-for="product in category.products" :key="product.name">
                  <f7-block-title>{{ product.name }}</f7-block-title>
                  <f7-block>
                    <cardProduct v-for="item in product.items" :key="item.name" v-if="item.isActive" :item="item"></cardProduct>
                  </f7-block>
                </section>
              </f7-page-content>
            </f7-tabs>
            <f7-fab color="pink">
              <i class="f7-icons">document_text_fill</i>
            </f7-fab>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
    <login></login>
    <Popup></Popup>
    <SelectTable></SelectTable>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Popup from '@/components/popup';
import home from '@/pages/home';
import login from '@/pages/login';
import SelectTable from '@/pages/select-table';
import cardProduct from '@/components/card-product';
import CommandService from './services/command';

export default {
  name: 'app',
  components: {
    home,
    login,
    Popup,
    SelectTable,
    cardProduct,
  },
  data() {
    return {
      categories: [],
      currentTabName: 'Hambúrguer',
      commandService: new CommandService(this.$resource),
    };
  },
  computed: {
    ...mapGetters('Product', ['getProducts']),
  },
  mounted() {
    setTimeout(() => {
      this.onInit();
    });
  },
  methods: {
    ...mapActions('Command', ['socket_openCommand']),
    currentTab(category) {
      this.currentTabName = category.name;
      console.log(this.currentTabName);
    },
    onInit() {
      this.messageLoadApp();
      const id = this.hasCommandSave();
      if (id) {
        this.loadCommand(id);
      } else {
        this.loadTables();
      }
    },
    messageLoadApp() {
      window.f7.addNotification({
        message: 'Aplicativo carregado',
        hold: 3000,
      });
    },
    loadCommand(id) {
      this.commandService.getCommand(id)
        .then((command) => {
          this.socket_openCommand(command)
            .then(() => {
              window.f7.addNotification({
                message: `Comanda carregada em nome de ${command.name}`,
                hold: 3000,
              });
            });
        })
        .catch((err) => {
          window.localStorage.removeItem('CommandID');
          window.f7.addNotification({
            message: err.message,
            hold: 3000,
          });
          this.loadTables();
        });
    },
    loadTables() {
      window.f7.mainView.router.load({
        url: '/select-table',
        pushState: true,
        animatePages: true,
      });
    },
    hasCommandSave() {
      let id = false;
      if (window) {
        id = window.localStorage.getItem('CommandID');
      }
      return id;
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

.size-20 {
  font-size: 20px;
  margin-right: 6px;
}
</style>
