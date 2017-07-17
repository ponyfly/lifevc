import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home/home.vue'
import all from '../components/all/all.vue'
import stroll from '../components/stroll/stroll.vue'
import cart from '../components/cart/cart.vue'
import usercenter from '../components/usercenter/usercenter.vue'
import newproduct from '../components/newproduct/newproduct.vue'
import channel from '../components/channel/channel.vue'
import login from '../components/login/login.vue'
import register from '../components/register/register.vue'
import channelsub from '../components/channelsub/channelsub.vue'
import waredetail from '../components/waredetail/waredetail.vue'

Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'/home'},
  {path: '/home', component: home},
  {path: '/all', component: all},
  {path: '/stroll', component: stroll},
  {path: '/cart', component: cart},
  {path: '/usercenter', component: usercenter},
  {path: '/new', component: newproduct},
  {path: '/channel/:id', component: channel},
  {path: '/login', component: login},
  {path: '/register', component: register},
  {path: '/channelsub/:goodId/:productId', component: channelsub},
  {path: '/item/:wareId', component: waredetail},
]

export default new VueRouter({
  linkActiveClass:'selected',
  routes
})
