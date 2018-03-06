<template>
  <div id="menuBox">
  	<ul>
  		<li v-for='(item,index) in menuList' v-on:click='clickMenu(index)'><i :class="item.className|title_class"></i><router-link :to='item.src'>{{item.title}}</router-link></li>
  	</ul>
  </div>
</template>
<script>
export default {
	name: 'menuBox',
	data () {
	    return {
	      	menuList:[{title:'首页',src:'/',className:'icon-shouye'},{title:'列表',src:'/list',className:'icon-manage'},{title:'详情',src:'/detail',className:'icon-xiangqing'},{title:'相册',src:'/photo',className:'icon-xiangce1'},{title:'日记',src:'/notes',className:'icon-icon_diary'},{title:'全球地图',src:'/map',className:'icon-weizhi'},{title:'在线观看',src:'/live',className:'icon-live'},{title:'个人中心',src:'/me',className:'icon-user'},{title:'登出',src:'/me',className:'icon-tuichu'}]
	    }
	},
	created:function(){
	},
	watch: {
      //路由监听方法
      '$route' (to, from) {
        console.log(this.$route)
      },
    },
    methods: {
        clickMenu:function(index){
        	console.log(index)
        },
    },
    filters: {
    	title_class:function(value){
    		if(value){
    			return 'iconfont '+value
    		}
    	}
    }
}
</script>
<style>
   #menuBox{
   	    background: #394a59;
   	    height: 100%;
   }
   #menuBox ul{
   		height: 100%;
   }
   #menuBox li{
   		margin-bottom: 10px;
   		color: white;
   		height: 40px;
   		line-height: 40px;
   }
   #menuBox li a{
   		text-decoration: none;
   		color: white;
   }
</style>