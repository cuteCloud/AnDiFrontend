const ls=localStorage;
const ss=sessionStorage;
var g= {
      cache:{
        set:function (key,val) {
          ls.setItem(key,JSON.stringify(val))
        },
        get:function (key) {
          try {
            return JSON.parse(ls.getItem(key))
          } catch (err) {
            return null
          }
        },
        clearAll:function () {
          ls.clear()
        },
        clearKey:function (key) {
          ls.removeItem(key)
        }
      },
      tempCache:
        {
        set:function (key,val) {
          ss.setItem(key,JSON.stringify(val))
        },
        get:function (key) {
          try {
            return JSON.parse(ss.getItem(key))
          } catch (err) {
            return null
          }
        },
        clearAll:function () {
          ss.clear()
        },
        clearKey:function (key) {
          ss.removeItem(key)
        }
      },
  }

export default g

