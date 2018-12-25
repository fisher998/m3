import Vue from 'vue'
import App from './App.vue'
import i18n from '@/i18n/i18n.js'
import { getQueryVariable } from '@/assets/js/getQueryVariable.js'
import { Notify, Toast } from 'vant'

Vue.use(Notify)
Vue.use(Toast)
if (getQueryVariable('lang') === 'cn') {
  i18n.locale = 'cn';
} else {
  i18n.locale = 'en'
}
Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
