import g from '../../commonJs/g'
var user = {
  state: {
    userInfo:g.tempCache.get('userInfo'),
    token: g.Cookie.get('token')
  },
  mutations: {
    setInfo(state,info){
      state.info=info;
      g.tempCache.set('info', info);
    },
    setToken(state,info){
      state.token=info;
      g.Cookie.set('token', info,'d7')
    }
  }
}
export default user
