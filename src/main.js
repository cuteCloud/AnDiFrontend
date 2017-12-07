// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import store from './store/index'
/*import routersTable from './router/routers'*/
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

/*var rout= [
  {
    path: '/businessOperation',
    name: '业务操作',
    redirect: '/courseToday',
    component: routersTable.home,
    meta: { role: ['admin'] },
    children:[
      {
        path: '/courseToday',
        name: '今日课程',
        component: routersTable.BO_courseToday,
        meta: { role: ['admin'] }
      },
      {
        path: '/addCourse',
        name: '添加课程',
        component: routersTable.BO_addCourse,
        meta: { role: ['admin'] }
      },
      {
        path: '/memberBusiness',
        name: '会员业务',
        component: routersTable.BO_memberBusiness,
        meta: { role: ['admin'] }
      }
    ]
  },
  {
    path: '/companyManage',
    name: '公司管理',
    redirect: '/companyManage/companySet',
    component: routersTable.home,
    meta: { role: ['admin'] },
    children:[
      {
        path: '/companyManage/companySet',
        name: '公司设置',
        component: routersTable.CM_companySet,
        meta: { role: ['admin'] }
      },
      {
        path: '/companyManage/departmentSet',
        name: '部门设置',
        component: routersTable.CM_departmentSet,
        meta: { role: ['admin'] }
      }
    ]
  },
  {
    path: '/404',
    name: 'notFound',
    component: routersTable.notFound,
  },
  { path: '*', redirect: '/404'}
  /!* {
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
   },*!/
  /!*{
   path: '/caozuo',
   name: 'caozuo',
   component: caozuo
   }*!/
]

router.addRoutes(rout)*/
