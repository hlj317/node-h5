<template>
  <div id="window"
       class="window-page"
       v-show="winShow">
    <div class="title">{{ winTitle || "这是标题"}}</div>
    <div class="content">{{ winContent || "这是内容"}}</div>
    <div class="bottombar">
      <button class="sure"
              @click="sureWin">{{ winSureBtn || "确定"}}</button>
      <button class="cancel"
              @click="closeWin">{{ winCancelBtn || "取消"}}</button>
    </div>
    <div class="close"
         @click="closeWin">X</div>
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
.window-page {
  width: 600 / @b;
  height: 400 / @b;
  background: #eeeeee;
  border: 1 / @b solid #333333;
  position: fixed;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  .title {
    text-align: center;
    font-weight: bold;
    margin: 50 / @b 0 30 / @b 0;
    font-size: 28 / @b;
  }
  .content {
    margin: 0 40 / @b;
  }
  .bottombar {
    text-align: center;
    margin: 50 / @b 0 0 0;
    .sure {
      border: 1 / @b solid #333333;
      margin-right: 20 / @b;
      padding: 5 / @b 15 / @b;
    }
    .cancel {
      border: 1 / @b solid #333333;
      padding: 5 / @b 15 / @b;
    }
  }
  .close {
    position: absolute;
    top: 20 / @b;
    right: 20 / @b;
    font-size: 32 / @b;
  }
}
</style>
<script>
export default {
  data () {
    return {
      a: 5,
      countNum: 0,
      message: '我是来自子组件的消息',
      winShow: true
    }
  },

  created () {
    this.init();
  },

  computed () {

  },

  methods: {
    init () {
      this.$emit("childFn", this.message);
    },
    closeWin () {
      this.$emit('closeWinFun');
    },
    sureWin () {
      this.$emit('sureWinFun');
    },
    parentHandleclick (e) {
      alert(222);
    }
  },

  props: ['winTitle', 'winContent', 'winSureBtn', 'winCancelBtn', 'winShow']
}
</script>

