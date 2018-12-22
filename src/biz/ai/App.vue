<template>
  <div id="movie">
    <Popup ref="popup"></Popup>
    <div class="title">人工智能匹配</div>
    <div class="account_form">
      <input
        type="text"
        class="account_btn"
        value
        id="username"
        placeholder="我的战队名称"
        v-model="my_team"
      >
    </div>
    <div class="vest_team">
      <input type="button" class="modify" value="修改名称" @click="modify">
    </div>
    <div class="vest_team">
      <span class="vest_title">对手战队名称：</span>
      <span class="team_name">{{vest_title}}</span>
    </div>
  </div>
</template>

<style lang="less">
@import "~src/common/less/common.less";
#movie {
  font-size: 24 / @base;
  text-align: left;
  margin: 30 / @base 0 0 20 / @base;
  line-height: 40px;
  .title {
    font-size: 48 / @base;
    margin: 70 / @base 0;
    text-align: center;
  }
  .account_form {
    border: 2px solid #999999;
    border-radius: 7 / @base;
    width: 650 / @base;
    margin: 0 auto;
    overflow: hidden;
  }
  .account_btn,
  .password_btn {
    width: 650 / @base;
    padding: 30 / @base 0 30 / @base 20 / @base;
    display: block;
  }
  .vest_team {
    width: 650 / @base;
    margin: 40 / @base auto;
    .modify {
      padding: 5 / @base 20 / @base;
      border-radius: 8 / @base;
      background: #e6412c;
      color: #fff;
    }
    .vest_title {
    }
    .team_name {
      color: #e6412c;
    }
  }
}
</style>

<script>
import axios from "axios";
import Popup from "../common/components/Popup.vue";
export default {
  data() {
    return {
      my_team: "",
      vest_title: "机器猫战队",
      words:{
          /*求和*/
          '不动':['同意','我们也累了','你们别耍诈','做人要诚信','敌不动我不动'],
          '平':['考虑一下','再说吧','怕了吗','别怂呀','不相信'],
          '和':['算了吧','你以为我们会相信？','你们别耍诈','做人要诚信','看看情况'],
          
          /*挑衅*/
          '不行':['你才不行','切','等着瞧吧','wait and see','走着瞧'],
          '菜':['你才菜呢','比你强就行了','看结果吧','少废话，就是干','晚上11点见'],
          '浪费':['对你自己说吧','不会放弃的','坚持到底','还有希望呢','最后一刻见'],
          '白费':['今天赢得肯定是我们','不要高兴得太早','胜利肯定是我们','我们赢定了','打爆你们哦'],
          '呵呵':['笑啥笑','我们也呵呵','不要高兴得太早','呵呵呵呵','同志们加油'],
          '怂':['来么','不','结果见','来吧','少废话'],
          '干':['不要太冲动了','你们要想好','年轻人太冲动了','得饶人处且饶人','希望不要哭'],
          '牛逼':['还是你们牛逼','还是你们厉害','彼此彼此','确实强呀','还行吧'],
          '爆':['少说话多做事儿','实力证明','要你们哭','谁爆谁哦','很有自信么'],

          /*必胜信念*/
          '赢':['放马过来吧','不要想得太美','精神可嘉呀','理想是美好的','不要太有胜负心'],
          '加油':['一起加油','我们也加油','玩得开心就好','come on！','拼一拼哦'],
          '胜':['我们才是最后的赢家','放弃吧','别白费功夫了'],
          '拼':['努力是白费的','不要太看重结果','我们也会努力的'],

          /*辱骂*/
          '傻':['你骂谁呢','傻子乐','要你哭'],
          '蠢':['希望不是说自己哦','怎么也比你们聪明','靠实力吧，不要废话'],
          '狗':['文明比赛','友谊第一','唉'],
          '猪':['你才猪呢','靠实力说话','你们激怒了我的小宇宙'],
          '菜':['你最菜了','别哭哦','来么来么少废话'],
          '妈逼':['屏蔽','不跟你这种人计较','打哭你'],
          '逼':['心态最重要','冷静','王之藐视'],
          '大爷':['大哈哈爷咯','不跟你计较','你大爷还是你大爷'],
          '脑残':['何必呢','输不起呀','看谁是咯'],
          '贱':['还是你们更胜一筹','比不过你们','在这方面确实不如你们'],
          '杂种':['闭嘴吧','我靠','你彻底激怒了我们'],
          '2B':['今天要让你们哭','打爆你们','一个字，干！'],
          'MB':['可不可以文明点','我们靠实力PK吧','就会嘴上功夫'],
          '屎':['嘴真臭哦','嘴贱无敌','忍无可忍无需再忍'],

          /*讨饶*/
          '大哥':['叫大哥也没用哦','该赢还得赢','抱歉了兄弟这局得赢'],
          '兄弟':['四海一家人','友谊第一比赛第二','该赢还得赢'],
          '放水':['不行啦','先赢了这局吧','还是得赢哦'],
          '放一马':['你们加油咯','靠实力么','你们行的呀'],
          '累':['我们也累哦','不要放弃哈','坚持住哦'],
          '让':['我们就是为了赢','不行哦','还是要赢的'],
          '求':['我不吃这套哦','求人不如求己','对不住了哦'],

          /*恭维*/
          '厉害':['你们也不错哦','彼此彼此哦','今天拼尽全力了'],
          '强':['彼此彼此啦','强中自有强中手','全力一搏吧'],

          /*开心*/
          '耶':['厉害呀','确实强','希望明天还能碰到'],
          '哦耶':['好棒哈','确实厉害','任重道远呀'],
          '欧耶':['明天见哦','厉害厉害厉害','开心就好哦'],
          '哈哈':['哈哈哈哈哈','哦哈哈嘿嘿都棒棒的','大家都很棒'],
          '嘿嘿':['笑得好猥琐呀','别高兴太早哦','玩得开心就好'],
          '好样':['为友谊干杯','都加油吧','今天很开心'],

          /*其它*/
          '能量':['我们也需要哦','今天一定要赢','坚持到底就是胜利','必须赢','谁都需要能量'],
          '水':['水是能量之源','看谁人缘更好吧','水水水水水！']
      }
    };
  },
  created() {
    this.init();
  },
  watch: {},
  methods: {
    init() {},
    modify() {
      if(this.vest_title === '') return;
      this.vest_title = "正在思考中...";
      setTimeout(() => {
        let val = this.my_team;
        this.vest_title = this.getTitle(val.trim());
      }, 1500);
    },
    getTitle(val) {
      for(let key in this.words){
        if (val.indexOf(key) >= 0) {
            let num = parseInt(Math.random()*(this.words[key].length),10); 
            let text = this.words[key][num];
            this.filterWords(key,num);
            return text;
        }
      }
      return "机器猫战队";
    },
    filterWords(key,num){
        this.words[key].splice(num,1);
        if(this.words[key].length === 0){
            delete this.words[key];
        }
    },
    words(value){

    }
  }
};
</script>

