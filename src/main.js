import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lazyLoad from "vue-lazyload";
Vue.use(lazyLoad,{
  loading:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1573018803&di=8cfae815b705bcf1480ef831159d5e38&src=http://pic.pc6.com/up/2015-5/201551010315.png",
  error:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1704354617,2285391646&fm=26&gp=0.jpg"
},)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
