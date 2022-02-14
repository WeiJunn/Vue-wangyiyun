import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
import discovery from "components/discover.vue"
import playListDetail from "components/playListDetail.vue";
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
    path: '/playListDetail',
    component: playListDetail,
    },
   ],
})

export default router
