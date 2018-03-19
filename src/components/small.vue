<template>
	<div class="bii">
		<button v-on:click="counter += 1">{{ counter }}</button>
		<div v-for='item in message' >
			{{typeof(item)=='object'?item.name:item}}
		</div>
		<button v-on:click="change">{{ counter }}</button>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				counter:0,
				msg:'fuck'
			}
		},
		props:['message'],
		created(){
			console.log(this.message)
		},
		computed:{
			
		},
		methods:{
			change:function(){
				 this.$emit('changeStatus',this.msg)
			}
		}
	}
</script>
<style>
	.bii{
		width: 200px;
		height: 200px;
		background:red;
	}
</style>