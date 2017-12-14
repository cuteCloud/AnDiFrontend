<template>
  <div class="leftMenu">
    <ul>
      <li v-for="(leftMenu,index) in leftMenusList">
        <router-link :to="leftMenu.path"><i v-if="leftMenu.icon" class="iconfont" :class="leftMenu.icon"></i>{{leftMenu.name}}<div class="sm"></div></router-link>
      </li>
      <!-- <li><router-link to="/addCourse">tianjia</router-link></li>-->
    </ul>
  </div>
</template>
<script>
  import g from '../../commonJs/g'
  export default{
    data(){
      return {
        navs: this.$store.state.navs.navList,
        leftMenusList: []
      }

    },
    mounted: function () {

    },
    created: function () {
      this.updateCurMenu()
    },
    computed: {},
    methods: {
      updateCurMenu (route) {
        route = route || this.$route
        if (route.matched.length) {
          var rootPath = route.matched[0].path
          var fullPath = route.path
          this.$store.commit('setNavStatus', rootPath);
          var routes = this.$router.options.routes
          for (var i = 0; i < this.navs.length; i++) {
            if (this.navs[i].path === rootPath) {
              this.leftMenusList = this.navs[i].menuArray
              console.log('菜单', this.leftMenusList)
              break
            }
          }
        } else {
          this.$router.push('/404')
        }
      }
    },
    watch: {
      $route (to, from) {
        this.updateCurMenu(to)
      }
    }
  }
</script>
<style scoped>
  .leftMenu ul li a{display: inline-block;width: 100%;position: relative;background-color: #474747;}
  .leftMenu ul li a.active {
    color: #ffffff;
    background-color: #E35B5A;
  }
  .leftMenu ul li{
    font-size: 14px;
    width: 100%;
    height: 45px;
    line-height: 45px;
  }
  .sm{
    display: none;
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: #ffffff;
    right: -10px;
    top: 15px;
    transform: rotate(45deg);
  }
  .leftMenu ul li a .iconfont{
    margin-right: 5px;
  }
  .leftMenu ul li a.active .sm{
    display: block;
  }
</style>
