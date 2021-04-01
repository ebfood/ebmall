import Vue from 'vue'
import App from './App.vue'
import './assets/scss/normalize.css'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Global from './Global'
Vue.use(VueAxios, axios) // 使用vue-axios
Vue.use(ElementUI)
Vue.use(Global)
Vue.config.productionTip = false

// 全局请求拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // 跳转error页面
    // router.push({ path: '/error' })
    return Promise.reject(error)
  }
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
