<template>
  <div class="bumen" style="position: relative">
    <div class="left" style="width: 120px;height: 400px;background-color: silver;box-sizing: border-box;z-index: 11;position: relative">
      <ul>
        <li style="position: relative"><router-link to="/bumen/guanli">guanli</router-link><div style="position: absolute;left: 94px;top: 0px">
          sssss
        </div></li>
        <li> <router-link to="/bumen/tianjia">tianjia</router-link></li>
      </ul>


    </div>
    <div class="right" style="position: absolute;left: 120px;right: 0;height: 400px;background-color: #1e8b10;box-sizing: border-box;top:0px;z-index: 10">
      <router-view/>
    </div>
  </div>
</template>
<script>
  export default{
      data(){
          return {

          }
      }
  }
</script>
