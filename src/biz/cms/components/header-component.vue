<template>
    <div id="headerComponent">
        <el-row>
            <el-col v-for="(item, index) in items" :key="index" :span="item.column">
                <div class="grid-content" :class="isSelected(item.type)" >
                    <i class="el-icon-info"></i>
                    <a href="#" @click="navSwitch(item.type)">{{item.name}}</a>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

  <script>
    export default {
      name:'headerComponent',
      data() {
        return {
            show: true
        }
      },
      methods:{

      },
      props:[
          'items',
          'navSwitch',
          'isSelected'
      ]
    }
  </script>