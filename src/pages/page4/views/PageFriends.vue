<template>
  <div class="page4">
    <div class="page4-box">
      <!-- 头像 -->
      <div class="avatar-container">
        <div class="avatar-img" :style="'backgroundImage: url(' + avatarInfo.img + ')'"></div>
        <div class="avatar-nick"><div class="info-first wrap">{{ avatarInfo.nick }}</div><div v-show="false" class="info-second">恭喜你获得</div></div>
      </div>
      <div class="qr-code-box" id="qrcode" ref="qrcode"></div>
      <p class="show-qrcode">{{ $t('showQR') }}</p>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2';
import { getQueryVariable } from '@/assets/js/getQueryVariable.js';
import { getUidInfo } from '@/assets/api/index.js';
export default {
  components: {
    
  },
  data () {
    return {
      value: '',
      avatarInfo: '',
      QRCodeUrl: '', // 二维码链接
      lang: '',
      uid: '',
    }
  },
  created() {
    // this.$notify('提示文案');
    this.lang = getQueryVariable('lang');
    this.uid = getQueryVariable('uid');
    var params = window.location.search;
    if (/^http:/.test(window.location.href)) {
      this.QRCodeUrl = 'http://39.106.38.50/ono/m3-invite/page1.html' + params;
    } else {
      this.QRCodeUrl = 'https://front.ono.chat/ono/m3-invite/page1.html' + params;
    }
    this.getUidInfo(this.uid);
  },
  mounted() {
    // console.log('======== mounted ========')
    this.qrCode(this.QRCodeUrl);
    document.getElementsByTagName('title')[0].innerText = this.$t('title');
  },
  methods: {
    // 拉取uid对应的用户信息
    getUidInfo() {
      getUidInfo(this.uid).then(res => {
        console.log(res)
        if (res.data.status.code === 0) {
          this.avatarInfo = res.data.data;
        }
      })
    },
    qrCode (url) {
      let qrcode = new QRCode('qrcode', {
          width: 210, //图像宽度
          height: 210, //图像高度
          colorDark : "#000000", //前景色
          colorLight : "#ffffff", //背景色
          typeNumber:4, 
          correctLevel : QRCode.CorrectLevel.H //容错级别 容错级别有：（1）QRCode.CorrectLevel.L （2）QRCode.CorrectLevel.M （3）QRCode.CorrectLevel.Q （4）QRCode.CorrectLevel.H
      })
      qrcode.clear() //清除二维码 
      // console.log('生成新的二维码')
      qrcode.makeCode(url) //生成另一个新的二维码
    }
  }
}
</script>

<style lang="scss" scoped>
.page4 {
  width: 100%;
  min-height: 100vh;
  background-image: url(../../../assets/img/logo.png), url(../../../assets/img/bg.jpg);
  background-size: 3rem auto, 100% 100%;
  background-repeat: no-repeat, no-repeat;
  background-position: center 85vh, center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.page4-box {
  width: 6.39rem;
  height: 8.53rem;
  // margin-top: 3rem;
  border-radius: 0.2rem;
  background: #ffffff;
  box-shadow: 0 0 0.4rem rgba(189,23,35,0.81) inset;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.8rem;
  position: relative;
}
.qr-code-box {
  width: 5.34rem;
  height: 5.18rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.show-qrcode {
  font-size:0.3rem;
  font-family:SourceHanSansCN-Medium;
  font-weight:500;
  color:rgba(230,74,43,1);
}





.avatar-container {
  position: absolute;
  top: -0.8rem;
  width: 5.6rem;
  height: 2.2rem;
  // margin: 0 auto 0.6rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .avatar-img {
    width: 1.52rem;
    height: 1.52rem;
    border-radius: 50%;
    border: 1px solid #ffffff;
    background-size: cover;
  }
  .avatar-nick {
    width:4.19rem;
    height:0.56rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    line-height:0.56rem;
    font-size:0.32rem;
    font-family:SourceHanSansCN-Medium;
    color:rgba(17,17,17,1);
    font-weight: bold;
    .info-first, .info-second {
      height: 100%;
      display: inline-block;
    }
    .info-first {
      max-width: 2rem;
      margin-right: 0.14rem;
    }
  }
}
.wrap {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.white {
  font-size:0.32rem;
  font-family:SourceHanSansCN-Medium;
  font-weight:500;
  color:rgba(17,17,17,1);
}
</style>
