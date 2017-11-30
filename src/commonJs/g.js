const ls=localStorage;
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
      }
  }

export default g

