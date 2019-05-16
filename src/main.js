import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import BinUI from 'bin-ui'
import 'bin-ui/lib/styles/index.css'
import './styles/index.styl'

Vue.use(BinUI)

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')