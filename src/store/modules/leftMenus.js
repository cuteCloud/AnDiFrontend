import g from '../../commonJs/g'
var leftMenus = {
  state: {
    fullPath:g.tempCache.get('fullPath'),
    rootPath:g.tempCache.get('rootPath')
  },
  mutations: {
    set_cur_route(state, info) {
      state.fullPath=info.fullPath;
      state.rootPath=info.rootPath;
      g.tempCache.set('fullPath', info.fullPath);
      g.tempCache.set('rootPath', info.rootPath);
    }
  }
}
export default leftMenus
