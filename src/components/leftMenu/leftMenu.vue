<template>
    <div>
      <ul>
        <li v-for="(leftMenu,index) in leftMenusList" :class="index==leftStatus?'active':''"><router-link   to="" @click.native="changeContent(leftMenu.path,index)">{{leftMenu.name}}</router-link></li>
       <!-- <li><router-link to="/addCourse">tianjia</router-link></li>-->
      </ul>
    </div>
</template>
<script>
  export default{
    data(){
      return{
        navs:[{businessOperation:[{path:'/courseToday',name:'课程列表'},{path:'/memberBusiness',name:'会员业务'}],name:'业务操作'},
          {companyManage:[{path:'/companySet',name:'公司设置'},{path:'/departmentSet',name:'部门设置'}],name:"公司管理"},
          {informationManage:[{path:'/packageMange',name:'套餐管理'},{path:'/activeMange',name:'活动管理'},{path:'/courseMange',name:'课程管理'}],name:"信息管理"}]
      }
    },
     mounted: function () {
    /* this.leftMenusList=this.navs[0].businessOperation;
			console.log(this.leftMenusList)*/
    },
    create:function () {

      console.log(this.$store.state.leftMenus.leftMenusStatus)
    },
    computed: {
      leftStatus: function () {
        return this.$store.state.leftMenus.leftMenusStatus||0
      },
      leftMenusList: function () {
          console.log("3232",this.$store.state.leftMenus.leftMenusList)
          return this.$store.state.leftMenus.leftMenusList
      },
    },
    methods:{
    	changeContent(path,index){
        this.$store.commit('setLeftMenusStatus', index);
        this.$router.push({ path: path});
        console.log(this.$store.state.leftMenus)
    	}
    }
  }
</script>
<style scoped>
	a{
		color: #ffffff;
		text-decoration: none;
	}
	ul li.active a{
		color: #ff0000;
	}
</style>
