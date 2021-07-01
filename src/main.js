import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from '../router'
import VCalendar from 'v-calendar'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from "./store/index.js";

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VCalendar);

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')
