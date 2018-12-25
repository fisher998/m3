<template>
  <div class="three-step-container">
    <p class="three-title">{{ $t('threeStep') }}</p>
    <div class="three-box">
      <div class="step1">
        <p class="text1">{{ $t('step1') }}</p>
      </div>
      <div class="step2">
        <p class="text2">{{ $t('step2') }}</p>
      </div>
      <div class="step3">
        <p class="text3">{{ $t('step3') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.three-step-container {
  margin-top: 0.3rem;
  margin-bottom: 0.8rem;
  width: 6.89rem;
} 
.three-title {
  font-size:0.38rem;
  font-family:FZLTZHK--GBK1-0;
  font-weight:600;
  color:rgba(255,255,255,1);
  margin-bottom: 0.6rem;
}
.three-box {
  width: 6.89rem;
  height: 1.76rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  >div {
    width: 2.2rem;
    height: 100%;
    padding-top: 0.85rem;
    padding-left: 0.21rem;
    >p {
      word-break: break-all;
    }
  }
  .step1 {
    background-image: url(../../assets/img/first.png);
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat;
    margin-right: 0.15rem;
  }
  .step2 {
    background-image: url(../../assets/img/second.png);
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .step3 {
    background-image: url(../../assets/img/third.png);
    background-size: auto 100%;
    background-position: right center;
    background-repeat: no-repeat;
  }
}
.text1, .text2, .text3 {
  font-size:0.22rem;
  font-family:SourceHanSansCN-Regular;
  font-weight:400;
  color:rgba(62,47,42,1);
  text-align: left;
}
.text1 {
  width: 1.25rem;
  height: 1rem;
}
.text2 {
  width: 1.5rem;
  height: 1rem;
}
.text3 {
  padding-left: 0.1rem;
  width: 100%;
  height: 1rem;
}
</style>
