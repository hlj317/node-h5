<template>
  <div id="movie">
    <Popup ref="popup"></Popup>
    <div class="title">登录电影网站</div>
    <div class="account_form">
      <input type="text"
             class="account_btn"
             value=""
             id="username"
             placeholder="手机号/邮箱"
             v-model="username">
      <input type="password"
             class="password_btn"
             value=""
             id="password"
             placeholder="密码"
             v-model="password">
    </div>
    <div class="">
      <input type="button"
             value="登录0590"
             class="login_btn"
             @click="login" />
    </div>
    <div class="goto_btn"><a href="/register">去注册</a></div>
  </div>
</template>

<style lang="less">
@import "~src/common/less/common.less";
#movie {
  font-size: 24 / @base;
  text-align: center;
  margin: 140 / @base 0 0 20 / @base;
  line-height: 40px;
  .title {
    font-size: 48 / @base;
    margin: 70 / @base 0;
  }
  .account_form {
    border: 2px solid #999999;
    border-radius: 7 / @base;
    width: 650 / @base;
    margin: 0 auto;
    overflow: hidden;
  }
  .account_btn,
  .password_btn {
    width: 650 / @base;
    padding: 30 / @base 0 30 / @base 20 / @base;
    display: block;
  }
  .password_btn {
    border-top: 2px solid #999999;
  }
  input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #aab2bd;
    /* placeholder字体大小  */
    font-size: 24 / @base;
  }
  .login_btn {
    width: 650 / @base;
    padding: 0 10 / @base;
    font-size: 30 / @base;
    height: 90 / @base;
    line-height: 90 / @base;
    color: #ffffff;
    background: #287834;
    border-radius: 7 / @base;
    margin: 30 / @base 0;
    font-weight: bold;
    cursor: pointer;
  }
  .goto_btn {
    a {
      font-size: 24 / @base;
      text-decoration: underline;
      color: #999999;
      cursor: pointer;
    }
  }
}
</style>

<script>
import axios from 'axios';
import Popup from '../common/components/Popup.vue';
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  created () {
    this.init();
  },
  components: {
    Popup
  },
  methods: {
    init () {
    },
    getCookie: (name) => {
      let arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
      } else {
        return null;
      }
    },
    delCookie (name) {
      let exp = new Date();
      const cval = this.getCookie(name);
      exp.setTime(exp.getTime() - 1);
      if (cval !== null) {
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
      }
    },
    isValidate (username, password) {
      if (!username) {
        this.$refs.popup.toast({
          'title': '用户名不能为空',
          'time': 2000
        });
        return false;
      }
      if (!password) {
        this.$refs.popup.toast({
          'title': '密码不能为空',
          'time': 2000
        });
        return false;
      }
      return true;
    },
    //登录
    login () {
      if (!this.isValidate(this.username, this.password)) return;
      axios.post('/loginAccount', {
        username: this.username.trim(),
        password: this.password.trim()
      })
        .then(res => {
          if (res.data.success) {
            const href = window.location.origin + '/movie';
            window.location.replace(href);
          } else {
            this.$refs.popup.toast({
              'title': res.data.message,
              'time': 2000
            });
          }
        })
        .catch(function (err) {
          alert(err);
        });
    }
  }
}
</script>

