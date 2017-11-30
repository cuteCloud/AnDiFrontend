import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const leftNav= resolve=> {
  require(['../components/leftNav/leftNav.vue'], resolve)
};
const topNav= resolve=> {
  require(['../components/topNav/topNav.vue'], resolve)
};
const BO_course= resolve=> {
  require(['../components/rightDetail/businessOperation/course/courseToday.vue'], resolve)
};
const BO_addCourse= resolve=> {
  require(['../components/rightDetail/businessOperation/course/addCourse.vue'], resolve)
};
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'bumen',
      component: bumen
    },
    {
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
    },
    {
      path: '/caozuo',
      name: 'caozuo',
      component: caozuo
    }
  ]
})
