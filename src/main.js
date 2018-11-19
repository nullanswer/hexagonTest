import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import {store} from './store/store'

import 'expose-loader?$!expose-loader?jQuery!jquery'


new Vue({
    render: h => h(App),
    store
}).$mount('#app')
