<template>
  <div id="langnav"
       class="langnav-page">
    <div class="top"></div>
    <div class="middle">
      <div class="login">
        <div class="title">
          <div class="portrait">
            <img src="./imgs/user.png" />
          </div>
          <div class="username">
            {{$t("login.name")}}
          </div>
          <div class="arrow">
            >
          </div>
        </div>
        <ul class="statistics">
          <li><strong>-</strong><br />{{$t("statistics.viewed")}}</li>
          <li><strong>-</strong><br />{{$t("statistics.wishlist")}}</li>
          <li><strong>-</strong><br />{{$t("statistics.coupon")}}</li>
        </ul>
      </div>
      <div class="orders">
        <div class="title">
          <div class="name">{{$t("orders.title")}}</div>
          <div class="enter">{{$t("orders.all")}}</div>
          <div class="arrow">></div>
        </div>
        <ul class="navigator">
          <li><img src="./imgs/delivery.png" /><br />{{$t("orders.unpaid")}}</li>
          <li><img src="./imgs/delivery.png" /><br />{{$t("orders.processing")}}</li>
          <li><img src="./imgs/delivery.png" /><br />{{$t("orders.shipped")}}</li>
          <li><img src="./imgs/delivery.png" /><br />{{$t("orders.delivered")}}</li>
          <li><img src="./imgs/delivery.png" /><br />{{$t("orders.refund")}}</li>
        </ul>
      </div>
      <div class="wallet">
        <div class="name">{{$t("wallet.title")}}</div>
        <div class="enter">{{$t("wallet.message")}}</div>
        <div class="arrow">></div>
      </div>
      <div class="language">
        <div class="title">{{$t("language.title")}}</div>
        <div class="change"
             @click="changeLang">
          <div class="icon">
            <img src="./imgs/customer.png" />
          </div>
          <div class="notice">{{$t("language.name")}}</div>
          <div class="name">{{$t("language.country")}}</div>
          <div class="arrow">></div>
        </div>
        <div class="flag"
             @click="changeLang">
          <div class="icon">
            <img src="./imgs/customer.png" />
          </div>
          <div class="notice">{{$t("language.shipTo")}}</div>
          <div class="pattern">
            <img :src="selectedFlag" />
          </div>
          <div class="arrow">></div>
        </div>
      </div>
      <div class="service">
        <div class="title">{{$t("service.title")}}</div>
        <ul class="list">
          <li>
            <img src="./imgs/customer.png" />
            <span class="name">{{$t("service.support")}}</span>
            <span class="arrow">></span>
          </li>
          <li>
            <img src="./imgs/customer.png" />
            <span class="name">{{$t("service.find")}}</span>
            <span class="arrow">></span>
          </li>
          <li>
            <img src="./imgs/customer.png" />
            <span class="name">{{$t("service.manage")}}</span>
            <span class="arrow">></span>
          </li>
          <li class="last">
            <img src="./imgs/customer.png" />
            <span class="name">{{$t("service.about")}}</span>
            <span class="arrow">></span>
          </li>
        </ul>
      </div>
    </div>
    <ul class="bottom">
      <li class="selected"><a href="javascript:void(0)">{{$t("bottombar.home")}}</a></li>
      <li><a href="javascript:void(0)">{{$t("bottombar.categories")}}</a></li>
      <li><a href="javascript:void(0)">{{$t("bottombar.cart")}}</a></li>
      <li><a href="javascript:void(0)">{{$t("bottombar.account")}}</a></li>
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
  position: relative;
  .top {
    position: absolute;
    background-color: #fb443e;
    width: 100%;
    height: 260 / @b;
    z-index: 1;
  }
  .middle {
    background-color: transparent;
    position: absolute;
    top: 120 / @b;
    z-index: 2;
    .login {
      border-radius: 10 / @b;
      width: 710 / @b;
      margin: 20 / @b;
      height: 230 / @b;
      background-color: #ffffff;
      .title {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 15 / @b 0 10 / @b 15 / @b;
        .portrait {
          img {
            width: 86 / @b;
            height: 86 / @b;
            border: 0;
          }
        }
        .username {
          margin: 0 0 0 15 / @b;
          font-weight: bold;
        }
        .arrow {
          flex: 1;
          text-align: right;
          margin-right: 25 / @b;
          color: #666666;
        }
      }
      .statistics {
        margin: 0;
        padding: 10 / @b 0 0 0;
        border-top: 1 / @b solid #cccccc;
        border-radius: 0;
        margin: 0 20 / @b;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        li {
          margin: 0 60 / @b;
          text-align: center;
          color: #9f9f9f;
          font-size: 24 / @b;
          strong {
            font-size: 40 / @b;
            color: #333333;
          }
        }
      }
    }
    .orders {
      border-radius: 10 / @b;
      width: 710 / @b;
      margin: 20 / @b;
      height: 190 / @b;
      background-color: #ffffff;
      .title {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 15 / @b 0 10 / @b 15 / @b;
        justify-content: flex-end;
        font-weight: bold;
        .name {
          flex: 1;
          text-align: left;
          font-size: 26 / @b;
          margin-left: 10 / @b;
        }
        .enter {
          color: #9f9f9f;
          font-size: 24 / @b;
          font-weight: normal;
          margin-right: 12 / @b;
        }
        .arrow {
          color: #9f9f9f;
          font-size: 24 / @b;
          font-weight: normal;
          margin-right: 28 / @b;
        }
      }
      .navigator {
        margin: 0;
        padding: 20 / @b 0 0 0;
        border-top: 1 / @b solid #cccccc;
        border-radius: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        li {
          margin: 0 32 / @b;
          text-align: center;
          color: #9f9f9f;
          font-size: 24 / @b;
          img {
            width: 60 / @b;
            height: 50 / @b;
            border: 0;
          }
        }
      }
    }
    .wallet {
      border-radius: 10 / @b;
      width: 695 / @b;
      margin: 20 / @b;
      height: 50 / @b;
      background-color: #ffffff;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 15 / @b 0 10 / @b 15 / @b;
      justify-content: flex-end;
      font-weight: bold;
      .name {
        flex: 1;
        text-align: left;
        font-size: 26 / @b;
        margin-left: 10 / @b;
      }
      .enter {
        color: #9f9f9f;
        font-size: 24 / @b;
        font-weight: normal;
        margin-right: 12 / @b;
      }
      .arrow {
        color: #9f9f9f;
        font-size: 24 / @b;
        font-weight: normal;
        margin-right: 28 / @b;
      }
    }
    .language {
      border-radius: 10 / @b;
      width: 710 / @b;
      margin: 20 / @b;
      height: 220 / @b;
      background-color: #ffffff;
      .title {
        font-size: 26 / @b;
        padding: 20 / @b 0 20 / @b 30 / @b;
        border-bottom: 1 / @b solid #cccccc;
        font-weight: bold;
      }
      .change {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 35 / @b;
        padding: 15 / @b 0 15 / @b 0;
        justify-content: flex-start;
        border-bottom: 1 / @b solid #cccccc;
        .icon {
          img {
            width: 35 / @b;
            height: 35 / @b;
          }
        }
        .notice {
          margin-left: 15 / @b;
          font-size: 24 / @b;
        }
        .name {
          flex: 1;
          text-align: right;
          color: #000000;
          font-size: 24 / @b;
          font-weight: normal;
          margin-right: 12 / @b;
        }
        .arrow {
          color: #9f9f9f;
          font-size: 24 / @b;
          font-weight: normal;
          margin-right: 28 / @b;
        }
      }
      .flag {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 35 / @b;
        padding: 15 / @b 0 0 0;
        justify-content: flex-start;
        .icon {
          img {
            width: 35 / @b;
            height: 35 / @b;
          }
        }
        .notice {
          margin-left: 15 / @b;
          font-size: 24 / @b;
        }
        .pattern {
          flex: 1;
          text-align: right;
          margin-right: 15 / @b;
          img {
            width: 45 / @b;
            height: 28 / @b;
            margin-top: 10 / @b;
          }
        }
        .arrow {
          color: #9f9f9f;
          font-size: 24 / @b;
          font-weight: normal;
          margin-right: 28 / @b;
        }
      }
    }
    .service {
      border-radius: 10 / @b;
      width: 710 / @b;
      margin: 20 / @b;
      height: 340 / @b;
      background-color: #ffffff;
      .title {
        font-size: 26 / @b;
        padding: 20 / @b 0 20 / @b 30 / @b;
        border-bottom: 1 / @b solid #cccccc;
        font-weight: bold;
      }
      .list {
        margin: 0;
        padding: 0;
        li {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-left: 35 / @b;
          padding: 15 / @b 0 15 / @b 0;
          justify-content: flex-start;
          border-bottom: 1 / @b solid #cccccc;
          font-size: 24 / @b;
          .name {
            margin-left: 15 / @b;
          }
          img {
            width: 35 / @b;
            height: 35 / @b;
          }
          .arrow {
            flex: 1;
            text-align: right;
            color: #9f9f9f;
            font-size: 24 / @b;
            font-weight: normal;
            margin-right: 28 / @b;
          }
          &.last {
            border-bottom: none;
          }
        }
      }
    }
  }
  .bottom {
    position: fixed;
    bottom: 0;
    z-index: 3;
    height: 120 / @b;
    width: 100%;
    border-top: 1 / @b solid #f1f1f1;
    background-color: #ffffff;
    margin: 0;
    padding: 10 / @b 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    li {
      margin: 70 / @b 30 / @b 0 30 / @b;
      text-align: center;
      color: #333333;
      font-size: 24 / @b;
      font-weight: bold;
      a {
        background: url("./imgs/shop.png") no-repeat center 0;
        text-align: center;
        background-size: 50 / @b 50 / @b;
        display: block;
        width: 120 / @b;
        height: 100 / @b;
        padding: 60 / @b 0 0 0;
      }
      &.selected a {
        background: url("./imgs/shop_selected.png") no-repeat center 0;
        text-align: center;
        background-size: 50 / @b 50 / @b;
        display: block;
        width: 120 / @b;
        height: 100 / @b;
        padding: 60 / @b 0 0 0;
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
      currentLang: "english",
      selectedFlag: require("./imgs/flag.png"),
      lists: {
        "english": require("./imgs/flag.png"),
        "chinese": require("./imgs/flag2.png"),
        "taiwan": require("./imgs/flag3.png")
      }
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
      if (this.currentLang === "english") {
        this.$i18n.locale = "en";
      } else if (this.currentLang === "chinese") {
        this.$i18n.locale = "cn";
      } else if (this.currentLang === "taiwan") {
        this.$i18n.locale = "tw";
      }
      for (let i in this.lists) {
        if (i === this.currentLang) {
          this.selectedFlag = this.lists[i];
        }
      }
    },
    changeLang () {
      window.location.href = "/changelang"
    }
  }
}
</script>

