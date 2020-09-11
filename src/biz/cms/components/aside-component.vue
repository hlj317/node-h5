<template>
  <div id="asideComponent">
    <el-aside class="el-aside">
        <el-menu :default-openeds="['1']" :default-active="1-1" unique-opened=true >
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>Basic2</template>
              <el-menu-item :index="1-1"><router-link to="/cms">Layout布局</router-link></el-menu-item>
              <el-menu-item index="1-2">Container布局容器</el-menu-item>
              <el-menu-item index="1-3">Icon图标</el-menu-item>
              <el-menu-item index="1-4">Button按钮</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>Form</template>
              <el-menu-item index="2-1">Radio单选框</el-menu-item>
              <el-menu-item index="2-2">Checkbox多选框</el-menu-item>
              <el-menu-item index="2-3">Input输入框</el-menu-item>
              <el-menu-item index="2-4">Slider滑块</el-menu-item>
              <el-menu-item index="2-5">Rate评分</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>Data</template>
              <el-menu-item index="3-1">Table表格</el-menu-item>
              <el-menu-item index="3-2">Tree树形控件</el-menu-item>
              <el-menu-item index="3-3">Pagination分页</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-tickets"></i>Notice</template>
              <el-menu-item index="4-1">Alert警告</el-menu-item>
              <el-menu-item index="4-2">Loading加载</el-menu-item>
              <el-menu-item index="4-3">Message消息提示</el-menu-item>
              <el-menu-item index="4-4">Notification通知</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"><i class="el-icon-date"></i>Navigation</template>
              <el-menu-item index="5-1">NavMenu导航菜单</el-menu-item>
              <el-menu-item index="5-2">Tabs标签页</el-menu-item>
              <el-menu-item index="5-3">Breadcrumb面包屑</el-menu-item>
              <el-menu-item index="5-4">Steps步骤条</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title"><i class="el-icon-view"></i>Others</template>
              <el-menu-item index="6-1">Dialog对话框</el-menu-item>
              <el-menu-item index="6-2">Popover弹出框</el-menu-item>
              <el-menu-item index="6-3">Card卡片</el-menu-item>
              <el-menu-item index="6-4">Carousel走马灯</el-menu-item>
              <el-menu-item index="6-5">Collapse折叠面板</el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title"><i class="el-icon-view"></i>设计模式</template>
              <el-menu-item index="7-1"><router-link to="/cms/single">单例模式</router-link></el-menu-item>
              <el-menu-item index="7-2"><router-link to="/cms/strategy">策略模式</router-link></el-menu-item>
              <el-menu-item index="7-3"><router-link to="/cms/proxy">代理模式</router-link></el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
    </div>
</template>

  <script>
    export default {
      name:'asideComponent',
      data() {
        return {

        }
      }
    }
  </script>