<template>
  <div class="header clearfix">
      <div class="logo">
        <img src="../../assets/img/icon_logo.png">自学Vue
      </div>
      <div class="mainMenu">
        <ul>
          <li v-for="(nav,index) in navs" :class="cur_nav==nav.path?'active':''"  @click="switchNav(nav.path)">{{nav.name}}</li>
        </ul>
      </div>
      <div class="rightInfo">
        <img class="photo" src="../../assets/img/default_photo.png">
        <p class="name">admin</p>
        <el-dropdown @command="hdrop" trigger="click" size="medium">
          <span class="el-dropdown-link"><i class="el-icon-arrow-down el-icon--right"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="loginOut"><i class="iconfont icon-tuichu"></i>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
  </div>
</template>
<script>
  import ui from '../../commonJs/ui';
  export default{
    data(){
      return{
        navs:this.$store.state.navs.navList ,
      }
    },
    created:function () {

    },
    methods:{
      switchNav:function (path) {
        this.$store.commit('setNavStatus', path);
        this.$router.push({ path: path});
      },
      hdrop(command) {
        switch (command){
          case 'loginOut':this.loginOut();break;
          default :
        }
      },
      loginOut(){
          var _this=this;
        ui.confirm(this,'确定要退出吗？',function () {
          _this.$store.commit("clearAllUser");
          _this.$router.push({path:'/login'})
        },'提示信息')

      }
    },
     computed: {
      cur_nav: function () {
          return this.$store.state.navs.navStatus
      }
    },
  }
</script>
<style scoped>

  .header{
    width: 100%;
    height: 60px;
    background-color: #1F1F1F;
    position: relative;
    z-index: 50;
  }
  .mainMenu{
    font-size: 16px;
    color: #BFCBD9;
    box-sizing: border-box;
    margin-left: 190px;
    margin-right: 200px;
  }
	.mainMenu ul li{
		list-style: none;
		float:left;
		cursor: pointer;
    min-width: 100px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    margin-left: 50px;
    box-sizing: border-box;
	}
  .mainMenu ul li:hover{
    border-bottom:5px solid #f2784b ;
  }
	.mainMenu	ul li.active{
			color: #f2784b;
    border-bottom:5px solid #f2784b ;
		}
  .logo{
    box-sizing: border-box;
    width: 190px;
    height: 60px;
    float: left;
    display: flex;
    align-items: center;
    color: #ffffff;
    font-size: 14px;
  }
  .logo img{
    cursor: pointer;
    height: 40px;
    margin:0 10px 0 20px ;
  }
  .rightInfo{
    box-sizing: border-box;
    float: right;
    width: 200px;
    height: 60px;
  /*  background-color: #a71d5d;*/
    display: flex;
    font-size: 14px;
    align-items: center;
    color: #7C9090;
  }
  .rightInfo .photo{
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin: 0 10px;
  }
  .rightInfo .name{
    margin-right: 5px;
  }
  .rightInfo .getMore{
    position: absolute;
    padding: 20px;
    background-color: #00aa00;
    height: 100px;
    top: 20px;
  }
  .el-dropdown-menu{
    border-radius: 0px;
  }
  .el-dropdown-link{cursor: pointer;}
  .icon-tuichu{margin: 0 10px 0 0;}
  .el-dropdown-menu--medium .el-dropdown-menu__item{
    line-height: 40px;
  }
  .el-dropdown-menu--medium{
    padding: 0;
  }
  .el-dropdown-menu__item:hover{
    background-color: #F6F6F6;

  }
</style>
