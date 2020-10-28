<template>
  <div id="page-message"
       class="page-message">
    <el-button :plain="true"
               @click="open">打开消息提示</el-button>
    <el-button :plain="true"
               @click="openVn">VNode</el-button>
  </div>
</template>

<style>
.page-message {
  padding: 25px;
}
</style>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    open () {
      this.$message('这是一条消息提示');
    },

    openVn () {
      const h = this.$createElement;
      this.$message({
        message: h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', { style: 'color: teal' }, 'VNode')
        ])
      });
    }
  }
};
</script>