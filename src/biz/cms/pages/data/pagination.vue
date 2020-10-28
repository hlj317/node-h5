<template>
  <div id="page-pagination"
       class="page-pagination">
    <div class="block">
      <span class="demonstration">页数较少时的效果</span>
      <el-pagination layout="prev, pager, next"
                     :total="50">
      </el-pagination>
    </div>
    <div class="block">
      <span class="demonstration">大于 7 页时的效果</span>
      <el-pagination layout="prev, pager, next"
                     :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<style>
.page-pagination {
  padding: 25px;
}
</style>

<script>
export default {
  data () {
    return {
      message: 'Pagination分页'
    }
  }
};
</script>