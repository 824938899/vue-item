// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import 'babel-polyfill'
import store from './store/index.js'
import 'styles/border.css'
import 'styles/reset.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false;

FastClick.attach(document.body);

Vue.use(VueAwesomeSwiper);
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
