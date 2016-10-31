import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import Vue from 'vue';
import App from './App';
import LocalStore from './LocalStore';

Vue.use(VueMaterial);

Vue.material.theme.register('default', {
  primary: 'green',
  accent: 'teal',
});
/* eslint-disable */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App,
    VueMaterial,
    LocalStore,
  },
});