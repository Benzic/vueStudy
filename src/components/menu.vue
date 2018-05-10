<template>
  <div id="menuBox">
  	<ul>
  		<li v-for='(item,index) in menuList' v-on:click='clickMenu(index)'>
				<div  v-if='item.src'>
					<i :class="item.className|title_class"></i>
					<router-link :to='item.src' >{{item.title}}</router-link>
				</div>
				<div v-else>
					<i :class="item.className|title_class"></i>
					<span @click='showSon(index)'>{{item.title}}</span>
					<div v-for='(it,ind) in item.son' v-if='showIndex == index'>
							<i :class="it.className|title_class"></i>
							<router-link :to='it.src' >{{it.title}}</router-link>
					</div>
				</div>
			</li>
  	</ul>
  </div>
</template>
<script>
export default {
	name: 'menuBox',
	data () {
	    return {
					showIndex:0,
					menuList:[{title:'首页',src:'/',className:'icon-shouye'},
					{title:'个人中心',src:'/me',className:'icon-manage'},
					{title:'文章管理',className:'icon-xiangqing',
						son:[{
								title:'文章列表',src:'/artList',className:'icon-xiangce1'
							},
							{
								title:'新增文章',src:'/newArtcle',className:'icon-xiangce1'
							},
							{
								title:'已删除',src:'/deletedArt',className:'icon-xiangce1'
							}]	
					},
					{title:'相册管理',className:'icon-xiangce1',
						son:[{
							title:'所有图片',src:'/pictures',className:'icon-xiangce1'
						},
						{
							title:'已删除',src:'/deletedPhoto',className:'icon-xiangce1'
						}]
					},
					{title:'demo管理',className:'icon-icon_diary',
						son:[{
									title:'demo列表',src:'/demoList',className:'icon-xiangce1'
								},
								{
									title:'新增demo',src:'/addDemo',className:'icon-xiangce1'
								},
								{
									title:'已删除',src:'/deletedDemo',className:'icon-xiangce1'
								}]	
					},
					{title:'留言管理',className:'icon-weizhi',
						son:[{
									title:'留言列表',src:'/artList',className:'icon-xiangce1'
								},
								{
									title:'已删除',src:'/deletedArt',className:'icon-xiangce1'
								}]	
					},
					{title:'登出',src:'/logout',className:'icon-tuichu'}]
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
			showSon (index) {
				if(this.showIndex == index){
					this.showIndex = 0
				}else{
					this.showIndex = index
				}
			}
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
   		line-height: 40px;
   }
   #menuBox li a{
   		text-decoration: none;
   		color: white;
   }
</style>