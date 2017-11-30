<template>
  <div id="app">
    <div style="width: 100%;height: 100px;overflow: hidden;background-color: saddlebrown">
      <div style="width: 200px;height: 100px;float: left">

      </div>
      <div style="width: 200px;height: 100px;float: right">
        <router-link to="/businessOperation">业务操作</router-link>
        <router-link to="/informationManage">信息管理</router-link>
        <router-link to="/companyManage">信息管理</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>
