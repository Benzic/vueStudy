<template>
        <div>
                <div class="manTitle">
                        <headBox v-bind:show='show' v-on:changeStatus = "changeSt()"></headBox>
                        </div>
                        <div class="mainBox">
                        <div class="leftPart" v-if='show'>
                            <globalMenu></globalMenu>
                        </div>
                        <div class="rightPart">
                            <div class="topPart"></div>
                            <div class="manBox">
                                <router-view></router-view>
                            </div>
                        </div>
                    </div>
        </div>

    </template>
    <script>
        import globalMenu from '../components/menu'
        import headBox from '../components/headBox'
        export default {
          name: 'hello',
          data () {
            return {
                  show:true
            }
          },
          components: {
            globalMenu,
            headBox
        },
          methods: {
              
            changeSt:function(){
                if(this.show==true){
                    this.show = false
                }else{
                    this.show = true
                }
            },
        }
    }
    </script>
    