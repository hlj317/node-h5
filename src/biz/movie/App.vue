<template>
    <div id="movie" class="movie-page">
        <div class="login">
            <!-- <input type="button" value="返回" class="login_btn" @click="back"/> -->
            <span class="account_text">{{accountName}}，已登录！</span>
            <input type="button" value="退出" class="exit_btn" @click="clear"/>
        </div>
        <ul class="nav">
            <li v-for="(item,type) in navs" :key="type" :class="{selected:type === isTabSelected}" @click="chooseTab(type,$event)">
                <span>{{type}}</span>
            </li>
        </ul>
        <v-reload :on-infinite-load="onInfiniteLoad" :parent-pull-up-state="currentPullUpState">
            <template v-for="(items,key) in lists">
                <ul class="movie-list" :key="key" v-show="key === isTabSelected">
                    <li v-for="(item,index) in items" :key="index">
                        <a :href="item.gotoLink">
                            <span class="pic"><img :src="item.poster" referrerPolicy="no-referrer" /></span>
                            <span class="title">{{item.title}}</span>
                            <span class="rate">{{item.rate}}</span>
                        </a>
                    </li>
                </ul>
            </template>
        </v-reload>
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
    .login{
        padding:25/@base 20/@base;
        background: #fff9ef;
        text-align: right;
        .login_btn,.exit_btn{
            padding:5/@base 20/@base;
            font-size: 24/@base;
            cursor: pointer;
            border:1px solid #999;
        }
        .exit_btn{
        }
    }
    .nav{
        width:100%;
        height:60/@base;
        padding:20/@base;
        border-bottom:1px solid #ddd;
        list-style:none;
        clear:both;
        li{
            float:left;
            margin:0 25/@base 0 0;
            padding:10/@base 20/@base;
            background: #ffba00;
            border-radius: 10/@base; 
        }      
        li.selected{
            color:#fff;
            background: #ff6e3c;
        }  
    }
    .movie-list{
        margin:20/@base 0 0 10/@base;
        padding:0;
        list-style:none;
        overflow:hidden;
        li{
            float:left;
            margin:15/@base 0 0 15/@base;
            width:225/@base;
            height:385/@base;
            overflow: hidden;
            .pic{
                display: block;
                img{
                    margin:0;
                    width:210/@base;
                    height:300/@base;
                }
            }
            .title{
                color: #000;
            }
            .rate{
                color: orange;
            }
        }
    }
</style>

<script>
import axios from 'axios';
import PullUpReload from './components/PullUpReload.vue'
export default {
    data() {
        return {
            lists:null,
            navs:null,
            accountName:null,
            isTabSelected:'中国大陆',
            infiniteLoadData:{
                '中国大陆' : {
                    'pullUpState' : 0
                },
                '科幻' : {
                    'pullUpState' : 0
                },
                '动画' : {
                    'pullUpState' : 0
                },
                '爱情' : {
                    'pullUpState' : 0
                },
                '历史' : {
                    'pullUpState' : 0
                }
            }
        }
    },
    components: {
        'v-reload': PullUpReload
    },
    computed : {
        currentPullUpState(){
            return this.infiniteLoadData[this.isTabSelected].pullUpState;
        }
    },
    created(){
        this.init();
    },
    methods:{
        init(){
            this.getData();
            this.accountName = this.getCookie('username') || 'admin';
        },
        getData(){
            axios.post('/getMovieList',{
                type : ['中国大陆','科幻','动画','爱情','历史']
            })
            .then(res =>{
                if(res.data.success){
                    const origin = window.location.origin;
                    const result = res.data.data;
                    this.navs = result;
                    this.lists = result;
                    for(var i in result){
                        // this.infiniteLoadData[i] = {
                        //     pullUpState : 0
                        // };
                        result[i].forEach((item)=>{
                            item.gotoLink = `${origin}/detail?id=${item.doubanId}`;
                        })
                    }
                    // this.getStartPullUpState();
                }else{
                    alert(res.data.message);
                    const href = window.location.origin + '/login';
                    window.location.replace(href);
                }
            })
            .catch(function(err){
                alert(err);
            });    
        },
        getOneData(){
            axios.post('/getMovieOneItem',{
                type : this.isTabSelected,
                pageStart : this.lists[this.isTabSelected].length + 1,
                pageSize : 6
            })
            .then(res =>{
                if(res.data.statesCode == 200){
                    const origin = window.location.origin;
                    const result = res.data.data;
                    this.lists[this.isTabSelected] = this.lists[this.isTabSelected].concat(result);
                    this.lists[this.isTabSelected].forEach((item)=>{
                        item.gotoLink = `${origin}/detail?id=${item.doubanId}`;
                    })
                }else if(res.data.statesCode == 204){
                    this.infiniteLoadData[this.isTabSelected].pullUpState = 3;
                }else{
                    alert(res.data.message);
                    const href = window.location.origin + '/login';
                    window.location.replace(href);
                }
            })
            .catch(function(err){
                alert(err+"#######");
            });    
        },
        chooseTab(type,event){
            this.isTabSelected = type;
        },
        clear(){
           const href = window.location.origin + '/login';
           this.delCookie('sessionId');
           window.location.replace(href);
        },
        getCookie:(name) =>{
           let arr,
              reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
           if (arr = document.cookie.match(reg)){
              return unescape(arr[2]);
           }else{
              return null;
           }
        },
        delCookie(name){
           let exp = new Date();
           const cval = this.getCookie(name);
           exp.setTime(exp.getTime() - 1);
           if(cval !== null){
               document.cookie= name + "="+cval+";expires="+exp.toGMTString();
           }
        },

        // 上拉加载
        onInfiniteLoad (done) {
            if (this.infiniteLoadData[this.isTabSelected].pullUpState === 0) {
                this.getOneData();
            }
            done();
        }

    }
}
</script>

