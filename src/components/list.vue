<!-- <template>
  <div class="hello">
    <h1>page02</h1>
    <span>获取动态路由的参数数据：{{ $route.params.id }}</span>
  </div>
</template> -->
<template>
  <div class="lists">
  	<div class="serachArea">
  		<div class="keyS"><span>关键字搜索</span><input type="text" @keyup.enter="serachKey($event,keyWords)" v-model="keyWords"></div>
  		<div class="coverS"><span>空气质量搜索</span>
  				<select v-model="keySearch" @change="changeVal">
            <option value ="10" >优</option>
            <option value ="60" >良</option>
            <option value ="110" >轻度污染</option>
            <option value ="210" >重度污染</option>
            <option value ="160" >中度污染</option>
            <option value ="20" >优及以下</option>
            <option value ="40" >良及以上</option>
            <option value ="70" >良及以下</option>
            <option value ="120" >轻度污染及以上</option>
            <option value ="170" >中度污染及以上</option>
            <option value ="90" >轻度污染及以下</option>
            <option value ="140" >中度污染及以下</option>
          </select>
        </div>
        <button @click='subKey'>确认</button>
  	</div>
  	<div class="listBox">
      <table border="1">
        <thead>
          <tr>
            <th>全选<input type="checkbox" name="vehicle" value="Car" :checked="checkAll" @click='chooseAll'/></th>
            <th @click='city'>城市</th>
            <th @click='local'>位置坐标</th>
            <th @click='pm'>pm2.5</th>
            <th @click='statusPm'>污染情况</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='(item,index) in allCity'>
            <th style="width:5%"><input type="checkbox" name="vehicle" value="Car" :checked="item.isChecked" @click='chooseOne(index)'/></th>
            <th style="width:10%"><span v-show="item.isReMe!=1" @dblclick="canChange(1,index)">{{item.name}}</span><input type="text" v-if="item.isReMe==1" :value="item.name" v-focus></th>
            <th style="width:30%"><span v-show="item.isReMe!=2" @dblclick="canChange(2,index)">{{item.local}}</span><input type="text" v-if="item.isReMe==2" :value="item.local" v-focus></th>
            <th style="width:20%"><span v-show="item.isReMe!=3" @dblclick="canChange(3,index)">{{item.value}}</span><input type="text" v-if="item.isReMe==3" :value="item.value" v-focus></th>
            <th style="width:15%">{{item.value>=200?'重度污染':item.vlaue>=150?'中度污染':item.value>=100?"轻度污染":item.value>=50?"良":"优"}}</th>
            <th style="width:20%"><button @click='showModal(index)'>查</button><button @click='del'>删</button></th>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>新增</td>
          </tr>
        </tfoot>
      </table>
  		<div class="status"></div>
  	</div>
    <div class="showModal" v-if='showModals'>
      <p>数据展示</p>
      <div class="ciName">{{seeC.name}}</div>
      <div class="ciLocal">{{seeC.local}}</div>
      <div class="ciValue">{{seeC.value}}</div>
      <div class="ciValue">{{seeC.value>=200?'重度污染':seeC.vlaue>=150?'中度污染':seeC.value>=100?"轻度污染":seeC.value>=50?"良":"优"}}</div>
      <button @click='cutDownModal'>关闭</button>
    </div>
  </div>
