import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {    
    musicUrl:"",
  },
  mutations: {
    changeUrl(state,url){
       state.musicUrl = url;
    }
  },
  actions: {
  },
  modules: {
  }
})
