<template>
  <div class="home">
    <header-nav></header-nav>
    <div class="leftNav">
      <left-menu></left-menu>
    </div>
    <div class="content" :style="">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>

    </div>
  </div>
</template>
<script>
  import headerNav from '../headerNav/headerNav'
  import leftMenu from '../leftMenu/leftMenu'
  export default{
      data(){
          return{

          }
      },
    components:{'header-nav':headerNav,'left-menu':leftMenu},
    create:function () {

    }
  }
</script>
<style>
  @import '../../assets/css/global.css';
  body,html,#app,.home{
    width: 100%;
    height: 100%;
  }
  body{
    min-width: 1200px;
  }
  .leftNav{
    height:-webkit-calc(100% - 60px); height: calc(100% - 60px);
    width: 190px;
    float:left;
    background-color: #3D3D3D;
    position: relative;
    z-index: 10;

  }
  .content{
    position: relative;
    z-index: 10;
    margin-left: 190px;
    height:-webkit-calc(100% - 60px); height: calc(100% - 60px);
    background-color: #ffffff;
  }
</style>
