import Vue from 'vue'
import Vuex from 'vuex'
import apiLink from './modules/apiLink'
import leftMenus from './modules/leftMenus'
import navs from './modules/navs'
Vue.use(Vuex)
var store=new Vuex.Store({
  modules: {
    apiLink:apiLink,
    leftMenus:leftMenus,
    navs:navs

  }
})
export default  store

