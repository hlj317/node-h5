<template>
  <div id="movie"
       class="movie-page">
    <span>{{a}}</span>
    <span>countNum:{{countNum}}</span>
  </div>
</template>

<style scoped lang="less">
@import "~src/common/less/common.less";
html,
body {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  overflow-y: auto;
}
</style>
<script>
import axios from 'axios';
import { resolve } from 'url';
export default {
  data () {
    return {
      a: 5,
      countNum: 0
    }
  },

  created () {
    this.init();
  },

  computed () {

  },

  methods: {
    init () {
      this.getData();
    },
    getData () {
      this.request({
        'type': 'post',
        'url': '/getMovieList',
        'data': {
          'type': ['中国大陆']
        }
      }).then((res) => {
        this.a = 20;
        // alert(JSON.stringify(res.data.data['中国大陆'][1]));
      }, (err) => {
        // alert(err);
      });
    },
    request (obj) {
      return new Promise((resolve, reject) => {
        axios.request({
          method: obj['type'],
          url: obj['url'],
          data: obj['data']
        }).then(res => {
          resolve(res);
        })
          .catch(function (err) {
            reject(err);
          });
      })
    }
  }
}
</script>

