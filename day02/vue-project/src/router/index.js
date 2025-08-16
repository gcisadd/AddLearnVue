import Vue from 'vue'
import VueRouter from 'vue-router'
import Find from '../views/Find.vue'
import Friend from '../views/Friend.vue'
import Music from '../views/Music.vue'
Vue.use(VueRouter)
export const router = new VueRouter({
  routes: [
    {path: '/find', component: Find},
    {path: '/music', component: Music},
    {path: '/friend', component: Friend}
  ]
})
// export default router