</template>
<script>
  import data from '../assets/allCity.json'
  import pmData from '../assets/pmData.json'
  export default {
  name: 'headBox',
  data () {
      return {
         keyWords:'abc',
         checkAll:false,
         allCity:[],
         seeC:{},
         showModals:false,
         keyWords:'',
         keyData:'',
         keySearch:'',
         originData:[],
         cityRoll:false,
         pmRoll:false
      }
  },
  created:function(){
    for(var key in data){
      for(var i=0;i<=pmData.length-1;i++){
        if(pmData[i].name==key){
            pmData[i].local = data[key]
            pmData[i].isChecked = false
            pmData[i].isReMe = 0
        }
      }
    }
    this.allCity = pmData
  },
  watch: {
      //路由监听方法
      '$route' (to, from) {
        console.log(this.$route)
      },
    },
    methods: {
      chooseAll:function(){
        if(this.checkAll == true){
          let allCity = this.allCity
          for(let i=0;i<=allCity.length-1;i++){
            allCity[i].isChecked = false
          }
          this.allCity = allCity
          this.checkAll = false
        }else{
          let allCity = this.allCity
          for(let i=0;i<=allCity.length-1;i++){
            allCity[i].isChecked = true
          }
          this.allCity = allCity
          this.checkAll = true
        }
      },
      canChange:function(val,index){
          switch(val){
            case 1:
              this.changeSta(1,index)
              break;
            case 2:
              this.changeSta(2,index)
              break;
            case 3:
              this.changeSta(3,index)
              break;
            default:
              console.log('error')
          }
      },
      changeSta:function(sta,index){
          let allData = this.allCity
          for(let i = 0;i<=allData.length-1;i++){
            if(i==index){
              allData[index].isReMe = sta
            }else{
              allData[i].isReMe = 0
            }
          } 
          this.allCity = allData
      },
      chooseOne:function(index){
          let allData = this.allCity
          if(allData[index].isChecked == true){
            allData[index].isChecked = false
          }else{
            allData[index].isChecked = true
          }
          this.allCity = allData
      },
      del:function(){
          let allData = this.allCity
          let newData = []
          for(var i = 0;i<=allData.length-1;i++){
              if(allData[i].isChecked==true){
                delete allData[i]
              }
          }
          for(var i = 0;i<=allData.length-1;i++){
              if(allData[i]){
                newData.push(allData[i])
              }
          }
          this.allCity = newData
      },
      reload:function(){

      },
      showModal:function(index){
        console.log(this)
        this.showModals = true
        this.seeC = this.allCity[index]
      },
      cutDownModal:function(){
        this.showModals = false
      },
      serachKey (ev,val) {
          if(this.originData.length==0){
            this.originData = this.allCity
            var allCitys = this.allCity
          }else {
            var allCitys = this.originData
          }
          let newa = []
          for(let i = 0;i <= allCitys.length-1;i++){
              if(allCitys[i].name.indexOf(val)!=-1){
                  newa.push(allCitys[i])
              }else if(allCitys[i].value==val){
                newa.push(allCitys[i])
              }
          }
          this.allCity = newa
      },
      changeVal(){
          console.log(this.keySearch)
          switch (parseInt(this.keySearch)){
            case 10:
              this.findData(0,50)
              break;
            case 20:
              this.findData(0,10000)
              break;
            case 40:
              this.findData(0,100)
              break;
            case 60:
              this.findData(50,100)
              break;
            case 70:
              this.findData(50,10000)
              break;
            case 90:
              this.findData(0,150)
              break;
            case 110:
              this.findData(100,150)
              break;
            case 120:
              this.findData(100,10000)
              break;
            case 140:
              this.findData(0,200)
              break;
            case 160:
              this.findData(150,200)
              break;
            case 170:
              this.findData(150,10000)
              break;
            case 210:
              this.findData(200,10000)
              break;
            default:
              console.log('error')
        }
      },
      findData:function(fval,enal){
        if(this.originData.length==0){
          this.originData = this.allCity
          var allCityF = this.allCity 
        }else {
          var allCityF = this.originData
        }
        let newd = []
        for(let i = 0;i<=allCityF.length-1;i++){
          if(allCityF[i].value>fval&&allCityF[i].value<enal){
            newd.push(allCityF[i])
          }
        }
        this.allCity = newd
      },
      city:function(){
        var kk = this.allCity
        kk.sort(function(a,b){
            return b.name-a.name
        })
        console.log(kk)
      },
      local:function(){
        if(this.cityRoll==false){
          this.allCity.sort(function(a,b){
              return b.local[0]-a.local[0]
          })
          this.cityRoll=true
        }else{
          this.allCity.sort(function(a,b){
              return a.local[0]-b.local[0]
          })
          this.cityRoll=false
        }
      },
      pm:function(){
        if(this.pmRoll==false){
          this.allCity.sort(function(a,b){
              return b.value-a.value
          })
          this.pmRoll=true
        }else{
          this.allCity.sort(function(a,b){
              return a.value-b.value
          })
          this.pmRoll=false
        }
      },
      statusPm:function(){

      },
      subKey:function(){
        this.serachKey(this,this.keyWords)
      }
    }
}
</script>
<style>
	.serachArea{
		display: flex;
	}
  .lists{
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  table{
    width: 100%;
    height: 100%;
  }
  thead{
    width: 100%;
    height: 100%;
  }
  tfoot{
    width: 100%;
    height: 100%;
  }
  tbody{
    width: 100%;
    height: 100%;
  }
  tbody input{
    width: 100%;
    height: 100%;
    display: block;
    border:none;
    text-align: center;
  }
  .showModal{
    position: fixed;
    left: 50%;
    top: 50%;
    width: 20%;
    height: 200px;
    border-radius: 20px;
    background: white;
    margin-left: -10%;
  }
</style>