<template>
  <div class="login">
    <div class="loginBox" :class="loginIng==true?'active':''" style="margin-top: ">
      <h1>登 陆</h1>
      <div class="username">
        <p class="iconfont icon-xingming"></p>
        <input class="login-input user" v-model="login.username" v-verify.login="login.username" type="text"
               placeholder="请输入用户名...">
        <div v-remind="login.username" class="bar"></div>
      </div>
      <div class="password">
        <p class="iconfont icon-lock"></p>
        <input class="login-input pwd" v-model="login.pwd" v-verify.login="login.pwd" type="password"
               placeholder="请输入密码...">
        <div v-remind="login.pwd" class="bar"></div>
      </div>
      <button @click="signUp" :disabled="loginIng">立即登陆</button>
    </div>
    <i class="iconfont icon-double-forward" v-if="loginIng"></i>
    <div class="loginIng" v-if="loginIng">
      <i class="iconfont icon-load-b ani-rotate360"></i> 正在登陆中...
    </div>
  </div>
</template>
<script>
  import Vue from "vue";
  import router from '../../router'
  import verify from "vue-verify-plugin";
  import ui from '../../commonJs/ui'
  Vue.use(verify, {
    blur: true
  });
  export default{
    data(){
      return {
        num: '',
        login: {
          username: '',
          pwd: '',
        },
        loginIng: false
      }
    },
    verify: {
      login: {
        username: [
          "required",
          {
            minLength: 2,
            message: "*姓名不得小于两位"
          },
          {
            maxLength: 10,
            message: "*姓名不得大于10位"
          }
        ],
        pwd: [
          "required",
          {
            minLength: 6,
            message: "*密码不得小于6位"
          }
        ]


      }
    },
    /* beforeRouteEnter (to, from, next) {
     var x=1;
     console.log(to,from)
     setTimeout(function () {
     if(x==1){
     next(
     vm=>{
     vm.num=19;
     /!*  router.push({ path: '/businessOperation'});*!/
     }

     )
     }else {
     router.push({ path: '/404'});
     }
     },1000)
     },*/
    created: function () {
      if(this.$store.state.user.token){
        this.$router.push({path: '/courseToday'});
      }
    },
    methods: {
      signUp: function () {
        if (this.$verify.check("login")) {
          var _this = this;
          this.loginIng = true;
          var x = 1;
          setTimeout(function () {
            if (x == 1) {
              _this.$store.commit("setToken", '323hjhjh');
              var navs=[{
                id: 1,
                menuArray: [{path: '/courseToday', name: '课程列表',icon:''}, {path: '/memberBusiness', name: '会员列表',icon:''}],
                name: '业务操作',
                path: '/businessOperation',
                icon:''
              },
                {
                  id: 2,
                  menuArray: [
                    {path: '/companyManage/companySet', name: '公司设置',icon:''},
                    {path: '/companyManage/departmentSet', name: '部门设置', icon:''
                    }],
                  name: "公司管理",
                  path: '/companyManage',
                  icon:''
                },
                {
                  id: 3,
                  menuArray: [
                    {path: '/packageMange', name: '套餐管理',icon:''},
                    {path: '/activeMange', name: '活动管理',icon:''},
                    {path: '/courseMange', name: '课程管理',icon:''}],
                  name: "信息管理",
                  path: '/packageMange',
                  icon:''
                }]
              _this.$store.commit("setNavList",navs)
              if (_this.$route.query.redirect) {
                _this.$router.push({path: _this.$route.query.redirect})
                return;
              }
              _this.$router.push({path: '/courseToday'});
            } else {
              _this.$router.push({path: '/404'});
            }
          }, 1000)
        } else {
          ui.warn(this, "请输入正确的用户名和密码再登陆")
        }

      }
    }
  }
</script>
<style scoped>
  @import '../../assets/css/global.css';

  .login {
    width: 100%;
    height: 100%;
    background: url("../../assets/img/bg_login.jpg") no-repeat;
    background-size: cover;
    perspective: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loginBox {
    width: 600px;
    height: 400px;
    background-color: rgba(47, 79, 79, 0.4);
    /* position: absolute;*/
    /*left: 50%;
    top: 50%;*/
    /*transform: translate(-50%,-50%);*/
    border-radius: 5px;
  }

  .loginBox.active {
    transform: rotateX(45deg) translate(-200px, 0);
    zoom: 65%;
    box-shadow: 5px 5px 5px #000000;
  }

  .loginBox h1 {
    margin: 20px 0 0 0;
    color: #ffffff;
  }

  .login-input {
    width: 420px;
    height: 60px;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 20px;
    padding: 0 50px;
    color: #ffffff;
  }

  .username, .password {
    width: 420px;
    height: 60px;
    position: relative;
    margin: 50px auto;
  }

  .loginBox .iconfont {
    position: absolute;
    font-size: 32px;
    top: 12px;
    left: 10px;
    color: #ffffff;
  }

  .password {
    margin-top: 20px;
  }

  .loginBox button {
    padding: 10px 30px;
    font-size: 16px;
    color: #dddddd;
    background-color: #ffffff;
    letter-spacing: 2px;
    border-radius: 20px;
    cursor: pointer;
  }

  .loginBox button:hover {
    color: #ffffff;
    background-color: #00aa00;
  }

  .bar {
    text-align: left;
    margin: 5px;
    font-size: 14px;
    color: #a71d5d
  }

  .loginIng {
    width: 200px;
    height: 100px;
    box-sizing: border-box;
    font-size: 16px;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }

  .loginIng .iconfont {
    font-size: 36px;
    margin: 0 10px 0 0;
    display: block !important;
  }

  .icon-double-forward {
    font-size: 32px;
    position: absolute;
    left: 51%;
    color: #ffffff;
  }

  .ani-rotate360 {
    animation: ani-rotate360 5s 0s linear infinite;
    -webkit-animation: ani-rotate360 5s 0s linear infinite;
  }

  @-webkit-keyframes ani-rotate360 {
    0% {
      transform: rotate(0deg)
    }
    50% {
      transform: rotate(180deg)
    }
    100% {
      transform: rotate(360deg)
    }
  }

</style>
<style scoped lang="less">

</style>

