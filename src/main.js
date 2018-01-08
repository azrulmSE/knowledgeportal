import Vue from 'vue'
import Vuetify from 'vuetify'
require('./../node_modules/vuetify/dist/vuetify.min.css')
import materialIcons from 'material-design-icons/iconfont/material-icons.css'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuetify,Vuex)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<app/>',
  router,
  render: h => h(App)
})
