import Vue from 'vue'
import Vuex from 'vuex'
import apiLink from './modules/apiLink'
Vue.use(Vuex)
var store=new Vuex.Store({
  modules: {
    apiLink:apiLink
  }
})
export default  store

