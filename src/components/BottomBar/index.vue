<template>
  <div class="bottom-bar-container">
    <div class="CN-container" v-if="lang === 'cn'">
      <div class="wx-box" @click="shareWx">
        <div class="wx"></div>
        <p>微信邀请</p>
      </div>
      <div class="pyq-box" @click="sharePYQ">
        <div class="pyq"></div>
        <p>朋友圈</p>
      </div>
      <div class="qqfriend-box" @click="shareQQ">
        <div class="qqfriend"></div>
        <p>QQ好友</p>
      </div>
      <div class="faceinvite-box" @click="faceToQRCode">
        <div class="faceinvite"></div>
        <p>面对面邀请</p>
      </div>
    </div>
    <div class="EN-container" v-else>
      <div class="twitter-box">
        <div class="twitter"></div>
        <p>Twitter</p>
      </div>
      <div class="facebook-box">
        <div class="facebook"></div>
        <p>Facebook</p>
      </div>
      <div class="faceinvite-box" @click="faceToQRCode">
        <div class="faceinvite"></div>
        <p>Face to face</p>
      </div>
    </div>
  </div>
</template>

<script>
import { queryShare } from '@/assets/js/methods'
import axios from 'axios'
export default {
  props: {
    lang: {
      type: String,
      default: 'cn'
    }
  },
  data() {
    return {
      
    }
  },
  created() {
    
  },
  methods: {
    shareWx() {
      // 1 微信好友
      queryShare('wechat')
    },
    shareQQ() {
      // 2 QQ好友
      queryShare('qq')
    },
    sharePYQ() {
      // 3 朋友圈
      queryShare('moments')
    },
    shareFacebook() {
      // 4 Facebook
      queryShare('facebook')
    },
    shareTwitter() {
      // 5 Twitter
      queryShare('twitter')
    },
    faceToQRCode() {
      // 跳转二维码
      var params = window.location.search;
      var newUrl;
      if (/^http:/.test(window.location.protocol)) {
        newUrl = 'http://39.106.38.50/ono/m3-invite/page4.html' + params;
      } else {
        newUrl = 'https://front.ono.chat/ono/m3-invite/page4.html' + params;
      }
      window.location.href = newUrl;
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom-bar-container {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1.07rem;
  background:rgba(255,255,255,1);
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  box-shadow: 0rem 0rem 0.4rem 0 rgba(230,74,43,1) inset;
}
.CN-container, .EN-container {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0.3rem;
  display: flex;
  justify-content: space-around;
  padding: 0 0.35rem;
  >div {
    min-width: 0.96rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.21rem;
    position: relative;
    >div {
      width: 0.5rem;
      height: 0.5rem;
    }
    >p {
      position: absolute;
      bottom: 0rem;
      left: 50%;
      white-space: nowrap;
      transform: translateX(-50%);
      font-size:0.2rem;
      font-family:CTHeiTiSJ;
      font-weight:400;
      color:rgba(51,51,51,1);
    }
  }
}
.wx-box, .pyq-box, .qqfriend-box, .faceinvite-box, .twitter-box, .facebook-box {
  background-image: url(../../assets/img/circle.png);
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100% auto;
  .wx {
    background-image: url(../../assets/img/wechat.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% auto;
  }
  .pyq {
    background-image: url(../../assets/img/moments.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% auto;
  }
  .qqfriend {
    background-image: url(../../assets/img/qq.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: auto 100%;
  }
  .faceinvite {
    background-image: url(../../assets/img/facetoface.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% auto;
  }
  .twitter {
    background-image: url(../../assets/img/twitter.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% auto;
  }
  .facebook {
    background-image: url(../../assets/img/facebook.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% auto;
  }
}
</style>
