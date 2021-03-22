// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
//自适应
// import 'lib-flexible'

//引入css
import './assets/reset.css'
import './assets/css/iconfont.css'
//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'//这里注意具体看使用的版本是否需要引入样式，以及具体位置。
Vue.use(VueAwesomeSwiper, /* { default global options } */)



Vue.config.productionTip = false
fastclick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
