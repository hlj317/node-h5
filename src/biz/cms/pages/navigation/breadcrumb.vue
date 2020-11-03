<template>
  <div id="page-breadcrumb"
       class="page-breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/cms">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style>
.page-breadcrumb {
  padding: 25px;
}
</style>

<script>
export default {
  data () {
    return {
    }
  }
};
</script>