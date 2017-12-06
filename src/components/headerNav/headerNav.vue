<template>
  <div class="header">
    <div style="width: 100%;height: 100px;overflow: hidden;background-color: saddlebrown">
      <div style="width: 200px;height: 100px;float: left">

      </div>
      <div style="width: 200px;height: 100px;float: right">
      	<ul>
      		<li v-for="(nav,index) in navs" :class="cur_nav==nav.path?'active':''"  @click="switchNav(nav.path)">{{nav.name}}</li>
      	</ul>
       <!-- <router-link  :key="nav.id" :to="nav.path" @click>{{nav.name}}</router-link>-->
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        navs:[{businessOperation:[{path:'/courseToday',name:'课程列表'},{path:'/memberBusiness',name:'会员列表'}],name:'业务操作',path:'/businessOperation',id:1},
          {id:2,companyManage:[{path:'/companyManage/companySet',name:'公司设置'},{path:'/companyManage/departmentSet',name:'部门设置'}],name:"公司管理",path:'/companyManage'},
          {id:3,informationManage:[{path:'/packageMange',name:'套餐管理'},{path:'/activeMange',name:'活动管理'},{path:'/courseMange',name:'课程管理'}],name:"信息管理",path:'/courseAToday'}] ,
      }
    },
    created:function () {
     
    },
    methods:{
      switchNav:function (path) {
        this.$store.commit('setNavStatus', path);
        this.$router.push({ path: path});
      }
    },
     computed: {
      cur_nav: function () {
          return this.$store.state.navs.navStatus
      }
    },
  }
</script>
<style scoped="">
	.header a{
		text-decoration: none;
		color: #ffffff;
	}
	.header a.active{
		color: #ff0000;
	}
	ul li{
		list-style: none;
		float:left;
		color: #ffffff;
		cursor: pointer;
	}
		ul li.active{
			color: #ff0000;
		}
</style>