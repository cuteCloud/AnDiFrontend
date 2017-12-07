var routersTable={
leftNav: resolve=> {
    require(['../components/leftMenu/leftMenu.vue'], resolve)
  },
 home: resolve=> {
  require(['../components/home/home.vue'], resolve)
},
 headerNav: resolve=> {
  require(['../components/headerNav/headerNav.vue'], resolve)
},
 login:resolve=> {
  require(['../components/login/login.vue'], resolve)
},
 notFound: resolve=> {
  require(['../components/404.vue'], resolve)
},
BO_courseToday: resolve=> {
  require(['../components/rightDetail/businessOperation/course/courseToday.vue'], resolve)
},
 BO_addCourse:resolve=> {
  require(['../components/rightDetail/businessOperation/course/addCourse.vue'], resolve)
},
BO_memberBusiness: resolve=> {
  require(['../components/rightDetail/businessOperation/member/memberBusiness.vue'], resolve)
},
 CM_companySet:resolve=> {
  require(['../components/rightDetail/companyManage/companySet/companySet.vue'], resolve)
},
CM_departmentSet: resolve=> {
  require(['../components/rightDetail/companyManage/departmentSet/departmentSet.vue'], resolve)
},

}
export default routersTable
