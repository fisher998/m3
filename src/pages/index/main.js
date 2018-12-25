import Vue from 'vue'
import App from './App.vue'
import i18n from '@/i18n/i18n.js'
import { getQueryVariable } from '@/assets/js/getQueryVariable.js'

if (getQueryVariable('lang') === 'cn') {
  i18n.locale = 'cn';
} else {
  i18n.locale = 'en'
}

import { Dialog, NoticeBar } from 'vant'
Vue.use(Dialog)
Vue.use(NoticeBar)



// import vconsole from 'vconsole'
// new vconsole

console.log(window.location.href)

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
