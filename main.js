import Vue from 'vue'
import App from './App'

import iconFont from './components/ali-iconfont/iconfont.vue'
Vue.component('icon-font',iconFont)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
