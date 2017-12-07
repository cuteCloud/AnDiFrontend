import router from '../../router'
import g from '../../commonJs/g'
var asyRouters = {
  state: {
    asyRouters:g.tempCache.get('asyRouters')
  },
  mutations: {
    setAsyRouters(state, info) {
      info.map(function (i) {
        state.asyRouters.push( { path: i.path, name: i.name, component: resolve => require([i.componentPath], resolve) })
      })
      router.addRouter(state.asyRouters)
      g.tempCache.set('asyRouters', state.asyRouters);
    }
  }
}
export default asyRouters
