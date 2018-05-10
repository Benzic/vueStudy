<template>
    <div>
      <!-- quill-editor插件标签 分别绑定各个事件-->
      <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
        @change="onEditorChange($event)">
      </quill-editor>
      <div class="limit">当前已输入 <span>{{nowLength}}</span> 个字符，您还可以输入 <span>{{SurplusLength}}</span> 个字符。</div>
      <!-- 文件上传input 将它隐藏-->
      <el-upload class="upload-demo" :action="qnLocation" :before-upload='beforeUpload' :data="uploadData" 
        ref="upload" style="display:none">
        <el-button size="small" type="primary" id="imgInput" v-loading.fullscreen.lock="" element-loading-text="插入中,请稍候">点击上传</el-button>
      </el-upload>
      </el-table>
    </div>
  </template>
  <script>
      export default {
          data (){
              return {
                  content:"",
                  editorOption:{},
                  uploadData:{}
              }
          },
          computed:{
              nowLength (){
                  if(this.content.length==0){
                    return 0 
                  }else{
                    return this.content.length - 7
                  }
              },
              SurplusLength () {
                  let add = 0
                if(this.content.length==0){
                    add = 0
                }else{
                    add = 7
                }
                let num = 10000 - Number(this.content.length) + add
                 if (num > 0) {
                    return num
                 } else {
                    return 0
                 }
              },
              qnLocation () {
                if (location.protocol === 'http:') {
                 return 'http://up-z0.qiniu.com'
                 }
                 return 'https://up-z0.qbox.me'
              }
          },
          methods: {
            onEditorFocus (val) {
                console.log(val)
            },
            onEditorBlur (val) {
                console.log(val)
            },
            onEditorChange (val) {
                console.log(val.quill.editor.delta.ops)
                let data = val.quill.editor.delta.ops
                let lenth = 0
                for(let i = 0,len = data.length-1;i<=len;i++){
                    if(data[i].insert['image']){
                        lenth = data[i].insert['image'].length
                    }
                }
                console.log(val.html)
                
            },
            fullscreenLoading (val) {
                console.log(val)
            },
            upScuccess (val) {
                console.log(val)
            },
            beforeUpload (val) {
                console.log(val)
            }
          }
      }
  </script>
  <style scoped>
.quill-editor {
  height: 745px;

 
}
.ql-editor img{
    width: 200px;
}
.ql-container {
    height: 680px;
  }
.limit {
  height: 30px;
  border: 1px solid #ccc;
  line-height: 30px;
  text-align: right;

  
}
span {
    color: #ee2a7b;
  }
.ql-snow .ql-editor img {
  max-width: 480px;
}

.ql-editor .ql-video {
  max-width: 480px;
}
  </style>