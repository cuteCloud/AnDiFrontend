<template>
  <div>
    <ul>
      <li v-for="(leftMenu,index) in leftMenusList">
        <router-link :to="leftMenu.path">{{leftMenu.name}}</router-link>
      </li>
      <li @click="clearCookie">清楚cookie</li>
      <!-- <li><router-link to="/addCourse">tianjia</router-link></li>-->
    </ul>
  </div>
</template>
<script>
  import g from '../../commonJs/g'
  export default{
    data(){
      return {
        navs: [{
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
          }],
        leftMenusList: []
      }

    },
    mounted: function () {

    },
    created: function () {
      this.updateCurMenu()
      console.log("打印token",this.$store.state.user.token)
      this.$http.post('http://localhost:8888/apiArticles/getArticleList', {})
        .then(response => {
          if(response.data.status=='200'){
            console.log(response)
          }else{

          }
          // success callback
        }, response => {
          console.log(response)
        })
    },
    computed: {},
    methods: {
      updateCurMenu (route) {
        route = route || this.$route
        console.log("route", route)
        if (route.matched.length) {
          var rootPath = route.matched[0].path
          var fullPath = route.path
          console.log("rootPath", rootPath, "fullPath", fullPath, "navsStatus", this.$store.state.navs.navStatus)
          this.$store.commit('setNavStatus', rootPath);
          var routes = this.$router.options.routes
          console.log("routes", routes)
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
      },
      updateLeftMenus(){
        console.log("23232", this.$route)
      },
      clearCookie(){
        console.log("232")
        g.Cookie.cancel('token')
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
  a {
    color: #ffffff;
    text-decoration: none;
  }

  ul li a.active {
    color: #ff0000;
  }
</style>
