<template>
    <div id="fight" class="fight-page">
        PK大乱斗首页
    </div>
</template>

<style lang="less">
    @import "~src/common/less/common.less";
    html,body{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;top: 0;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .fight-page{
        padding:25/@base 20/@base;
    }
</style>

<script>
import axios from 'axios';
export default {
    data() {
        return {
           
        }
    },
    components: {
    },
    computed : {
    },
    created(){
        this.init();
    },
    methods:{
        init(){

        },
        getData(){
   
        }

    }
}
</script>

