import g from '../../commonJs/g'
var user = {
  state: {
    userInfo:g.Cookie.get('userInfo'),
    token: g.Cookie.get('token')
  },
  mutations: {
    setUserInfo(state,info){
      state.info=info;
      g.Cookie.set('userInfo', info,'d5');
    },
    clearUserInfo(state,info){
      state.userInfo='';
      g.Cookie.cancel('userInfo')
    },
    setToken(state,info){
      state.token=info;
      g.Cookie.set('token', info,'d5')
    },
    clearToken(state,info){
      state.token=null;
      g.Cookie.cancel('token')
    },
    clearAllUser(state,info){
      state.userInfo='';
      state.token=null;
      g.Cookie.cancel('userInfo');
      g.Cookie.cancel('token');
    }

  }
}
export default user
