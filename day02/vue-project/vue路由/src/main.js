import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Find from './views/Find.vue'
import Friend from './views/Friend.vue'
import Music from './views/Music.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {path: '/find', component: Find},
    {path: '/music', component: Music},
    {path: '/friend', component: Friend}
  ]
})
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
