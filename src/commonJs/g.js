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
      Cookie:{
        set:function (name,value,time) {
          var strsec = this.getsec(time);
          var exp = new Date();
          exp.setTime(exp.getTime() + strsec*1);
          document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+'path=/';
        },
        get:function (name) {
          var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
          if(arr=document.cookie.match(reg))
            return unescape(arr[2]);
          else
            return null;
        },
        cancel:function (name) {
          console.log(document.cookie)
          var exp = new Date();
          console.log(exp.getTime())
          exp.setTime(exp.getTime() - 1);
          var cval=this.get(name);
          console.log(name)
          if(cval!=null)
            document.cookie= name + "="+escape(cval)+";expires="+exp.toGMTString()+'path=/';
        },
        getsec:function (str) {
          var str1=str.substring(1,str.length)*1;
          var str2=str.substring(0,1);
          if (str2=="s")
          {
            return str1*1000;
          }
          else if (str2=="h")
          {
            return str1*60*60*1000;
          }
          else if (str2=="d")
          {
            return str1*24*60*60*1000;
          }
        }
      }
  }

export default g

