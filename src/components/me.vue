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
    <span>{{reverMSG}}</span>
    <a href="">{{reverMSG}}</a>
    <li>{{reverMSG}}</li>
    {{fullName}}
    <input type="text" v-model='firstName'>
    <input type="text" v-model='lastName' @keyup.13='ll'>
    <div v-for='n in even'>{{n}}</div>
    <div v-for='n in 10'>{{n}}</div>
    <div v-if='istrue'><input type="text" value='just' key='01'></div>
    <div v-if='!istrue'><input type="text" value='me' key='02'></div>
    <button @click.prevent='change' >change</button>
    <button v-on:click="ll('mdmasdmasm',$event)">co</button>
  </div>
</template>
<script>
  var nnn = {
    mm:'111',
    nn:'222'
  }
  export default{
    data(){
      return{
        msg:'just for me',
        istrue:false,
        url:'https://www.baidu.com',
        nnn,
        firstName:'zhao',
        lastName:'huan',
        fullName:'zhao huan',
        fata:[1,23,4,5,6]
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
      this.fata[2] = 44
      console.log(this.fata)
    },
    watch:{
      //异步请求改变数据可用
      lastName:function(val){
          this.fullName = this.firstName+' '+val
      },
      firstName:function(val){
        this.fullName = val+' '+this.lastName
      }
    },
    computed:{
      //计算属性不需要（）就可调用方法
      reverMSG:{
          get:function(){
            this.msg = 'xxxxxxxxxasd'
            return this.msg.split('').reverse().join('')
          },
          set:function(val){

            console.log(val)
          }
        },
        even:function(){
          return this.fata.filter(function (number) {
            return number % 2 != 0
          })
        }
    },
    methods:{
      change:function(){
        if(!this.istrue){
          this.msg = '<sapn>hhhhh</span><p>xxx</p>'
          this.istrue = true
          this.url = 'https://www.sina.com'
          this.nnn.nn = 'sssss'
          this.fullName = 'nnnn mmmm'
        }else{
          this.msg = '<sapn>xxx</span><p>das</p>'
          this.istrue = false
          this.url = 'https://www.tencent.com'
          this.nnn.nn = '1234'
          this.fullName = '555 777'
        }
        
      },
      ll:function(msg,event){
          console.log(msg,event)
      }
    }
  }
</script>