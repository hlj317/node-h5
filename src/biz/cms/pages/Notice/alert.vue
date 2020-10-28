<template>
  <div id="page-alert"
       class="page-alert">
    <el-alert title="成功提示的文案"
              type="success">
    </el-alert>
    <el-alert title="消息提示的文案"
              type="info">
    </el-alert>
    <el-alert title="警告提示的文案"
              type="warning">
    </el-alert>
    <el-alert title="错误提示的文案"
              type="error">
    </el-alert>
  </div>
</template>

<style>
.page-alert {
  width: 750px;
  padding: 25px;
}
</style>

<script>
export default {
  data () {
    return {
      message: 'Alert警告'
    }
  }
};
</script>