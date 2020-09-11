<template>
    <div id="movie" class="movie-page">
        <div class="login">
            <input type="button" value="返回列表" class="return_btn" @click="back"/>
            <input type="button" value="退出登录" class="exit_btn" @click="clear"/>
            <span class="account_text">{{accountName}}，已登录！</span>
        </div>
        <div class="title">{{item.title}}</div>
        <div class="left_part">   
            <div class="property">
                <ul v-for="(star,index) in item.stars" class="starlist" :key="index">
                    <li :class="star">⭐️</li>
                </ul>
                <span class="score">{{item.score}}</span>
                <span class="remark_num">{{item.reviews}}人评价</span>
            </div>
            <div class="content">{{item.content}}</div>
        </div>
        <div class="right_part">
            <img :src="item.imgs" />
        </div>
    </div>
</template>

<style scoped lang="less">
@import "~src/common/less/common.less";
html,body{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;top: 0;
    overflow: hidden;
    overflow-y: auto;
}
.login{
    padding:25/@base 20/@base;
    background: #fff9ef;
    overflow: hidden;
    font-size: 28/@base;
    .return_btn,.exit_btn{
        padding:5/@base 20/@base;
        font-size: 24/@base;
        cursor: pointer;
        border:1px solid #999;
        float:left;
        border-radius: 5/@base;
    }
    .account_text{
        float:right;
        display: block;
        margin:6/@base 5/@base 0 0;
    }
    .exit_btn{
        float:right;
    }
}
.title{
    margin:20/@base 0 0 40/@base;
    font-size:70/@base;
}
.left_part{
    float:left;
    width:470/@base;
    padding: 20 /@base 20/@base 20/@base 40/@base;
    .property{
        overflow: hidden;
    }
    .starlist{
        list-style: none;
        margin:0;
        padding:0;
        float:left;
        .star{
            float: left;
            display: inline-block;
            overflow: hidden;
        }

        .half_star{
            display: inline-block;
            width: 14 / @base;
            overflow: hidden;
        }

    }
    .score{
        float:left;
        margin:0 0 0 25/@base;
    }
    .remark_num{
        float:left;
        margin:0 0 0 25/@base;
        color:#999999;
    }
    .content{
        margin:30/@base 0 0 0;
    }
}
.right_part{
    float:right;
    margin:20/@base 0 0 0;
    width:210/@base;
    padding:0 0 0 10/@base;
    img{
        width:190/@base;
        border:1/@base solid #ccc;
    }
}

</style>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            item:{
                'title' : '正在loading…'
            },
            accountName:''
        }
    },

    created(){
        this.init();
    },

    methods:{
        init(){
            let doubanId = this.getQueryString()['id'];
            this.getDetail(doubanId);
            this.accountName = this.getCookie('username') || 'admin';
        },
        //获取url中的参数
        getQueryString() {
            var qs = location.search.substr(1), // 获取url中"?"符后的字串   
                    args = {}, // 保存参数数据的对象
                    items = qs.length ? qs.split("&") : [], // 取得每一个参数项,
                    item = null,
                    len = items.length;
            
            for(var i = 0; i < len; i++) {
                item = items[i].split("=");
                var name = decodeURIComponent(item[0]),
                    value = decodeURIComponent(item[1]);
                if(name) {
                    args[name] = value;
                }
            }
            return args;

        },
        filterData(data){
            return {
                'title' : data.title,
                'stars' : this.getStars(data.rating.stars),
                'score' : data.rating.average,
                'reviews' : data.ratings_count,
                'content' : this.getContent(data.summary),
                'imgs' : data.images.small
            };
        },
        getContent(summary){
            return summary.length > 90 ? summary.substring(0,90) + '...' : summary;
        },
        getStars(starData){
            let stars = parseInt(starData);
            let arr = [];
            for(let i = 0;i<stars;i=i+10){
                arr.push('star');
            }
            if(stars % 2 !== 0){
                arr.pop();
                arr.push('half_star');
            }
            return arr;
        },
        //获取详情
        getDetail(doubanId){
            axios.get('/getMovieDetail',{
                params:{
                    doubanId:doubanId
                },
                responseType: 'json'
            })
            .then(res =>{
                if(res.data.statesCode == 200){
                    this.item = this.filterData(JSON.parse(res.data.result));
                }else{
                    alert(res.data.message);
                    const href = window.location.origin + '/login';
                    window.location.replace(href);
                }

            })
            .catch(function(err){
                console.log(err);
            });    
        },
        back(){
            const href = window.location.origin + '/movie';
            window.location.replace(href);
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
        }
    }
}
</script>

