<!-- <template>
  <div class="hello">
    <h1>page05</h1>
    <span>测试传入多个query参数</span>
    <h2> {{ $route.query.name }} </h2>
    <h2> {{ $route.query.type }} </h2>
  </div>
</template>

<script>
    export default {
      mounted: function(){
        console.log(this.$route)
      }
    }
</script>
 -->
<template>
  <div class="hello">
    <h1>page03</h1>
    <span v-html="msg" :isd='msg'>{{msg}}</span>
    <a :href = 'url' >sendTo</a>
    <span>{{nnn.mm}}{{nnn.nn}}</span>
    <button @click.prevent='change' :disabled='istrue'>change</button>
  </div>
</template>
<script>
  var nnn = {
    mm:'111',
    nn:'222'
  }
  Object.freeze(nnn)
  export default{
    data(){
      return{
        msg:'just for me',
        istrue:false,
        url:'https://www.baidu.com',
        nnn
      }
    },
    created(){
      const p = {
        name:'ss',
        age:'222'
      }
      const k = {
        ...p,
        mm:'sssx'
      }
      console.log(k)
    },
    methods:{
      change:function(){
        this.msg = '<sapn>hhhhh</span><p>xxx</p>'
        this.istrue = true
        this.url = 'https://www.sina.com'
        this.nnn.nn = 'sssss'
      }
    }
  }
</script>