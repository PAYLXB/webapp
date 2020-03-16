import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from "./router/router"
import './utils/index'
import "./assets/css/index.less"
Vue.use(MintUI);
new Vue({
  router,
  el: '#app',
  render: h => h(App)
});

Vue.config.productionTip = false

/**
 * 窗口宽度发生变化
 */
window.rootFont = (function () {
  var doc = document
  var win = window
  var docEl = doc.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = function () {
    var clientWidth = doc.body.clientWidth
    // clientWidth = $(window).width()
    if (!clientWidth) return
    docEl.style.fontSize = 40 * (clientWidth / 750) + 'px'
    if (docEl.style.fontSize) {
      doc.getElementById('app').style.display = 'block'
    } else {
      doc.getElementById('app').style.display = 'block'
    }
  }
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
}())
