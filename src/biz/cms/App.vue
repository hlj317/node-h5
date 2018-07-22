<template>
  <el-container id="app" class="el-container">
    <aside-component></aside-component>
    <el-container>
      <el-header>
        <headerComponent 
          :navSwitch="navSwitchFun"
          :items="myData"
          :isSelected="isSelected"
          >
        </headerComponent>
      </el-header>
      
      <el-main>

        <main-component
          :items="myData"
          :isShow="isShow"
        ></main-component>
        
      </el-main>

    </el-container>
    
  </el-container>

</template>

<script>
import asideComponent from './components/aside-component.vue'
import headerComponent from './components/header-component.vue'
import mainComponent from './components/main-component.vue'
export default {
    data() {
      return {
        show: true,
        selectedNav : 'effect',
        myData:[
          {
            'type':'effect',
            'name':'效果',
            'column':6,
            'html':'暂无'
          },
          {
            'type':'code',
            'name':'代码',
            'column':6,
            'html':'<el-row :gutter="20"><el-col :span="6"><div class="grid-content bg-purple"></div></el-col><el-col :span="6"><div class="grid-content bg-purple"></div></el-col><el-col :span="6"><div class="grid-content bg-purple"></div></el-col><el-col :span="6"><div class="grid-content bg-purple"></div></el-col></el-row>'
          },
          {
            'type':'api',
            'name':'文档',
            'column':6,
            'html':'暂无2'
          },
          {
            'type':'remark',
            'name':'备注',
            'column':6,
            'html':'暂无3'
          }
        ]
      }
    },

    methods:{
        navSwitchFun:function(nav){
           this.type = nav;
           this.selected = nav;
           this.selectedNav = nav;
        },
        isSelected:function(type){
          return {
            'selected': this.selectedNav === type
          };
        },
        isShow:function(type){
          return this.selectedNav === type;
        }
    },
    components: {
      asideComponent,
      headerComponent,
      mainComponent
    }
}
</script>

<style>
  .el-container{
     height: 550px; 
     border: 1px solid #eee;
     font-size:12px;
  }
  .el-aside{
     width:200px;
     background:#ffffff;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #666666;
    line-height: 60px;
    text-align: right; 
    font-size: 12px;
  }

 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    text-align: left;
    font-size: 14px;
    font-weight: bold;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .grid-content a{
    margin-left:5px;
    color:#333;
    text-decoration:none;
  }
  .grid-content a:hover{
    text-decoration:underline;
  }
  .grid-content.selected{
    color:#409EFF;
    font-size: 18px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  
  .el-aside {
    color: #333;
  }

  .container-title{
    color:#333333;
    font-size: 16px;
    margin-bottom: 10px;
  }

.transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }

</style>
