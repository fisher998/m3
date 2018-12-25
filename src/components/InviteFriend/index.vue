<template>
  <div class="invite-friend-container">
    <p class="invite-title">{{ $t('inviteMore') }}</p>
    <div class="invite-card">
      <div class="card1">
        <p class="text1">{{  $t('levelFirst') }}</p>
        <p class="text2">{{ '300' }}</p>
        <p class="text3">{{ $t('threeHundred') }}</p>
      </div>
      <div class="card2">
        <p class="text1">{{ $t('levelSecond') }}</p>
        <p class="text2">{{ '100' }}</p>
        <p class="text3">{{ $t('oneHundred') }}</p>
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
.invite-title {
  width: 6.89rem;
  margin-top: 0.8rem;
  font-size:0.38rem;
  font-family:FZLTZHK--GBK1-0;
  font-weight:600;
  color:rgba(255,255,255,1);
}
.invite-card {
  margin-top: 0.3rem;
  width: 6.89rem;
  height: 3.12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  >div {
    width: 3.33rem;
    height: 3.12rem;
    .text1 {
      font-size:0.26rem;
      font-family:SourceHanSansCN-Regular;
      font-weight:bold;
      margin-top: 0.60rem;
    }
    .text2 {
      margin-top: 0.2rem;
      padding-top: 0.1rem;
      font-size:0.68rem;
      font-family:Gobold;
      font-weight:bold;
    }
    .text3 {
      // margin-top: 0.1rem;
      font-size:0.24rem;
      font-family:SourceHanSansCN-Regular;
      font-weight:400;
    }
  }
  .card1 {
    background-image: url(../../assets/img/card1.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% auto;
    >.text1 {
      color:rgba(137,117,27,1);
    }
    >.text2 {
      color:rgba(239,87,43,1);
    }
    >.text3 {
      color:rgba(155,55,26,1);
    }
  }
  .card2 {
    background-image: url(../../assets/img/card2.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% auto;
    >.text1 {
      color:rgba(92,90,82,1);
    }
    >.text2 {
      color:rgba(89,89,89,1);
    }
    >.text3 {
      color:rgba(109,101,99,1);
    }
  }
}
</style>
