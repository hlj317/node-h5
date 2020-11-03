<template>
  <div id="page-notification"
       class="page-notification">
    <el-button plain
               @click="open1">
      可自动关闭
    </el-button>
    <el-button plain
               @click="open2">
      不会自动关闭
    </el-button>
  </div>
</template>

<style>
.page-notification {
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
    open1 () {
      const h = this.$createElement;

      this.$notify({
        title: '标题名称',
        message: h('i', { style: 'color: teal' }, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
      });
    },

    open2 () {
      this.$notify({
        title: '提示',
        message: '这是一条不会自动关闭的消息',
        duration: 0
      });
    }
  }
};
</script>