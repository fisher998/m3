<template>
  <div class="page-friends" :class="{ 'page-friends-bg-cn': lang === 'cn', 'page-friends-bg-en': lang !== 'cn' }">
    <div class="top-bg"></div>
    <div class="friends-container">
      <div class="friends-tab">
        <div class="tab1" :class="{'active': level === 1}" @click="setLevel(1)">
          <p v-show="lang === 'cn'">{{ $t('firstLevel1') }}</p>
          <p v-show="lang === 'cn'">{{ $t('firstLevel2') }}</p>
          <p v-show="lang === 'en'" class="p-en">{{ `${$t('firstLevel1')} ${$t('firstLevel2')}` }}</p>
        </div>
        <div class="tab2" :class="{'active': level === 2}" @click="setLevel(2)">
          <p v-show="lang === 'cn'">{{ $t('secondLevel1') }}</p>
          <p v-show="lang === 'cn'">{{ $t('secondLevel2') }}</p>
          <p v-show="lang === 'en'" class="p-en">{{ `${$t('secondLevel1')} ${$t('secondLevel2')}` }}</p>
        </div>
      </div>
      <invite-list :inviteList="invite_list" @loadMore="loadMore"></invite-list>
    </div>
  </div>
</template>

<script>
import InviteList from '@/components/InviteList';
import { findInviteList } from '@/assets/api/index.js';
import { getQueryVariable } from '@/assets/js/getQueryVariable.js';
export default {
  components: {
    InviteList
  },
  data() {
    return {
      uid: '',
      token: '',
      level: 1,
      invite_list: [], // 邀请列表
      lang: '',
      offset: 0
    }
  },
  created() {
    this.uid = getQueryVariable('uid');
    this.token = getQueryVariable('t') || '5c11fc21da0b45eba45cf79e09f5995b';
    this.level = Number(getQueryVariable('level') || 1);
    this.lang = getQueryVariable('lang');
    console.log(this.lang)
    this.findInviteList();
    console.log(this.level)
  },
  mounted() {
    // console.log('======== mounted ========')
    document.getElementsByTagName('title')[0].innerText = this.$t('title');
  },
  methods: {
    setLevel(level) {
      this.level = level;
    },
    // 查询邀请列表
    findInviteList() {
      findInviteList({
        uid: this.uid, 
        token: this.token,
        level: this.level,
        offset: this.offset
      }).then(res => {
        console.log(res)
        if (res.data.status.code === 0) {
          if (res.data.data.invite_list.length > 0) {
            this.invite_list = this.invite_list.concat(res.data.data.invite_list);
          }
        }
      })
    },
    // 加载更多
    loadMore() {
      console.log('家在')
      this.offset += 1;
      this.findInviteList({
        uid: this.uid,
        token: this.token,
        level: this.level,
        offset: this.offset
      })
    }
  },
  watch: {
    level(level) {
      this.invite_list = [];
      this.offset = 0;
      this.findInviteList({
        uid: this.uid,
        token: this.token,
        level: this.level,
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.page-friends {
  position: relative;
  padding-top: 3.72rem;
  width: 100%;
  min-height: 100vh;
  background-size: 100% auto;
  background-position: 0 -0rem;
  background-repeat: no-repeat;
}
.page-friends-bg-cn {
  background-image: url(../../../assets/img/inbg1.jpg), linear-gradient(51deg,rgba(255,112,42,1),rgba(230,74,43,1));
  background-position:  0 -0.15rem;
}
.page-friends-bg-en {
  background-image: url(../../../assets/img/inbg1_en.jpg), linear-gradient(51deg,rgba(255,112,42,1),rgba(230,74,43,1));
  background-position:  0 -0rem;
}
.top-bg {
  position: absolute;
  width: 100%;
  height: 1.6rem;
  top: 2.3rem;
  background-image: url(../../../assets/img/inbg2.png);
  background-size: 130% auto;
  background-position: -0.4rem 0rem;
  background-repeat: no-repeat;
  opacity: 0.99;
}
.friends-container {
  width: 100%;
  min-height: 10rem;
  background-image: linear-gradient(51deg,rgba(255,112,42,1),rgba(230,74,43,1));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: -0.02rem;
}
.friends-tab {
  width: 6.89rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .tab1, .tab2 {
    width: 3.42rem;
    height: 1.39rem;
    padding: 0.15rem 0 0.24rem 0;
    border-radius: 0.2rem;
    background:rgba(255,255,255,0.5);
    box-shadow: 0rem 0rem 0.4rem rgba(230,74,43,1) inset;
    // opacity: 0.4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    >p {
      font-size:0.24rem;
      font-family:SourceHanSansCN-Medium;
      font-weight:500;
      color:#8B2B19;
      line-height:0.31rem;
    }
    >p:first-child {
      margin-top: 0.05rem;
    }
    >p:last-child {
      margin-top: 0.05rem;
    }
  }
  .active {
    background:rgba(255,255,255,1);
    // opacity: 1;
    >p {
      font-size:0.24rem;
      font-family:SourceHanSansCN-Medium;
      font-weight:500;
      color:rgba(230,74,43,1);
      line-height:0.31rem;
    }
  }
}
.p-en {
  margin-top: 0.25rem!important;
}
</style>
