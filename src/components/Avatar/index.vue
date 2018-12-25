<template>
  <div class="avatar-container">
    <div class="avatar-img" :style="'backgroundImage: url(' + avatarInfo.img + ')'"></div>
    <div class="avatar-nick"><div v-show="congratulations" class="info-second">{{ $t('congratulations1') }}</div><div class="info-first wrap" :class="{'white': color}">{{ avatarInfo.nick }}</div><div class="info-third">{{ $t('congratulations2') }}</div></div>
  </div>
</template>

<script>
export default {
  props: {
    congratulations: {
      type: Boolean,
      default: true
    },
    color: {
      type: Boolean,
      default: false
    },
    avatarInfo: {
      type: [String, Object],
      default: function () {
        return {
          img: 'http://pic.58pic.com/58pic/13/80/78/35V58PICrWD_1024.jpg',
          nick: '鲁班七号'
        }
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-container {
  width: 5.6rem;
  height: 1.8rem;
  margin: 0 auto 0.6rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .avatar-img {
    width: 1.05rem;
    height: 1.05rem;
    border-radius: 50%;
    border: 1px solid #ffffff;
    background-size: cover;
  }
  .avatar-nick {
    width:6.19rem;
    height:0.56rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size:0.28rem;
    font-weight:200;
    color:rgba(255,255,255,1);
    line-height:0.56rem;
    font-weight: bold;
    .info-first, .info-second, .info-third {
      height: 100%;
      display: inline-block;
    }
    .info-first {
      max-width: 2rem;
      margin-left: 0.08rem;
      margin-right: 0.08rem;
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
