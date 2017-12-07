<template>
	<div class="memberBusiness">
		会员业务
	</div>
</template>
<script>
  import router from '../../../../router'
  export default{
      data(){
          return{

          }
      },
    beforeRouteEnter (to, from, next) {
      var x=0;
      setTimeout(function () {
        if(x!=1){
          router.push({ path: '/404'});

        }
        next()

      },1000)
      console.log(this)
    }
  }

</script>
