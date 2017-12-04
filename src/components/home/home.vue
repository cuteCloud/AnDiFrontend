<template>
  <div class="home">
    <header-nav></header-nav>
    <div class="leftNav">
      <left-menu></left-menu>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import headerNav from '../headerNav/headerNav'
  import leftMenu from '../leftMenu/leftMenu'
  export default{
      data(){
          return{}
      },
    components:{'header-nav':headerNav,'left-menu':leftMenu},
    create:function () {

    }
  }
</script>
<style>
  body,html,#app,.home{
    width: 100%;
    height: 100%;
  }
  body{
    min-width: 1200px;
  }
  .leftNav{
    height:-webkit-calc(100% - 100px); height: calc(100% - 100px);
    width: 120px;
    background-color: #00a0e9;
    position: relative;
    z-index: 100;

  }
  .content{
    position: absolute;
    left: 120px;
    right: 0;
    top: 100px;
    height:-webkit-calc(100% - 100px); height: calc(100% - 100px);
    background-color: darkgrey;
  }
</style>
