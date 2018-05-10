<template>
    <div style="padding: 20px;">
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
            <div style="height: 20px;width: 100%;">

            </div>
            <waterfall :line-gap="210" :watch="items">
                   <waterfall-slot
                       v-for="(item, index) in 50"
                       :width="200"
                       :height="200"
                       :order="index"
                       :key="index"
                   >
                   <div style="position: relative;width: 200px;height: 200px;" @mouseenter='showButton(index)'>
                        <img src="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg" alt="" style="width: 200px;height: 200px;">
                        <div class="dele" v-if='key==index'>
                                <button type="button" class="el-button el-button--danger is-circle"><!----><i class="el-icon-delete"></i><!----></button>
                        </div>
                   </div>
                   </waterfall-slot>
               </waterfall>
    </div>
    <!--  -->
</template>
<script>
    import Waterfall from 'vue-waterfall/lib/waterfall'
    import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
    export default {
        data () {
            return {
                items:[],
                key:''
            }
        },
        components: {
            Waterfall,
            WaterfallSlot
        },
        methods:{
            showButton(val){
                console.log(val)
                this.key = val
            }
        }
    }
</script>
<style scoped>
    .vue-waterfall{
    }
    .vue-waterfall-slot{
    }

    .dele button{
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        width: 50px;
        height: 50px;
    }
</style>