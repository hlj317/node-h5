<template>
    <el-container id="strategy">
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
              定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。
            </div>
            <div v-else-if="selectedNav === 'code'" class="code-bg">
              <div>let getMoney = function (performance,salary){</div>
              <div class="indent4">if(performance === 'A'){</div>
              <div class="indent8">return salary * 4;</div>
              <div class="indent4">}else if(performance === 'B'){</div>
              <div class="indent8">return salary * 3;</div>
              <div class="indent4">}else if(performance === 'C'){</div>
              <div class="indent8">return salary * 2;</div>
              <div class="indent4">}else{</div>
              <div class="indent8">return salary * 1;</div>
              <div class="indent4">}</div>
              <div>}</div>
              <div>console.log(getMoney('A',5000)) //获得年终奖20000</div>
              <div>console.log(getMoney('B',4000)) //获得年终奖12000</div>
              <div>这段代码出现的问题：</div>
              <div>1、getMoney函数比较复杂，包含了很多if-else语句，这些语句需要覆盖所有的分支逻辑；</div>
              <div>2、getMoney函数缺乏弹性，如果要新增绩效或修改年终奖系数，必须修改函数内部实现，这是违法开放-封闭原则的；</div>
              <div>3、算法的复用性差，如果在程序的其他地方需要重用这些奖金计算方法，需要复制和粘贴；</div>
            </div>
            <div v-else-if="selectedNav === 'api'" class="code-bg">
              <div>let performanceA = function(){};  //绩效A的计算策略</div>
              <div>performanceA.prototype.calculate = function(salary){</div>
              <div class="indent4">return salary * 4;</div>
              <div>}</div>
              <div>let performanceB = function(){};  //绩效B的计算策略</div>
              <div>performanceB.prototype.calculate = function(salary){</div>
              <div class="indent4">return salary * 3;</div>
              <div>}</div>
              <div>let Money = function(){</div>
              <div class="indent4">this.salary = null;</div>
              <div class="indent4">this.strategy = null;</div>
              <div>}</div>
              <div>Money.prototype.setSalary = function (salary){</div>
              <div class="indent4">this.salary = salary;</div>
              <div>}</div>
              <div>Money.prototype.setStrategy = function (strategy){</div>
              <div class="indent4">this.strategy = strategy;</div>
              <div>}</div>
              <div>Money.prototype.getMoney = function(){</div>
              <div class="indent4">return this.strategy.calculate(this.salary);</div>
              <div>}</div>
              <div>//For example</div>
              <div>var xiaomi = new Money();</div>
              <div>xiaomi.setSalary(5000);</div>
              <div>xiaomi.setStrategy(new performanceA());</div>
              <div>xiaomi.getMoney();   //获得奖金20000</div>
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
            'name':'策略模式实现',
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

           let performanceA = function(){};  //绩效A的计算策略
           performanceA.prototype.calculate = function(salary){
              return salary * 4;
           }
           let performanceB = function(){};  //绩效B的计算策略
           performanceB.prototype.calculate = function(salary){
              return salary * 3;
           }
           let Money = function(){
              this.salary = null;
              this.strategy = null;
           }
           Money.prototype.setSalary = function (salary){
              this.salary = salary;
           }
           Money.prototype.setStrategy = function (strategy){
              this.strategy = strategy;
           }
           Money.prototype.getMoney = function(){
              return this.strategy.calculate(this.salary);
           }
           //For example
           var xiaomi = new Money();
           xiaomi.setSalary(5000);
           xiaomi.setStrategy(new performanceA());
           xiaomi.getMoney();   //获得奖金20000

        }
        
    },
    components: {
      headerComponent
    }
  };
</script>