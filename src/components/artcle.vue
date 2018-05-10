<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="title" >
            <div class="default" contenteditable="key!='文章内容'" @dblclick='clickItem("title")' @change='saveValue(index)'>
            {{form.title}}
            </div>
        </el-form-item>
        <el-form-item label="kind" >
            <div v-for='(it,index) in form.kind' style="display: inline-block" @mouseenter='moveOn(it)' @mouseleave='moveOut()' >
                <el-badge :value="'x'" class="item_checkbox"  v-show='dele == it' v-if="it!='@'">
                    <span >{{it}}</span>
                </el-badge>
                <span    style="margin-left: 20px;" v-show='dele != it' v-if="it!='@'">{{it}}</span>
                <div    style="margin-left: 20px;width: 80px;background: #f1f1f1" v-if="it=='@'" contenteditable='true' @input='saveValue(index)'></div>
            </div>
            <button type="button" class="el-button el-button--success is-circle" style="margin-left: 20px" @click='addKind'><!----><i class="el-icon-plus"></i><!----></button>
        </el-form-item>
        <el-form-item label="评论列表">
            <el-button type="success">查看</el-button>
        </el-form-item>
        <el-form-item label="来源">
            <el-radio-group v-model="form.original">
                <el-radio label="原创" v-model='form.original'></el-radio>
                <el-radio label="转载" v-model='form.original'></el-radio>
            </el-radio-group>
        </el-form-item>
        
        <el-form-item label="作者">
            <div class="default" contenteditable="key!='文章内容'" @dblclick='clickItem("author")'>
                {{form.author}}
            </div>
        </el-form-item>
        <el-form-item label="tag">
                <div v-for='(it,index) in form.tag' style="display: inline-block"  @mouseenter='moveOn(it)' @mouseleave='moveOut()' v-model="form.tag[index]">
                    <el-badge :value="'x'" class="item_checkbox"  v-show='dele == it'>
                        <span >{{it}}</span>
                    </el-badge>
                    <span  style="margin-left: 20px;" v-show='dele != it'>{{it}}</span>
                </div>
                <button type="button" class="el-button el-button--success is-circle" style="margin-left: 20px" @click='addTag'><!----><i class="el-icon-plus"></i><!----></button>
        </el-form-item>
        <el-form-item label="是否推荐">
            <el-radio-group v-model="form.like">
                <el-radio label="是"></el-radio>
                <el-radio label="否"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="文章内容">
            <!-- <div>
                <div class="upload">
                    <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed"
                    :file-list="fileList">
                    <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                </div>
                <div class="defaultArea"  @dblclick='clickItem("文章内容")' contenteditable="key!='文章内容'" @input='saveTxt'>
                    {{form.main}}
                </div>
            </div> -->
            <edit></edit>
            <!-- <el-input type="textarea" v-model="form.main" v-if="key=='文章内容'" @blur='normol()' class="txtArea"></el-input> -->
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button>取消</el-button>
        </el-form-item>
        </el-form>
    </template>

    <script>
        import edit from '../components/bianjiqi.vue'
    export default {
    data() {
        return {
        key:'',
        dele:'',
        fileList: [],
        form: {
                title:'数据反馈撒旦法教科书地方',
                kind:['js/html','nodejs','java'],
                author:'benzic',
                like:"否",
                original:'原创',
                tag:['硬货','有用'],
                main:'数据反馈撒旦法教科书地方数方数方数方数方数方数方数方数方数方数方数方数方数方数方数方数方数方数方数方数方数方数'
            }
        }
    },
    components:{
        edit
    },
    mounted () {
        console.log(this.$route.query)
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
        },
        moveOn (val) {
            console.log(val)
            //this.dele = val
        },
        moveOut () {
            console.log('ss')
           //this.dele = ''
        },
        handleRemove(file, fileList) {
        console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        },
        addTag () {
            console.log(this.form.tag)
            this.form.tag.push('@')
        },
        saveValue (e) {
            console.log('w')
        },
        addKind () {
            console.log(this.form.kind)
            this.form.kind.push('@')
        },
        saveTxt (e) {
            console.log(window.getSelection(), window.clipboardData())
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
        padding: 5px 15px 5px 15px;
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
    .upload{
        padding-left: 15px;
    }
    .item_checkbox{
        margin-left: 20px;
    }
    .el-upload-list{
        display: flex;
    }
    </style>