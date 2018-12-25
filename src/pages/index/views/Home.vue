<template>
  <div class="home-container" :class="{ 'bg-cn': lang === 'cn', 'bg-en': lang !== 'cn' }">
    <div class="top-bg"></div>
    <div class="home-info">
      <p class="notice">
        <van-notice-bar
          :text="description"
        />
      </p>
      <div class="invite-info">
        <p class="onot">{{ onots || 0 }}</p>
        <p class="get-onot">{{ $t('getONOT') }}</p>
        <div class="line"></div>
        <div class="already-invite">
          <div class="invite1" @click="jumpInvite1">
            <p>{{ level_first_count }}</p>
            <p>{{ $t('firstLevel') }}</p>
          </div>
          <div class="invite2" @click="jumpInvite2">
            <p>{{ level_second_count }}</p>
            <p>{{ $t('secondLevel') }}</p>
          </div>
          <!-- <div class="invite3">
            <p>122</p>
            <p>{{ '唤醒好友' }}</p>
          </div> -->
          <button class="btn" @click="inviteFriends">{{ $t('inviteNow') }}</button>
        </div>
      </div>
      <!-- 我的邀请码 -->
      <div class="my-ono-invite-number">
        <p class="my-number">{{ `${$t('inviteCode')}: ${invite_code}` }}</p>
        <!-- <button class="copy-btn">{{'点击复制'}}</button> -->
      </div>
      <!-- 邀请好友，ONOT无上限 -->
      <invite-friend></invite-friend>
      <!-- 简单三步，轻松赚钱 -->
      <three-step></three-step>
      <!-- 赚钱小技巧 -->
      <small-tip></small-tip>
      <!-- 底部栏 -->
      <bottom-bar :lang="lang"></bottom-bar>
    </div>
  </div>
</template>

