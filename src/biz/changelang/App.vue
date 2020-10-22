<template>
  <div id="langnav"
       class="langnav-page">
    <div class="nav">
      <span class="arrow"
            @click="returnPage">
        &lt; </span>
      <span class="title">Language</span>
    </div>
    <ul class="changelist">
      <li @click="pickLang('english')">
        <span class="name">English</span>
        <img src="./imgs/right.png"
             v-show="lists.english" />
      </li>
      <li @click="pickLang('chinese')">
        <span class="name">Chinese</span>
        <img src="./imgs/right.png"
             v-show="lists.chinese" />
      </li>
      <li @click="pickLang('taiwan')">
        <span class="name">Chinese-TaiWan</span>
        <img src="./imgs/right.png"
             v-show="lists.taiwan" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">
@import "~src/common/less/common.less";
html,
body {
  width: 100%;
  background: #f2f2f2;
  overflow-y: auto;
}
.langnav-page {
  .nav {
    margin: 0;
    padding: 25 / @b 0 25 / @b 20 / @b;
    border-bottom: 1 / @b solid #cccccc;
    text-align: center;
    position: relative;
    .arrow {
      position: absolute;
      left: 35 / @b;
      font-size: 34 / @b;
    }
    .title {
      font-weight: bold;
    }
  }
  .changelist {
    margin: 0;
    padding: 0;
    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: 35 / @b;
      padding: 25 / @b 0 25 / @b 0;
      justify-content: flex-end;
      border-bottom: 1 / @b solid #cccccc;
      .name {
        font-size: 28 / @b;
        flex: 1;
        text-align: left;
      }
      img {
        width: 40 / @b;
        height: 40 / @b;
        margin-right: 25 / @b;
      }
    }
  }
}
</style>
<script>
import axios from 'axios';
import { resolve } from 'url';
export default {
  data () {
    return {
      lists: {
        english: true,
        chinese: false,
        taiwan: false
      },
      currentLang: 'english'
    }
  },

  created () {
    this.init();
  },

  computed () {

  },

  methods: {
    init () {
      this.currentLang = localStorage.getItem('lang') || "english";
      for (let i in this.lists) {
        if (i === this.currentLang) {
          this.lists[i] = true;
        } else {
          this.lists[i] = false;
        }
      }
    },
    returnPage () {
      window.location.href = "/langnav";
    },
    pickLang (lang) {
      for (let i in this.lists) {
        this.lists[i] = false;
      }
      this.lists[lang] = true;
      localStorage.setItem('lang', lang);
      setTimeout(() => {
        window.location.href = "/langnav";
      }, 300)
    }
  }
}
</script>

