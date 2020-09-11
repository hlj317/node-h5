<template>
    <div id="movie">
        <Popup ref="popup"></Popup>
        <div class="title">注册电影网站</div>
        <template>
            <div class="account_form">
                <input type="text" class="account_btn" value="" id="username" placeholder="请输入手机号或邮箱地址" v-model="username">
                <input type="password" class="password_btn" value="" id="password" placeholder="请输入含数字和字母的6-8位密码" v-model="password">
            </div>
            <div class="">
                <input type="button" value="注册" class="login_btn" @click="register"/>
            </div>
        </template>
        <div class="goto_btn"><a href="/login">去登录</a></div>
    </div>
</template>

<style lang="less">
    @import "~src/common/less/common.less";
    #movie{
        font-size: 24/@base;
        text-align: center;
        margin:140/@base 0 0 20/@base;
        line-height: 40px;
        .title{
            font-size: 48/@base;
            margin:70/@base 0;
        }
        .account_form{
            border:2px solid #999999;
            border-radius:7/@base;
            width:650/@base;
            margin: 0 auto;
            overflow: hidden;
        }
        .account_btn,.password_btn{
            width:650/@base;
            padding:30/@base 0 30/@base 20/@base;
            display:block;
        }
        .password_btn{
            border-top:2px solid #999999;
        }
        input::-webkit-input-placeholder {
            /* placeholder颜色  */
            color: #aab2bd;
            /* placeholder字体大小  */
            font-size: 24/@base;
        }
        .login_btn{
            width:650/@base;
            padding:0 10/@base;
            font-size: 30/@base;
            height:90/@base;
            line-height:90/@base;
            color:#ffffff;
            background: #287834;
            border-radius:7/@base;
            margin:30/@base 0;
            font-weight: bold;
            cursor: pointer;
        }
        .goto_btn{
            a{
                font-size: 24/@base;
                text-decoration: underline;
                color:#999999;
                cursor: pointer;
            }
        }
    }
</style>

<script>
import axios from 'axios';
import Popup from '../common/components/Popup.vue';
export default {
    data() {
        return {
            username:'',
            password:''
        }
    },
    created(){
        this.init();
    },

    mounted(){
        let a1 = this.getTime(100,1000);
        let a2 = this.getTime(200,2000);
        let aa = Promise.all([a1,a2]);
        aa.then((datas)=>{
            this.username = datas[0] + "ok";
        },(data)=>{
            this.username = data + "err";
        })
    },
    components: {
        Popup
    },
    methods:{
       init(){
       },
        getTime(val,time){
            let p1 = new Promise((resolve,reject)=>{
                if(time <= 1000){
                    setTimeout(()=>{
                        reject(val);
                    },time)
                }else{
                    setTimeout(()=>{
                        resolve(val);
                    },time)   
                }

            });
            return p1;
        },
        isValidate(username,password){
            let phone_test = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/,
                email_test = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/gi,
                pass_test = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,8}$/;

            if(!username){
                this.$refs.popup.toast({
                    'title' : '用户名不能为空',
                    'time' : 2000
                });
                return false;
            }
            if(!phone_test.test(username) && !email_test.test(username)){
                this.$refs.popup.toast({
                    'title' : '用户名格式不正确',
                    'time' : 2000
                });
                return false;
            }
            if(!password){
                this.$refs.popup.toast({
                    'title' : '密码不能为空',
                    'time' : 2000
                });
                return false;
            }
            if(!pass_test.test(password)){
                this.$refs.popup.toast({
                    'title' : '密码格式不正确',
                    'time' : 2000
                });
                return false;
            }
            return true;
        },
        //注册
        register(){
            if(!this.isValidate(this.username,this.password)) return;
            axios.post('/addAccount',{
                username:this.username.trim(),
                password:this.password.trim()
            })
            .then(res =>{
                if(res.data.success){
                    this.$refs.popup.toast({
                        'title' : res.data.message,
                        'time' : 2000
                    });
                    const href = window.location.origin + '/movie';
                    window.location.replace(href);
                }else{
                    this.$refs.popup.toast({
                        'title' : res.data.message,
                        'time' : 2000
                    });
                }
            })
            .catch(function(err){
                alert(err);
            });    
        }
    }
}
</script>

