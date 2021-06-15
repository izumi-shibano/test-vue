import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from '../router'
import VCalendar from 'v-calendar'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VCalendar);

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
