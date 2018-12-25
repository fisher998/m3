<template>
  <div class="page1" :class="{'page1-bg-cn': lang === 'cn', 'page1-bg-en': lang !== 'cn'}">
    <div class="inner-bg">
      <div class="red-bag-bg">
        <div class="bag-title">{{ $t('congratulations') }}</div>
        <div class="bag-number">500</div>
        <div class="bag-onot">ONOT</div>
        <button class="receive-button" @click="downloadONO">{{ $t('getItNow') }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getQueryVariable } from '@/assets/js/getQueryVariable.js';
export default {
  components: {
    
  },
  data () {
    return {
      value: '',
      lang: 'cn'
    }
  },
  created() {
    this.lang = getQueryVariable('lang') || 'cn';
  },
  mounted() {
    // console.log('======== mounted ========')
    document.getElementsByTagName('title')[0].innerText = this.$t('title');
  },
  methods: {
    // 下载ono
    downloadONO() {
      if (/mac|ios|iphone|ipod|pad/i.test(navigator.userAgent)) {
        window.location.href = 'https://itunes.apple.com/cn/app/ono-create-the-world/id1345278828?mt=8'
      } else {
        window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.nome.ono'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page1 {
  width: 100%;
  min-height: 100vh;
  // background-image: url(../../../assets/img/bg.jpg);
  background-size: 5.65rem auto, 100% 100%;
  background-repeat: no-repeat, no-repeat;
  background-position: center 0.8rem, center center;
  .inner-bg {
    width: 100%;
    min-height: 100vh;
    padding-top: 0.5rem;
    background-image: url(../../../assets/img/lubi_bg.png), url(../../../assets/img/redbag.png), url(../../../assets/img/logo.png);
    background-size: 100% auto, 94% auto, 2rem auto;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: center 3.15rem, center 3.78rem, center 12.2rem;
  }
}
.page1-bg-cn {
  background-image: url(../../../assets/img/lubi_cn.png), url(../../../assets/img/bg.jpg);
}
.page1-bg-en {
  background-image: url(../../../assets/img/lubi_en.png), url(../../../assets/img/bg.jpg);
}
.red-bag-bg {
  margin: 2.5rem auto 0 auto;
  width: 6.94rem;
  height: 7.58rem;
  padding-top: 1.8rem;
}
.bag-title {
  width: 100%;
  text-align: center;
  height:0.29rem;
  font-size:0.3rem;
  font-family:SourceHanSansCN-Bold;
  font-weight:bold;
  color:rgba(244,91,53,1);
  line-height:0.38rem;
}
.bag-number {
  width:100%;
  height:1.64rem;
  font-size:1.65rem;
  font-family:'Gobold';
  font-weight: bold;
  color:rgba(244,91,53,1);
  line-height:2.4rem;
  margin-bottom: 0.75rem;
}
.bag-onot {
  text-align: center;
  width:100%;
  height:0.24rem;
  font-size:0.3rem;
  font-family:'SourceHanSansCN-Bold';
  font-weight:bold;
  color:rgba(153,153,153,1);
  line-height:0.38rem;
  margin-bottom: 1.34rem;
}
.ph-number-container {
  margin: 0 auto;
  width:5.18rem;
  height:0.9rem;
  background:linear-gradient(180deg,rgba(250,250,250,1),rgba(242,242,242,1));
  box-shadow:0px 9px 40px 0px rgba(189,23,35,0.6), 0px 5px 10px 0px rgba(13,5,9,0.2);
  border-radius:0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.number-input {
  width: 4.18rem;
  height: 95%;
  font-size:0.28rem;
  font-family:SourceHanSansCN-Regular;
  font-weight:400;
  background:linear-gradient(180deg,rgba(250,250,250,1),rgba(242,242,242,1));
  color:rgba(153,153,153,1);
  line-height:0.38rem;
  outline: none;
  align-items: center;
  border: none;
  text-align: center;
}
.receive-button {
  margin-top: 0.4rem;
  width: 5.18rem;
  height: 0.9rem;
  background: linear-gradient(180deg,rgba(252,211,67,1),rgba(255,142,9,1));
  box-shadow: 0rem 0.09rem 0.4rem 0rem rgba(189,23,35,0.6);
  border-radius: 0.55rem;
  outline: none;
  border: none;
  font-size: 0.36rem;
  font-family: 'FZLTZHK--GBK1-0';
  font-weight: 600;
  color: rgba(189,23,35,1);
  line-height: 0.18rem;
}
</style>
