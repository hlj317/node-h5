<template>
  <div id="movie"
       class="movie-page">
    <span>{{a}}</span>
    <span>countNum:{{countNum}}</span>
    <Window :winTitle="title"
            :winContent="content"
            :winSureBtn="sureBtn"
            :winCancelBtn="cancelBtn"
            :winShow="winShow"
            @childFn="parentFn"
            @closeWinFun="winCloseCallFun"
            @sureWinFun="winSureCallFun"
            ref="mychild"></window>
    <div>{{message}}</div>
    <button @click="emitSon"
            class="red">触发父组件事件</button>
    <mt-header fixed
               title="固定在顶部"></mt-header>
  </div>
</template>

<style scoped lang="less">
@import "~src/common/less/common.less";
html,
body {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  overflow-y: auto;
}
.mint-ui-toast {
  font-size: 40 / @b;
}
.red {
  border: 1 / @b solid red;
}
</style>
<script>
import axios from 'axios';
import { resolve } from 'url';
import Window from './components/Window.vue';
import { Header } from 'mint-ui';
import "mint-ui/lib/style.css";
export default {
  data () {
    return {
      a: 5,
      countNum: 0,
      title: "今天你开心吗？",
      content: "今天我是非常非常开心的，我要继续加油，再接再厉！",
      sureBtn: "OK",
      cancelBtn: "Cancel",
      message: "",
      winShow: true
    }
  },
  components: {
    Window,
    Header
  },
  created () {
    this.init();
  },

  computed () {

  },

  methods: {
    init () {
      this.getData();

    },
    winCloseCallFun () {
      this.winShow = false;
    },
    winSureCallFun () {
      MintUI.Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
    },
    winSureFun () {
      this.winShow = false;
    },
    emitSon () {
      //触发子组件的事件
      this.$refs.mychild.parentHandleclick("我要触发子组件咯");
    },
    parentFn (payload) {
      this.message = payload;
    },
    getData () {
      this.request({
        'type': 'post',
        'url': '/getMovieList',
        'data': {
          'type': ['中国大陆']
        }
      }).then((res) => {
        this.a = 20;
        // alert(JSON.stringify(res.data.data['中国大陆'][1]));
      }, (err) => {
        // alert(err);
      });
    },
    request (obj) {
      return new Promise((resolve, reject) => {
        axios.request({
          method: obj['type'],
          url: obj['url'],
          data: obj['data']
        }).then(res => {
          resolve(res);
        })
          .catch(function (err) {
            reject(err);
          });
      })
    }
  }
}
</script>

