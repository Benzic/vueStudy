<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="name" >
          <div class="default" v-if="key!='name'" @dblclick='clickItem("name")'>
            {{form.name}}
          </div>
          <el-input v-model="form.name" v-if="key=='name'"  @blur='normol()'></el-input>
        </el-form-item>
        <el-form-item label="address" >
          <div class="default" v-if="key!='address'" @dblclick='clickItem("address")'>
              {{form.address}}
          </div>
          <el-input v-model="form.address" v-if="key=='address'" @blur='normol()'></el-input>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-col :span="11">
              <span class="dateData">{{form.date1}}</span><el-date-picker class="date" type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="job">
          <div class="default" v-if="key!='job'" @dblclick='clickItem("job")'>
              {{form.job}}
          </div>
          <el-input v-model="form.job" v-if="key=='job'" @blur='normol()'></el-input>
        </el-form-item>
        <el-form-item label="phone">
          <div class="default" v-if="key!='phone'" @dblclick='clickItem("phone")'>
              {{form.phone}}
          </div>
          <el-input v-model="form.phone" v-if="key=='phone'" @blur='normol()'></el-input>
        </el-form-item>
        <el-form-item label="微信号">
          <div class="default" v-if="key!='微信号'" @dblclick='clickItem("微信号")'>
              {{form.wxchat}}
          </div>
          <el-input v-model="form.wxchat" v-if="key=='微信号'" @blur='normol()'></el-input>
        </el-form-item>
        <el-form-item label="email">
          <div class="default" v-if="key!='email'" @dblclick='clickItem("email")'>
              {{form.email}}
          </div>
          <el-input v-model="form.email" v-if="key=='email'" @blur='normol()'></el-input>
        </el-form-item>
        <el-form-item label="个人网站">
          <div class="default" v-if="key!='个人网站'" @dblclick='clickItem("个人网站")'>
              {{form.website}}
          </div>
          <el-input v-model="form.website" v-if="key=='个人网站'" @blur='normol()'></el-input>
        </el-form-item>
        <el-form-item label="gitHub">
          <div class="default" v-if="key!='gitHub'" @dblclick='clickItem("gitHub")'>
              {{form.github}}
          </div>
          <el-input v-model="form.github" v-if="key=='gitHub'" @blur='normol()'></el-input>
        </el-form-item>
        <el-form-item label="兴趣爱好">
          <el-checkbox-group >
            <el-badge :value="'x'" class="item_checkbox" v-for='(it,index) in form.favorite' >
              <el-checkbox :label="it" name="type"></el-checkbox>
            </el-badge>
          </el-checkbox-group>
          <i class="el-icon-circle-plus-outline"></i>
        </el-form-item>
        <el-form-item label="个人能力">
          <div class="defaultArea" v-if="key!='个人能力'" @dblclick='clickItem("个人能力")'>
            {{form.skills}}
          </div>
          <el-input type="textarea" v-model="form.skills" v-if="key=='个人能力'" @blur='normol()'></el-input>
        </el-form-item>
        <el-form-item label="擅长技能">
          <el-checkbox-group >
            <el-badge :value="'x'" class="item_checkbox" v-for='(it,index) in form.skill' >
              <el-checkbox :label="it" name="type"></el-checkbox>
            </el-badge>
          </el-checkbox-group>
          <i class="el-icon-circle-plus-outline"></i>
        </el-form-item>
        <div>
            <el-form-item label="项目经历">
              <div class="default" v-if="key!='项目经历'" @dblclick='clickItem("项目经历")'>
                  {{form.project}}
              </div>
              <el-input v-model="form.project" v-if="key=='项目经历'" @blur='normol()'></el-input>
            </el-form-item>
            <el-form-item label="项目描述">
              <div class="defaultArea" v-if="key!='项目描述'" @dblclick='clickItem("项目描述")'>
                  {{form.prodesc}}
              </div>
              <el-input type="textarea" v-model="form.prodesc" v-if="key=='项目描述'" @blur='normol()'></el-input>
            </el-form-item>
        </div>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        key:'',
        form: {
          name: '赵欢',
          address: '四川省成都市一环路东四段',
          date1: '2018-5-8',
          phone:17628286513,
          wxchat:'youmy_love',
          website:'www.benzic.top',
          github:'https://github.com/Benzic',
          email:'690018019@qq.com',
          job:'WEB前端工程师',
          skills: '这是一段关于我的技能的描述不知道你怎么看发觉sd卡圣诞节卡升级到卡上监控雷达数据端口将阿里圣诞节阿斯利康京东绿卡时间段卢卡斯就看到啦睡觉来打卡时间到了',
          project: '朋友谜语',
          prodesc: '这是一段关于我的技能的描述不知道你怎么看发觉sd卡圣诞节卡升级到卡上监控雷达数据端口将阿里圣诞节阿斯利康京东绿卡时间段卢卡斯就看到啦睡觉来打卡时',
          skill:['js/HTML/CSS','VUE','REACT','小程序','photoshop'],
          favorite:['电影','音乐','运动']
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      clickItem (key){
        console.log(key);
        this.key = key;
      },
      normol (){
        this.key = ''
      }
    }
  }
  </script>
  <style scoped>
    .el-form{
      padding: 50px;
      box-sizing: border-box;
    }
    .default{
      height: 40px;
    }
    .el-col-11{
      display: flex;
    }
    .dateData{
      width: 150px;
    }
    .defaultArea {
      display: block;
      resize: vertical;
      padding: 5px 15px;
      line-height: 1.5;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 100%;
      font-size: inherit;
      color: #606266;
      background-color: #fff;
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      min-height: 50px;
    }
    .item_checkbox{
      margin-left: 20px;
    }
  </style>