// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'reset-css';
import f7 from 'framework7';
import 'framework7/dist/css/framework7.material.css';
import 'framework7/dist/css/framework7.material.colors.css';
// import 'framework7/dist/css/framework7.ios.css';
// import 'framework7/dist/css/framework7.ios.colors.css';

import Vue from 'vue';
import vueLogger from 'vue-logger';

import App from './App';
import router from './router';

Vue.use(f7);

Vue.use(vueLogger, {
  // prefix: new Date(),
  // dev: true,
  // shortname: true,
  levels: ['log', 'warn', 'debug', 'error', 'dir'],
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
