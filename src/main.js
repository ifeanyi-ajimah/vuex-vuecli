import Vue from 'vue'
import App from './App.vue'
import  {store_data}  from './vuexstore/store'

Vue.config.productionTip = false


new Vue({
  store: store_data, //we can now use store anywhere in after it has been imported above and instantiated here

  render: h => h(App),
}).$mount('#app')
