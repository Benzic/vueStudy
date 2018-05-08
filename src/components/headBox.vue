<template>
  <div id="headBox">
  	<div class="logo">Logo</div>
  	<div class="hideMenu iconfont icon-caidan" @click='hideMenu'></div>
  	<div class="serachBox"></div>
  	<div class="headNav">22</div>
  	<div class="userBox">22</div>
  </div>
</template>
<script>
export default {
	name: 'headBox',
	data () {
	    return {
	      	
	    }
	},
	props:['show'],
	created:function(){
	},
	watch: {
      //路由监听方法
      '$route' (to, from) {
        console.log( this.$route)
      },
    },
    methods: {
    	hideMenu:function(){
    		this.$emit('changeStatus')
    	}
    }
}
</script>
<style>
   	#headBox{
	   	display: flex;
	   	height: 100%;
	   	background: #399bff;
   	}
   	#headBox div{
   		height: 100%;
   		text-align: center;
   		line-height: 60px;
   		vertical-align:middle
   	}
   	.logo{
   		font-size: 35px;
   		font-weight: bold;
   		color: white;
   		width: 250px;
   	}
   	.hideMenu{
   		width: 60px;
   		font-size: 30px;
   		color: white;
   	}
   	.hideMenu:hover{
		background: #D5EAFF;
		cursor: pointer;
   	}
   	.serachBox{
   		width:250px;
   	}
   	.headNav{
   		width: 250px;
   	}
   	.userBox{
   		flex: 1;
   	}
</style>