
import Vue from 'vue'
import app from './App.vue'
import router from './router'
import moment from 'moment'

Vue.filter('date-formate',function (val) {
  return moment(val).format('YYYY-MM-DD HH:mm:ss')
})

new Vue({
  el: '#app',
  router,
  render:h=>h(app)
})
