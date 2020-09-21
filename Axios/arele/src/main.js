import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//全部组件导入，一般测试时使用   ---> 不推荐
// import Vant from 'vant'
// import 'vant/lib/index.css';
// Vue.use(Button);
// import { Button } from 'vant';
//按需导入见babel.config.js
import '@/config/rem'
Vue.config.productionTip = false
if (process.env.NODE_ENV == 'development') require('@/api/mock')

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')