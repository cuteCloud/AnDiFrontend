import g from '../../commonJs/g'
var leftMenus = {
  state: {
    leftMenusList:g.tempCache.get('leftMenusList'),
    leftMenusStatus:g.tempCache.get('leftMenusStatus')
  },
  mutations: {
    setLeftMenusList(state, info) {
      state.leftMenusList=info;
      g.tempCache.set('leftMenusList', info);
    },
    setLeftMenusStatus(state, info) {
      state.leftMenusStatus=info;
      g.tempCache.set('leftMenusStatus', info);
    }
  }
}
export default leftMenus