<script>
import InviteFriend from '@/components/InviteFriend';
import ThreeStep from '@/components/ThreeStep';
import SmallTip from '@/components/SmallTip';
import BottomBar from '@/components/BottomBar';
import { queryShare } from '@/assets/js/methods.js';
import { findInviteInfoList, getInviteTotalInfo, getUidInfo } from '@/assets/api/index.js';
import { getQueryVariable } from '@/assets/js/getQueryVariable.js';
export default {
  components: {
    InviteFriend,
    ThreeStep,
    SmallTip,
    BottomBar
  },
  data () {
    return {
      uid: '',
      token: '',
      invite_code: '', // 我的邀请码
      level_first_count: 0, // 一级好友人数
      level_first_onot: '', // 一级好友可获得的onot
      level_second_count: 0, // 二级好友人数
      level_second_onot: '', // 二级好友可获得的onot
      onots: 0, // 获得的onot奖励
      invite_info_list: [],
      description: '',
      lang: 'cn'
    }
  },
  created() {
    this.uid = getQueryVariable('uid');
    this.token = getQueryVariable('t');
    this.lang = getQueryVariable('lang');
    this.findInviteInfoList();
    this.getInviteTotalInfo();
  },
  mounted() {
    // console.log('======== mounted ========')
    document.getElementsByTagName('title')[0].innerText = this.$t('title');
  },
  methods: {
    // 掉起App端分享底栏
    inviteFriends() {
      queryShare('all');
    },
    // 拉取小喇叭上的数据 区分中英文
    findInviteInfoList() {
      findInviteInfoList({
        uid: this.uid,
        token: this.token,
        lang: this.lang
      }).then(res => {
        console.log(res)
        if (res.data.status.code === 0) {
          this.invite_info_list = res.data.data.invite_info_list;
          this.invite_info_list.forEach((ele, index) => {
            this.description += `  ${ele.description}`; 
          })
        }
      })
    },
    // 拉取index页面总的数据
    getInviteTotalInfo() {
      getInviteTotalInfo({
        uid: this.uid,
        token: this.token
      }).then(res => {
        console.log(res)
        if (res.data.status.code === 0) {
          this.invite_code = res.data.data.code;
          this.level_first_count = res.data.data.level_first_count;
          this.level_first_onot = res.data.data.level_first_onot;
          this.level_second_count = res.data.data.level_second_count;
          this.level_second_onot = res.data.data.level_second_onot;
          this.onots = res.data.data.onots;
        }
      })
    },
    // 跳转页面
    jumpInvite1() {
      var params = window.location.search;
      if (/^http:/.test(window.location.protocol)) {
        window.location.href = 'http://39.106.38.50/ono/m3-invite/page2.html' + params + '&level=1'
      } else {
        window.location.href = 'https://front.ono.chat/ono/m3-invite/page2.html' + params + '&level=1'
      }
    },
    jumpInvite2() {
      var params = window.location.search;
      if (/^http:/.test(window.location.protocol)) {
        window.location.href = 'http://39.106.38.50/ono/m3-invite/page2.html' + params + '&level=2'
      } else {
        window.location.href = 'https://front.ono.chat/ono/m3-invite/page2.html' + params + '&level=2'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  position: relative;
  padding-top: 3.72rem;
  width: 100%;
  min-height: 100vh;
  // background-image: url(../../../assets/img/inbg1.jpg);
  background-size: 100% auto;
  background-position: 0 -0rem;
  background-repeat: no-repeat;
}
.bg-cn {
  background-image: url(../../../assets/img/inbg1.jpg);
  background-position:  0 -0.15rem;
}
.bg-en {
  background-image: url(../../../assets/img/inbg1_en.jpg);
  background-position:  0 0rem;
}
.top-bg {
  position: absolute;
  width: 100%;
  height: 3rem;
  top: 3rem;
  background-image:  url(../../../assets/img/inbg2.png);
  background-size:  100% auto;
  background-repeat: no-repeat;
}
.home-info {
  width: 100%;
  min-height: 10rem;
  background-image: linear-gradient(51deg,rgba(255,112,42,1),rgba(230,74,43,1));
  // border-radius: 0.3rem;
  margin-top: -0.05rem;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 0.35rem;
}
.notice {
  width:6.89rem;
  height:0.66rem;
  background-color: rgba(255,222,176,1);
  background-image: url(../../../assets/img/notice.png);
  background-size: 0.35rem 0.29rem;
  background-position: 0.22rem center;
  background-repeat: no-repeat;
  border:0.02px solid rgba(255, 214, 20, 1);
  opacity:0.7;
  border-radius: 0.3rem;
  text-align: left;
  text-indent: 0.83rem;
  font-family: SourceHanSansCN-Medium;
  font-weight:500;
  font-size:0.28rem;
  color:rgba(163,78,22,1);
  line-height: 0.65rem;
}
/deep/ .notice .van-notice-bar {
  padding-left: 0.7rem;
  width: 100%;
  height: 100%;
  position: relative;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  color: #ed6a0c;
  background-color: rgba(0,0,0,0);
}
.invite-info {
  width:6.89rem;
  height:4.27rem;
  background:rgba(255,255,255,1);
  border-radius: 0.3rem;
  margin-top: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.onot {
  font-size:0.64rem;
  font-family: Gobold;
  font-weight: 400;
  color: rgba(234,79,43,1);
  font-weight: bold;
  margin-top: 0.2rem;
  padding-top: 0.1rem;
}
.get-onot {
  font-size:0.26rem;
  font-family:SourceHanSansCN-Medium;
  font-weight:500;
  color:rgba(234,79,43,1);
  line-height:0.4rem;
  margin-top: 0.2rem;
}
.line {
  width:6.1rem;
  height:0.02rem;
  margin-top: 0.2rem;
  background:rgba(92,92,92,1);
  opacity:0.1;
}
.already-invite {
  width: 6.1rem;
  height: 1.6rem;
  display: flex;
  // justify-content: space-between;
  justify-content: space-around;
  align-items: center;
  position: relative;
  >div {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 0.25rem;
    >p:first-child {
      font-size:0.46rem;
      font-family:Gobold;
      font-weight:bold;
      color:rgba(51,51,51,1);
    }
    >p:last-child {
      font-size:0.24rem;
      font-family:SourceHanSansCN-Medium;
      font-weight:bold;
      color:rgba(102,102,102,1);
    }
  }
}
.btn {
  position: absolute;
  bottom: -75%;
  left: 50%;
  transform: translateX(-50%);
  width:5.18rem;
  height:0.9rem;
  background:linear-gradient(180deg,rgba(255,211,34,1),rgba(255,165,9,1));
  box-shadow:0rem 0.09rem 0.40rem 0rem rgba(189,23,35,0.6);
  font-size:0.36rem;
  font-family:'FZLTZHK--GBK1-0';
  font-weight:600;
  color:rgba(189,23,35,1);
  font-weight: bold;
  border: none;
  outline: none;
  border-radius: 0.45rem;
  padding-top: 0.13rem;
}
.my-ono-invite-number {
  margin-top: 0.78rem;
  font-size:0.26rem;
  font-family:SourceHanSansCN-Regular;
  font-weight:bold;
  color:rgba(255,255,255,1);
  .my-number {
    display: inline-block;
  }
  .copy-btn {
    background: rgb(239, 84, 28);
    color:rgba(255,255,255,1);
    font-weight: bold;
    text-decoration: underline;
    outline: none;
    border: none;
  }
}
</style>
