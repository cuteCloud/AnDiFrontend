import Vue from 'vue'
import Router from 'vue-router'
/*import HelloWorld from '@/components/HelloWorld'*/

Vue.use(Router)
const leftNav= resolve=> {
  require(['../components/leftMenu/leftMenu.vue'], resolve)
};
const home= resolve=> {
  require(['../components/home/home.vue'], resolve)
};
const headerNav= resolve=> {
  require(['../components/headerNav/headerNav.vue'], resolve)
};
const BO_courseToday= resolve=> {
  require(['../components/rightDetail/businessOperation/course/courseToday.vue'], resolve)
};
const BO_addCourse= resolve=> {
  require(['../components/rightDetail/businessOperation/course/addCourse.vue'], resolve)
};
const BO_memberBusiness= resolve=> {
  require(['../components/rightDetail/businessOperation/member/memberBusiness.vue'], resolve)
};
const CM_companySet= resolve=> {
  require(['../components/rightDetail/companyManage/companySet/companySet.vue'], resolve)
};
const CM_departmentSet= resolve=> {
  require(['../components/rightDetail/companyManage/departmentSet/departmentSet.vue'], resolve)
};
export default new Router({
  mode:'history',
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/businessOperation',
      name: 'home',
      component: home
    },
    {
      path: '/businessOperation',
      name: '业务操作',
      redirect: '/courseToday',
      component: home,
      children:[
        {
          path: '/courseToday',
          name: '今日课程',
          component: BO_courseToday
        },
        {
          path: '/addCourse',
          name: '添加课程',
          component: BO_addCourse
        },
        {
          path: '/memberBusiness',
          name: '会员业务',
          component: BO_memberBusiness
        }
      ]
    },
    {
      path: '/companyManage',
      name: '公司管理',
      redirect: '/companyManage/companySet',
      component: home,
      children:[
        {
          path: '/companyManage/companySet',
          name: '公司设置',
          component: CM_companySet
        },
        {
          path: '/companyManage/departmentSet',
          name: '部门设置',
          component: CM_departmentSet
        }
      ]
    }
   /* {
      path: '/bumen',
      name: 'bumen',
      component: bumen,
      children: [
        {
          path: 'guanli',
          name:'guanli',
          component: guanli
        },
        {
          path: 'tianjia',
          name:'tianjia',
          component: tianjia
        }
      ]
    },*/
    /*{
      path: '/caozuo',
      name: 'caozuo',
      component: caozuo
    }*/
  ]
})
