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
            <PurchaseOrders></PurchaseOrders>
            <!-- Page Content -->
            <!-- <SelectTable></SelectTable> -->
  
            <!-- <f7-fab-speed-dial>
                  <f7-fab-actions>
                    <f7-fab-action color="pink" @click="onActionClick">A</f7-fab-action>
                    <f7-fab-action color="orange" @click="onActionClick">B</f7-fab-action>
                    <f7-fab-action color="green" @click="onActionClick">C</f7-fab-action>
                  </f7-fab-actions>
                  <f7-fab>
                    <f7-icon icon="icon-plus"></f7-icon>
                    <f7-icon icon="icon-close"></f7-icon>
                  </f7-fab>
                </f7-fab-speed-dial> -->
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
    <login></login>
    <Popup></Popup>
  </div>
</template>

<script>
import Popup from '@/components/Popup';
import PurchaseOrders from '@/pages/purchase-orders';
import home from '@/pages/home';
import login from '@/pages/login';
import SelectTable from '@/pages/select-table';

export default {
  name: 'app',
  components: {
    home,
    login,
    Popup,
    SelectTable,
    PurchaseOrders,
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

