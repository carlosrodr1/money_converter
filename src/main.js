import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import Axios from 'axios'
import './globalComponents/global_components'
import 'buefy/dist/buefy.css'


Vue.config.productionTip = false
Vue.prototype.$http = Axios
Vue.use(Buefy)

new Vue({
  render: h => h(App),
}).$mount('#app')
