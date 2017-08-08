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
          <f7-nav-center sliding>Cardápio</f7-nav-center>
          <f7-nav-right>
            <span>Menu</span>
            <f7-link icon="icon-bars" open-panel="right"></f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-pages>
          <f7-page>
            <!-- Material Theme Navbar -->
            <f7-navbar v-if="$theme.material">
              <f7-nav-center sliding>Cardápio</f7-nav-center>
              <f7-nav-right>
                <span>Menu</span>
                <f7-link icon="icon-bars" open-panel="right"></f7-link>
              </f7-nav-right>
            </f7-navbar>
            <!-- Page Content -->
            <f7-block-title>Welcome to my App</f7-block-title>
            <f7-block inner>
              <p>Duis sed erat ac eros ultrices pharetra id ut tellus. Praesent rhoncus enim ornare ipsum aliquet ultricies. Pellentesque sodales erat quis elementum sagittis.</p>
            </f7-block>
            <f7-block-title>Navigation</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About"></f7-list-item>
              <f7-list-item link="/form/" title="Form"></f7-list-item>
            </f7-list>
            <f7-block-title>Side Panels</f7-block-title>
            <f7-block>
              <f7-grid>
                <f7-col width="50">
                  <f7-button open-panel="left">Left Panel</f7-button>
                </f7-col>
                <f7-col width="50">
                  <f7-button open-panel="right">Right Panel</f7-button>
                </f7-col>
              </f7-grid>
            </f7-block>
            <f7-block-title>Modals</f7-block-title>
            <f7-block>
              <f7-grid>
                <f7-col width="50">
                  <f7-button open-popup="#popup">Popup</f7-button>
                </f7-col>
                <f7-col width="50">
                  <f7-button open-login-screen="#login-screen">Login Screen</f7-button>
                </f7-col>
              </f7-grid>
            </f7-block>
            <f7-fab-speed-dial>
              <!-- Actions -->
              <f7-fab-actions>
                <f7-fab-action color="pink" @click="onActionClick">A</f7-fab-action>
                <f7-fab-action color="orange" @click="onActionClick">B</f7-fab-action>
                <f7-fab-action color="green" @click="onActionClick">C</f7-fab-action>
              </f7-fab-actions>
              <!-- FAB -->
              <f7-fab>
                <!-- First icon to open Actions -->
                <f7-icon icon="icon-plus"></f7-icon>
                <!-- Second icon to close Actions -->
                <f7-icon icon="icon-close"></f7-icon>
              </f7-fab>
            </f7-fab-speed-dial>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
    <Login></Login>
    <Popup></Popup>
  </div>
</template>

<script>
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Popup from '@/components/Popup';

export default {
  name: 'app',
  components: {
    Home,
    Login,
    Popup,
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

