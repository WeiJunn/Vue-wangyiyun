import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
import discovery from "components/discover.vue"
import search from "components/search.vue"
const router = new VueRouter({
  routes:[
    {
      path: '/',
      redirect: '/discovery'
    },
    {
    path: '/discovery',
    component: discovery,
    },
    {
    path: '/search',
    component: search,
    },
   ],
})

export default router
