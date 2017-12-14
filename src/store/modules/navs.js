import g from '../../commonJs/g'
var navs = {
  state: {
    navList:g.tempCache.get('navList'),
    navStatus:g.tempCache.get('navStatus')
  },
  mutations: {
    setNavStatus(state, info) {
      state.navStatus=info;
      g.tempCache.set('navStatus', info);
    },
    setNavList(state, info) {
      state.navList=info;
      g.tempCache.set('navList', info);
    }
  }
}
export default navs
