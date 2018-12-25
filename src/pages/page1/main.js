import Vue from 'vue'
import App from './App.vue'
import i18n from '@/i18n/i18n.js'
import { getQueryVariable } from '@/assets/js/getQueryVariable.js'

import 'babel-polyfill'
import Es6Promise from 'es6-promise'

Es6Promise.polyfill()

if (getQueryVariable('lang') === 'cn') {
  i18n.locale = 'cn';
} else {
  i18n.locale = 'en'
}
import { Notify, Toast } from 'vant'
 
// import vconsole from 'vconsole'
// new vconsole

console.log(window.location.href)

Vue.use(Notify)
Vue.use(Toast)

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
