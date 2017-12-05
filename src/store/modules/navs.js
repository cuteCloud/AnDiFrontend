import g from '../../commonJs/g'
var navs = {
  state: {
    navs:g.tempCache.get('leftMenuStatus')
  },
  mutations: {
    setLeftMenuStatus(state, info) {
      state.navs=info;
      g.tempCache.set('navs', info);
    }
  }
}
export default navs
