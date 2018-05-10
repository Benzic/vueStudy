<template>
    <div class="box">
        <div class="messages">
            <div class="items" v-for='n in 50'>
                <img src="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg" alt="" class="avatar">
                <div class="rightPart">
                    <div class="top"><span>来源：</span><span>日期：</span><span>昵称：</span></div>
                    <div class="title">{{title}}</div>
                    <div class="content">
                        <div class="left_content">
                            {{content}}
                        </div>
                        <div class="right_content">
                            <p>回复</p>
                            <p>删除</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                title:'如何好好的使用vue去做一个网页',
                content:'你好 觉得你写的真的不错 哈哈哈哈哈哈哈'
            }
        }
    }
</script>
<style scoped>
    .box{
        width: 100%;
        overflow: auto;
        box-sizing: border-box;
        padding: 30px;
        background: #f1f1f1;
    }
    .messages{
        width: 100%;
        border-radius: 10px;
        background: white;
    }
    .items{
        display: flex;
        margin-bottom: 20px;
        padding: 20px;
        padding-left: 100px;
        box-sizing: border-box;
    }
    .items .avatar{
        width: 80px;
        height: 80px;
        margin-right: 100px;
    }
    .rightPart{
        flex: 1;
    }
    .top{
        font-size: 15px;
    }
    .top span{
        margin-left: 30px;
    }
    .title{
        margin: 20px 80px;
    }
    .content {
        display: flex;
        margin-left: 80px;
        min-height: 80px;
        
    }
    .left_content{
        background: #f1f1f1;
    }
    .right_content{
        margin-left: 30px;
    }
</style>