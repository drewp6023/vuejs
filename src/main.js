// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// PureCSS styles
require('../node_modules/purecss/build/pure-min.css');
require('../node_modules/purecss/build/grids-responsive-min.css');
require('../node_modules/purecss/build/buttons-min.css');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
