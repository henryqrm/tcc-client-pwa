// import 'reset-css';


import 'framework7';
import 'framework7-icons/css/framework7-icons.css';

import Vue from 'vue';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue';


// Import F7 iOS Theme Styles
import 'framework7/dist/css/framework7.ios.min.css';
import 'framework7/dist/css/framework7.ios.colors.min.css';
//  OR for Material Theme:
// import 'framework7/dist/css/framework7.material.min.css';
// import 'framework7/dist/css/framework7.material.colors.min.css';

import vueLogger from 'vue-logger';

import Routes from './router';
import App from './App';

Vue.use(Framework7Vue);

Vue.use(vueLogger, {
  prefix: new Date(),
  dev: true,
  shortname: true,
  levels: ['log', 'warn', 'debug', 'error', 'dir'],
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  framework7: {
    root: '#app',
    material: true,
    routes: Routes,
  },
  components: { App },
});
