<template>
    <el-container id="proxy">
        <el-header>
            <headerComponent 
              :navSwitch="navSwitchFun"
              :items="myData"
              :isSelected="isSelected"
            >
            </headerComponent>
        </el-header>
        <el-main>
            <div v-if="selectedNav === 'effect'" class="code-bg">
              代理模式的关键是，当客户不方便直接访问一个对象或者不满足需要的时候，提供一个替身对象来控制对这个对象的访问，替身对象对请求做一些额外处理后，再把请求转交给本体对象。
            </div>
            <div v-else-if="selectedNav === 'code'" class="code-bg">
                <div>let MyImage = (function(){</div>
                    <div class="indent4">let imgNode = document.createElement('img');</div>
                    <div class="indent4">document.body.appendChild(imgNode);</div>
                    <div class="indent4">let img = new Image();</div>
                    <div class="indent4">img.onload = function(){</div>
                        <div class="indent8">imgNode.src = img.src;</div>
                    <div class="indent4">}</div>
                    <div class="indent4">return {</div>
                        <div class="indent8">setSrc:function(src){</div>
                          <div class="indent12">imgNode.src = 'loading.gif';</div>
                          <div class="indent12">img.src = src;</div>
                        <div class="indent8">}</div>
                    <div class="indent4">}</div>
                <div>})();</div>
                <div>MyImage.setSrc('test.jpg'); //添加测试图片</div>
            </div>
            <div v-else-if="selectedNav === 'api'" class="code-bg">
              <div>//添加图片方法</div>
              <div>let MyImage = (function(){</div>
              <div class="indent4">let imgNode = document.createElement('img');</div>
              <div class="indent4">document.body.appendChild(imgNode);</div>
              <div class="indent4">return {</div>
                  <div class="indent8">setSrc:function(src){</div>
                    <div class="indent12">imgNode.src = src;</div>
                  <div class="indent8">}</div>
              <div class="indent4">}</div>
            <div>})();</div>
            <div>//代理添加图片方法</div>
            <div>let ProxyImage = (function(){</div>
              <div class="indent4">let img = new Image();</div>
              <div class="indent4">img.onload = function(){</div>
                  <div class="indent8">MyImage.setSrc(img.src);</div>
              <div class="indent4">}</div>
              <div class="indent4">return {</div>
                  <div class="indent8">setSrc:function(src){</div>
                    <div class="indent12">MyImage.setSrc('gif');</div>
                    <div class="indent12">img.src = src;</div>
                  <div class="indent8">}</div>
              <div class="indent4">}</div>
            <div>})();</div>
            <div>ProxyImage.setSrc('test.jpg');  //通过代理模式，添加测试图片</div>
            </div>
            <div v-else>
              remark
            </div>
        </el-main>
    </el-container>
</template>

<style>
    .el-header {
      background-color: #B3C0D1;
      color: #666666;
      line-height: 60px;
      text-align: right; 
      font-size: 12px;
    }
    .code-bg{
      background-color: #333333;
      border-radius:5px;
      padding:20px;
      color:#ffffff;
      font-size: 14px;
      line-height: 25px;
    }
    .indent4{
      margin:0 0 0 20px;
    }
    .indent8{
      margin:0 0 0 40px;
    }
    .indent12{
      margin:0 0 0 60px;
    }
</style>

<script>
import headerComponent from '../../components/header-component.vue'
  export default {
    data() {
      return {
        show: true,
        selectedNav : 'effect',
        myData:[
          {
            'type':'effect',
            'name':'模式定义',
            'column':6
          },
          {
            'type':'code',
            'name':'最初代码实现',
            'column':6
          },
          {
            'type':'api',
            'name':'代理模式实现',
            'column':6
          },
          {
            'type':'remark',
            'name':'备注',
            'column':6
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
        },
        getMoney(){

           //添加图片方法
           let MyImage = (function(){
             let imgNode = document.createElement('img');
             document.body.appendChild(imgNode);
             return {
                setSrc:function(src){
                   imgNode.src = src;
                }
             }
           })();
           //代理添加图片方法
           let ProxyImage = (function(){
             let img = new Image();
             img.onload = function(){
                MyImage.setSrc(img.src);
             }
             return {
                setSrc:function(src){
                   MyImage.setSrc('gif');
                   img.src = src;
                }
             }
           })();
           ProxyImage.setSrc('test.jpg');  //通过代理模式，添加测试图片

        }
        
    },
    components: {
      headerComponent
    }
  };
</script>