<template>
  <div class="page1">
    <div class="inner-bg">
      <Avatar :avatarInfo="avatarInfo"></Avatar>
      <div class="red-bag-bg">
        <div class="bag-title">{{ $t('reward') }}</div>
        <div class="bag-number">500</div>
        <div class="bag-onot">ONOT</div>
        <div class="ph-number-container">
          <!-- 下拉框 -->
          <select name="num"
                  class="area-num-picker"
                  v-model="areaNum"
                  v-if="areaCodeArr && areaCodeArr.length > 0">
            <option v-for="codeItem in areaCodeArr"
                    :value="codeItem.countryNum"
                    :key="codeItem.countryCode + codeItem.countryNum">
              {{codeItem.countryCode}}{{codeItem.countryNum}}
            </option>
          </select>
          <div style="width: 2px; height: 18px; background: #d5d5d5; marginLeft: 2px; marginRight: 5px;"></div>
          <!-- 下拉框 -->
          <input class="number-input" type="number" :placeholder="$t('fillNumber')" v-model="account" />
        </div>
        <button class="receive-button" @click="receiveOnot">{{ $t('getIt') }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar';
import { registerByInvite, getReCHPTCHAResponse, getUidInfo, getCountryCode } from '@/assets/api/index.js';
import { getQueryVariable } from '@/assets/js/getQueryVariable.js';
export default {
  components: {
    Avatar
  },
  data () {
    return {
      invite_uid: '', // 邀请人uid
      account: '', // 被邀请人手机号
      lang: 'cn', // 语言
      pos: 'cn', // 地理位置
      SITE_KEY: '6Ldel3wUAAAAAIlfTZ-1BOreIsd4m3_tm8k7Y_hD',
      areaCodeArr: [], // 国家码数组
      areaNum: '+86',
      avatarInfo: {},
      captcha1: ''
    }
  },
  created() {
    this.lang = getQueryVariable('lang') || 'cn';
    this.pos = getQueryVariable('pos') || 'cn';
    this.invite_uid = Number(getQueryVariable('uid')) || 100030;
    this.getUidInfo();
    this.getCountryCode();
    // window.callback = this.callback;
  },
  mounted() {
    // console.log('======== mounted ========')
    document.getElementsByTagName('title')[0].innerText = this.$t('title');
  },
  methods: {
    // 拉取uid对应的用户信息
    getUidInfo() {
      getUidInfo(this.invite_uid).then(res => {
        console.log(res)
        if (res.data.status.code === 0) {
          this.avatarInfo = res.data.data;
        }
      })
    },
    // 注册领取onot
    // 需要进行谷歌验证

    // 腾讯验证码
    callback(res) {
      console.log(res)
      var response = JSON.stringify({
        aid: res.appid,
        Ticket: res.ticket,
        Randstr: res.randstr,
      })
      console.log('调用接口')
      var account = (this.areaNum + this.account).substr(1);
      registerByInvite({invite_uid: this.invite_uid, account: account, response: response, type: 'tencent'}).then(res => {
        console.log(res);
        this.$toast.clear();
        if (res.data.status.code === 0) {
          this.$notify({
            message: this.$t('error.registerSuccess'),
            background: '#1989fa',
          });
          /* 注册成功跳转 */
          setTimeout(() => {
            var params = window.location.search;
            if (/^http:/.test(window.location.protocol)) {
              window.location.href = 'http://39.106.38.50/ono/m3-invite/page3.html' + params
            } else {
              window.location.href = 'https://front.ono.chat/ono/m3-invite/page3.html' + params
            }
          }, 2000);
        } else if (res.data.status.code === 515) {
          this.$notify(this.$t('error.telHasRegistered'))
          console.log('账号已存在')
          /* 账号存在跳转 */
          setTimeout(() => {
            this.downloadONO();
          }, 2000);
        } else if (res.data.status.code === 501) {
          this.$notify(this.$t('error.telIncorrect'))
        } else {
          this.$notify(this.$t('error.tryAgain'))
        }
      }).catch(error => {
        this.$notify(this.$t('error.registerFail'))
        this.$toast.clear();
      })
    },
    receiveOnot() {
      if ((this.account+'').length < 5 || (this.account+'').length > 15) {
        return this.$notify(this.$('error.telIncorrect'))
      }
      this.$toast.loading({
        mask: true,
        message: this.$t('loading')
      });
      // 开启定时器 如果能调用Google recaptcha 则走定时器外逻辑 如果不能调用 则走定时器内无Google recaptcha 逻辑
      var timer = setTimeout(() => {
        console.log('开启定时器')
        this.captcha1 = new TencentCaptcha('2009582549', (res) => {
          this.callback(res);
        }, {});
        this.captcha1.show();
      }, 3000);

      getReCHPTCHAResponse({action: 'N/A'})
      .then(response => {
        // 清除定时器
        console.log('清除定时器')
        clearTimeout(timer);
        console.log(response)
        var account = (this.areaNum + this.account).substr(1);
        registerByInvite({invite_uid: this.invite_uid, account: account, response: response, type: 'google'}).then(res => {
          console.log(res);
          this.$toast.clear();
          if (res.data.status.code === 0) {
            this.$notify({
              message: this.$t('error.registerSuccess'),
              background: '#1989fa',
            });
            /* 注册成功跳转 */
            var params = window.location.search;
            if (/^http:/.test(window.location.protocol)) {
              window.location.href = 'https://39.106.38.50/ono/m3-invite/page3.html' + params
            } else {
              window.location.href = 'https://front.ono.chat/ono/m3-invite/page3.html' + params
            }
          } else if (res.data.status.code === 515) {
            this.$notify(this.$t('error.telHasRegistered'))
            console.log('账号已存在')
            /* 账号存在跳转 */
            setTimeout(() => {
              this.downloadONO();
            }, 2000);
          } else if (res.data.status.code === 501) {
            this.$notify(this.$t('error.telIncorrect'))
          } else {
            this.$notify(this.$t('error.tryAgain'))
          }
        }).catch(error => {
          this.$notify(this.$('error.registerFail'))
          this.$toast.clear();
        })
      })
    },
    // 拉取国家代码
    getCountryCode() {
      getCountryCode().then(res => {
        console.log(res)
        if (res.data.status.code === 0) {
          this.areaCodeArr = res.data.data.countryCodes;
        }
      })
    },
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
  background-image: url(../../../assets/img/bg.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  .inner-bg {
    width: 100%;
    min-height: 100vh;
    padding-top: 0.5rem;
    background-image: url(../../../assets/img/lubi_bg.png), url(../../../assets/img/redbag.png), url(../../../assets/img/logo.png);
    background-size: 100% auto, 94% auto, 2rem auto;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: center 1.45rem, center 2.58rem, center 11.5rem;
  }
}
.red-bag-bg {
  margin: 0 auto;
  width: 6.94rem;
  height: 7.58rem;
  padding-top: 0.5rem;
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
  width:5.58rem;
  height:0.9rem;
  // background:linear-gradient(180deg,rgba(250,250,250,1),rgba(242,242,242,1));
  background: #ffffff;
  box-shadow:0px 9px 40px 0px rgba(189,23,35,0.6), 0px 5px 10px 0px rgba(13,5,9,0.2);
  border-radius:0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.number-input {
  // width: 3.18rem;
  width: 100%;
  height: 95%;
  font-size:0.28rem;
  font-family:SourceHanSansCN-Regular;
  font-weight:400;
  // background:linear-gradient(180deg,rgba(250,250,250,1),rgba(242,242,242,1));
  background: #ffffff;
  color:rgba(153,153,153,1);
  line-height:0.38rem;
  outline: none;
  align-items: center;
  border: none;
  text-align: left;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.receive-button {
  margin-top: 0.4rem;
  width: 5.58rem;
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
  line-height: 0.9rem;
}
.area-num-picker {
  width: 1rem;
  max-width: 1.5rem;
  margin-left: 0.22rem;
  height: 100%;
  // margin-right: 1rem /* 16/16 */;
  font-size: 0.28rem /* 16/16 */;
  color: #999999;
  background: #ffffff;
  /*很关键：将默认的select选择框样式清除*/
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  outline: none;
  border: none;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
</style>

