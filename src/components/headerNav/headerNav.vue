<template>
  <div id="header">
    <div style="width: 100%;height: 100px;overflow: hidden;background-color: saddlebrown">
      <div style="width: 200px;height: 100px;float: left">

      </div>
      <div style="width: 200px;height: 100px;float: right">
       <!-- <router-link to="/businessOperation">业务操作</router-link>
        <router-link to="/informationManage">信息管理</router-link>
        <router-link to="/companyManage">信息管理</router-link>-->
        <router-link v-for="nav in navs" to="" @click.native="linkChange(nav.path)">{{nav.name}}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        navs:[{businessOperation:[{path:'/courseToday',name:'课程列表'},{path:'/memberList',name:'会员列表'}],name:'业务操作',path:'/courseToday'},
          {companyManage:[{path:'/companySet',name:'公司设置'},{path:'/departmentSet',name:'部门设置'}],name:"公司管理",path:'/courseC'},
          {informationManage:[{path:'/packageMange',name:'套餐管理'},{path:'/activeMange',name:'活动管理'},{path:'/courseMange',name:'课程管理'}],name:"信息管理",path:'/courseAToday'}] ,
      }
    },
    create:function () {

    },
    methods:{
      linkChange:function (path) {
        this.$router.push({ path: path});
      }
    }
  }
</script>
