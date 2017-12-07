<template>
  <div>
    登陆
  </div>
</template>
<script>
  import router from '../../router'
  export default{
      data(){
          return{

          }
      },
    beforeRouteEnter (to, from, next) {
          var x=1;
          setTimeout(function () {
              if(x==1){
                next(function () {
                  router.push({ path: '/businessOperation'});
                })
              }else {
                router.push({ path: '/404'});
              }

          },1000)
      console.log(this)
    },
    created:function () {
      var asyRouters=[
          {
            path: '/businessOperation',
            name: '业务操作',
            redirect: '/courseToday',
            children:[
              {
                path: '/courseToday',
                name: '今日课程',
                component: '../../components/rightDetail/businessOperation/course/courseToday.vue',
              },
              {
                path: '/addCourse',
                name: '添加课程',
                component: '../../components/rightDetail/businessOperation/course/addCourse.vue',
              },
              {
                path: '/memberBusiness',
                name: '会员业务',
                component: '../../components/rightDetail/businessOperation/member/memberBusiness.vue',
              }
            ]
          },
          {
            path: '/companyManage',
            name: '公司管理',
            redirect: '/companyManage/companySet',
            children:[
              {
                path: '/companyManage/companySet',
                name: '公司设置',
                component:'../../components/rightDetail/companyManage/companySet/companySet.vue',
              },
              {
                path: '/companyManage/departmentSet',
                name: '部门设置',
                component: '../../components/rightDetail/companyManage/departmentSet/departmentSet.vue',
              }
            ]
          },
          {
            path: '/404',
            name: 'notFound',
            component: '../../components/404.vue',
          },
          { path: '*', redirect: '/404'}
      ]
      /*this.$store.commit('setAsyRouters',asyRouters)*/
    }
  }
</script>
