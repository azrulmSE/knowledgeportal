// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// Import F7
/* eslint-disable no-unused-vars */
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles
/* eslint-disable no-unused-vars */
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
// import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
// import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
/* OR for Material Theme:

*/

// Import App Custom Styles
// import AppStyles from './css/app.css'
import Vuetify from 'vuetify'
require('./../node_modules/vuetify/dist/vuetify.min.css')
// import('/../node_modules/vuetify/dist/vuetify.min.css')
import materialIcons from 'material-design-icons/iconfont/material-icons.css'
// require('./../node_modules/vuetify/stylus/app.styl')

// Import Routes
// import Routes from './routes.js'

import App from './App'

// Init F7 Vue Plugin
Vue.use(Vuetify)

/* eslint-disable no-new */
// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    material: true
    // routes: Routes
  },
  // Register App Component
  components: {
    app: App
  }
})

// new Vue({
//   el: '#app',
//   template: '<app/>',
//   components:{
//         app: App
//       }
// })
