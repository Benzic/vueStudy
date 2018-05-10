<template>
    <div class="pic">
        <div class="pic_items" v-for='n in 6' >
            <a href="javascript:void(0);" @click='toDetail(n)'>
                <img src="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg" alt="">
                <span>相册{{n}}</span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        methods: {
            toDetail (val) {
                this.$router.replace({ name: 'picList', query: { id:val }})
            }
        }
    }
</script>
<style scoped>
    .pic {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 20px;
    }
    .pic_items {
        width: 300px;
        margin: 10px;
        text-align: center;
    }
    .pic_items img{
        width: 300px;
    }
</style>