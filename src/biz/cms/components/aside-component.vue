<template>
  <div id="asideComponent">
    <el-aside class="el-aside">
      <el-menu :default-openeds="['1']"
               :default-active="1-1"
               unique-opened=true>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>Basic</template>
          <el-menu-item :index="1-1">
            <router-link to="/layout">Layout布局</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
            <router-link to="/container">Container布局容器</router-link>
          </el-menu-item>
          <el-menu-item index="1-3">
            <router-link to="/icon">Icon图标</router-link>
          </el-menu-item>
          <el-menu-item index="1-4">
            <router-link to="/button">Button按钮</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>Form</template>
          <el-menu-item index="2-1">
            <router-link to="/radio">Radio单选框</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <router-link to="/checkbox">Checkbox多选框</router-link>
          </el-menu-item>
          <el-menu-item index="2-3">
            <router-link to="/input">Input输入框</router-link>
          </el-menu-item>
          <el-menu-item index="2-4">
            <router-link to="/slider">Slider滑块</router-link>
          </el-menu-item>
          <el-menu-item index="2-5">
            <router-link to="/rate">Rate评分</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>Data</template>
          <el-menu-item index="3-1">
            <router-link to="/table">Table表格</router-link>
          </el-menu-item>
          <el-menu-item index="3-2">
            <router-link to="/tree">Tree树形控件</router-link>
          </el-menu-item>
          <el-menu-item index="3-3">
            <router-link to="/pagination">Pagination分页</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-tickets"></i>Notice</template>
          <el-menu-item index="4-1">
            <router-link to="/alert">Alert警告</router-link>
          </el-menu-item>
          <el-menu-item index="4-2">
            <router-link to="/loading">Loading加载</router-link>
          </el-menu-item>
          <el-menu-item index="4-3">
            <router-link to="/message">Message消息提示</router-link>
          </el-menu-item>
          <el-menu-item index="4-4">
            <router-link to="/notification">Notification通知</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title"><i class="el-icon-date"></i>Navigation</template>
          <el-menu-item index="5-1">
            <router-link to="/navmenu">NavMenu导航菜单</router-link>
          </el-menu-item>
          <el-menu-item index="5-2">
            <router-link to="/tabs">Tabs标签页</router-link>
          </el-menu-item>
          <el-menu-item index="5-3">
            <router-link to="/breadcrumb">Breadcrumb面包屑</router-link>
          </el-menu-item>
          <el-menu-item index="5-4">
            <router-link to="/steps">Steps步骤条</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title"><i class="el-icon-view"></i>Others</template>
          <el-menu-item index="6-1">
            <router-link to="/dialog">Dialog对话框</router-link>
          </el-menu-item>
          <el-menu-item index="6-2">
            <router-link to="/popover">Popover弹出框</router-link>
          </el-menu-item>
          <el-menu-item index="6-3">
            <router-link to="/card">Card卡片</router-link>
          </el-menu-item>
          <el-menu-item index="6-4">
            <router-link to="/carousel">Carousel走马灯</router-link>
          </el-menu-item>
          <el-menu-item index="6-5">
            <router-link to="/collapse">Collapse折叠面板</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title"><i class="el-icon-view"></i>设计模式</template>
          <el-menu-item index="7-1">
            <router-link to="/single">单例模式</router-link>
          </el-menu-item>
          <el-menu-item index="7-2">
            <router-link to="/strategy">策略模式</router-link>
          </el-menu-item>
          <el-menu-item index="7-3">
            <router-link to="/proxy">代理模式</router-link>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>

  <script>
export default {
  name: 'asideComponent',
  data () {
    return {

    }
  }
}
  </script>