<template>
  <div>
    <h1>child02</h1>
    <button v-on:click="back">{{pageName}}</button>
    <div class="box">
      <myp v-bind:message="array" v-on:changeStatus = "changeSt"></myp>
      <myp v-bind:message="objA" v-on:changeStatus = "changeSt"></myp>
      <myp v-bind:message="barray" v-on:changeStatus = "changeSt"></myp>
    </div>
    <count></count>
    <router-link :to="{ name: 'child01' }">what touy ss   s s </router-link>
  </div>
</template>

<script>
  import myp from '../small.vue'
  export default {
    
    data(){
      return {
        pageName:'whiat idi ',
        conuter:100,
        array:[1,2,3,4,5,6],
        objA:[{name:'v',age:16},{name:'s',age:16},{name:'q',age:26},{name:'e',age:16}],
        barray:['a','b','c','d','e']
      }
    },
    components:{ myp ,
      'count':{
        template:'<h1 >我是局部组件</h1>'
      }
    },
    methods: {
      back: function (){
        //返回上个页面
        this.$router.go(-1)
      },
      changeSt:function(msg){
        console.log(msg)
        this.pageName = msg
      }
    }
  }
</script>
<style>
  .box{
    display: flex;
  }
</style>
