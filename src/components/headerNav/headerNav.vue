<template>
  <div id="header">
    <div style="width: 100%;height: 100px;overflow: hidden;background-color: saddlebrown">
      <div style="width: 200px;height: 100px;float: left">

      </div>
      <div style="width: 200px;height: 100px;float: right">
       <!-- <router-link to="/businessOperation">业务操作</router-link>
        <router-link to="/informationManage">信息管理</router-link>
        <router-link to="/companyManage">信息管理</router-link>-->
        <router-link v-for="(nav,index) in navs" :key="nav.id" to="" @click.native="linkChange(nav.path,nav.id)">{{nav.name}}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        navs:[{businessOperation:[{path:'/courseToday',name:'课程列表'},{path:'/memberBusiness',name:'会员列表'}],name:'业务操作',path:'/courseToday',id:1},
          {id:2,companyManage:[{path:'/companySet',name:'公司设置'},{path:'/companyManage/departmentSet',name:'部门设置'}],name:"公司管理",path:'/companySet'},
          {id:3,informationManage:[{path:'/packageMange',name:'套餐管理'},{path:'/activeMange',name:'活动管理'},{path:'/courseMange',name:'课程管理'}],name:"信息管理",path:'/courseAToday'}] ,
      }
    },
    created:function () {
      /*this.$store.commit('setLeftMenusList', this.navs[0].businessOperation)*/
    },
    methods:{
      linkChange:function (path,id) {
        switch (id){
          case 1: this.$store.commit('setLeftMenusList', this.navs[0].businessOperation);break;
          case 2: this.$store.commit('setLeftMenusList', this.navs[1].companyManage);break;
          case 3: this.$store.commit('setLeftMenusList', this.navs[2].informationManage);break;
          default :this.$store.commit('setLeftMenusList', this.navs[0].businessOperation);
        }
        this.$router.push({ path: path});
        this.$store.commit('setLeftMenusStatus', 0);


      }
    }
  }
</script>
