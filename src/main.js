import Vue from 'vue'
import Vuetify from 'vuetify'
require('./../node_modules/vuetify/dist/vuetify.min.css')
import materialIcons from 'material-design-icons/iconfont/material-icons.css'
import App from './App'
import router from './router'
import Vuex from 'vuex'
// import VueFrame from 'vue-frame'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(Vuetify,Vuex)
Vue.use(VueGoogleMaps,{
  load:{
    key:'AIzaSyCPptR8aYma2RBHGLlPzbS_ieHtaXAwRY8',
    v: '3.29',
    installComponents: false
  }
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<app/>',
  router,
  render: h => h(App)
})
