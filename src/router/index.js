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
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children:[
        {
          path: '/courseToday',
          name: 'courseToday',
          component: BO_courseToday
        },
        {
          path: '/addCourse',
          name: 'addCourse',
          component: BO_addCourse
        },
         {
          path: '/memberBusiness',
          name: 'memberBusiness',
          component: BO_memberBusiness
        }
      ]
    },
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
