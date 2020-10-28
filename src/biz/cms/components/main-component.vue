<template>
  <div id="mainComponent">
    <el-row v-show="isShow(item.type)"
            v-for="(item, index) in items"
            :key="index">
      {{item.html}}
    </el-row>
    <div style="padding-left: 20px;">
      <i class="el-icon-message"></i>Basic<i></i>
    </div>
  </div>
</template>

  <script>
export default {
  name: 'mainComponent',
  data () {
    return {

    }
  },
  methods: {

  },
  props: [
    'items',
    'isShow'
  ]
}
  </script>

<style>
.el-icon-message::before {
  content: "\E72B";
}
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>