import Vue from 'vue'
//导入Vue组件
import App from './App.vue'
//导入根目录

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
