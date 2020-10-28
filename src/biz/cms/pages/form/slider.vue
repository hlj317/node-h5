<template>
  <div id="page-slider"
       class="page-slider">
    <div class="block">
      <el-slider v-model="value"
                 show-input>
      </el-slider>
    </div>
  </div>
</template>

<style>
.page-slider {
  padding: 25px;
}
.block {
  width: 600px;
}
</style>

<script>
export default {
  data () {
    return {
      value: 0,
      value1: 0
    }
  }
};
</script>