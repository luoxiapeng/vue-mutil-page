
import Vue from 'vue'
import App from './listApp'
import 'lib-flexible'
const FastClick = require('fastclick')

if (process.env.NODE_ENV === 'production') {
  // 干一些线上才要做的事情

}
if (process.env.NODE_ENV === 'development') {
  // 干一些测试时不可告人的事情
}




FastClick.attach(document.body)

new Vue({
  render: h => h(App)
}).$mount('#app')
