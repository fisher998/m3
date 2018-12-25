<template>
  <div class="small-tip-container">
    <p class="small-tip">{{ $t('tipForInviting') }}</p>
    <div class="tip-text-container">
      <p class="tip-text1">{{ $t('tip1') }}</p>
      <p class="tip-text2">{{ $t('tip2') }}</p>
      <p class="tip-text3">{{ $t('tip3') }}</p>
      <p class="tip-text4">{{ $t('tip4') }}</p>
      <p class="tip-text5">{{ $t('tip5') }}</p>
    </div>
    <p class="tip-bottom-text">{{ $t('abnormal') }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.small-tip {
  width:6.62rem;
  font-size:0.42rem;
  font-family:FZLTZHK--GBK1-0;
  font-weight:600;
  color:rgba(255,255,255,1);
  margin-bottom: 0.5rem;
}
.tip-text-container {
  width:6.62rem;
  height:4.45rem;
  font-size:0.28rem;
  font-family:SourceHanSansCN-Regular;
  font-weight:400;
  color:rgba(255,255,255,1);
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.tip-text1, .tip-text2, .tip-text3, .tip-text4, .tip-text5 {
  
}
.tip-bottom-text {
  width:6.62rem;
  font-size:0.24rem;
  font-family:FZLTZHK--GBK1-0;
  font-weight:600;
  color:rgba(255,255,255,1);
  // line-height:0.48rem;
  opacity:0.5;
  margin: 0.8rem 0;
  padding-bottom: 1.3rem;
}
</style>

