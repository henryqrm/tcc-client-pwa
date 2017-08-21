// import 'reset-css';


import 'framework7';
import 'framework7-icons/css/framework7-icons.css';

import Vue from 'vue';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue';


// Import F7 iOS Theme Styles
// import 'framework7/dist/css/framework7.ios.min.css';
// import 'framework7/dist/css/framework7.ios.colors.min.css';
//  OR for Material Theme:
import 'framework7/dist/css/framework7.material.min.css';
import 'framework7/dist/css/framework7.material.colors.min.css';

import Routes from './router';
import App from './App';
import store from './store';

Vue.use(Framework7Vue);

Vue.config.productionTip = false;

// Vue.http.options.root = 'http://localhost:9000';

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  template: '<App/>',
  framework7: {
    root: '#app',
    material: true,
    routes: Routes,
  },
  components: { App },
});
