import Vue from 'vue'
import App from './App'
// import router from './router'

import 'common/stylus/index.styl'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
