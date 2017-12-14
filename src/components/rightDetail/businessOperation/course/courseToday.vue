<template>
  <div class="courseToday">
    <h1>今日课程</h1>
    <div v-if="pagesInfo.saveButtons">保存</div>
  </div>
</template>
<script>
export default{
    data(){
        return {
          pagesInfo:{
              saveButtons:true,
              cancelButtons:true,
              addButtons:true
          }
        }
    },
 /* beforeRouteEnter (to, from, next) {
//    此时this还没被创建哟
    setTimeout(function () {
      next(
        vm=>{
          vm.pagesInfo.saveButtons=false;
        })
    },500)
  },*/
  created:function () {
    this.getCourseToday()
    console.log(this.$store.state.navs.navList)
  },
  methods:{
    getCourseToday:function () {
       this.$http.post('http://localhost:8888/apiArticles/getArticleList', {})
       .then(response => {
       if(response.data.status=='200'){
        console.log(response)
       }else{

       }
       // success callback
       }, response => {
       console.log(response)
       })
    }
  }
}
</script>
