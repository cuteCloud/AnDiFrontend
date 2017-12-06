<template>
    <div>
      <ul>
        <li v-for="(leftMenu,index) in leftMenusList"><router-link :to="leftMenu.path" >{{leftMenu.name}}</router-link></li>
       <!-- <li><router-link to="/addCourse">tianjia</router-link></li>-->
      </ul>
    </div>
</template>
<script>
  export default{
    data(){
      return{
        navs:[{id:1,menuArray:[{path:'/courseToday',name:'课程列表'},{path:'/memberBusiness',name:'会员列表'}],name:'业务操作',path:'/businessOperation'},
          {id:2,menuArray:[{path:'/companyManage/companySet',name:'公司设置'},{path:'/companyManage/departmentSet',name:'部门设置'}],name:"公司管理",path:'/companyManage'},
          {id:3,menuArray:[{path:'/packageMange',name:'套餐管理'},{path:'/activeMange',name:'活动管理'},{path:'/courseMange',name:'课程管理'}],name:"信息管理",path:'/packageMange'}] ,
        	leftMenusList:[]
      }

    },
     mounted: function () {

    },
    created:function () {
      this.updateCurMenu()
    },
    computed: {
   
    },
    methods:{
      updateCurMenu (route) {
        route = route || this.$route
        console.log("route",route)
        if (route.matched.length) {
          var rootPath = route.matched[0].path
          var fullPath = route.path
          console.log("rootPath",rootPath,"fullPath",fullPath,"navsStatus",this.$store.state.navs.navStatus)
          this.$store.commit('setNavStatus', rootPath);
          var routes = this.$router.options.routes
          console.log("routes",routes)
          for (var i = 0; i < this.navs.length; i++) {
            if (this.navs[i].path === rootPath) {
              this.leftMenusList = this.navs[i].menuArray
              console.log('菜单',this.leftMenusList )
              break
            }
          }
        } else {
          this.$router.push('/404')
        }
      },
      updateLeftMenus(){

          console.log("23232",this.$route)
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
	a{
		color: #ffffff;
		text-decoration: none;
	}
	ul li a.active{
		color: #ff0000;
	}
</style>
