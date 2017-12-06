import g from '../../commonJs/g'
var navs = {
  state: {
    navStatus:g.tempCache.get('navStatus')
  },
  mutations: {
    setNavStatus(state, info) {
      state.navStatus=info;
      g.tempCache.set('navStatus', info);
    }
  }
}
export default navs
