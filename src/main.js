import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
require('./assets/css/base.css'); //全局引入

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/images/err.png'),
  loading: require('./assets/images/loading.gif'),
  attempt: 1,
  listenEvents: ['scroll']
});

//配置axios
axios.defaults.baseURL = "http://localhost:8888/";
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(function(config){
  return config;
},function(error){
  return Promise.reject(error)
})

axios.interceptors.response.use(function(response){
  return response
},function(error){
  return Promise.reject(error)
})

Vue.prototype.$http = axios;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
