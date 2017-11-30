var apiLink = {
  state: {
    apiLink: 'http://localhost:8888'//开启本地接口
    /*apiLink: 'https://api.xxxx.cn'// 开启服务器接口*/
  },
  mutations: {
    setApiLink(state, info) {
      state.apiLink=info;
    }
  }
}
export default apiLink
