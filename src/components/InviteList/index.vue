<template>
  <div class="invite-list-container">
    <div class="invite-list" v-if="inviteList.length > 0">
      <div class="item-container" :class="{'bt': index === 0, 'bb': index !== inviteList.length - 1}" v-for="(item, index) in inviteList" :key="index">
        <div class="item-left">
          <div class="avatar" :style="'backgroundImage: url(' + item.avatar + ')'"></div>
          <div class="nick-box">
            <p class="nickname">{{ item.nickname }}</p>
            <p class="invite-time">{{ item.createdAt | formatDate }}</p>
          </div>
        </div>
        <div class="item-right">
          <p class="add-onot">{{ '+' + item.awardOnot }}</p>
          <p class="onot">{{ 'ONOT' }}</p>
        </div>
      </div>
      <div v-show="inviteList.length >= 10" class="load-more" @click="$emit('loadMore')">{{ '加载更多' }}</div>

      
    </div>
    <div v-if="inviteList.length === 0" class="no-friends">
      <p>{{ $t('noFriends') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    inviteList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      // inviteList:[
      //   {
      //     img: 'https://d1mpwl75hjvg1a.cloudfront.net/ono-pic/24cd0e1a5f702759d089733a2d8ad7a9.jpg',
      //     nickname: '小张小王小李',
      //     create_at: '2018-10-10'
      //   }
      // ]
    }
  },
  filters: {
    formatDate (timestape) {
      var ts = new Date(timestape);
      var month = ts.getMonth() + 1;
      month = month > 9 ? month : ('0' + month);
      var d = ts.getDate() > 9 ? ts.getDate() : ('0' + ts.getDate());
      var h = ts.getHours() > 9 ? ts.getHours() : ('0' + ts.getHours());
      var m = ts.getMinutes() > 9 ? ts.getMinutes() : ('0' + ts.getMinutes());
      return ts.getFullYear() + '-' + month + '-' + ts.getDate() + ' ' + h + ':' + m;
    },
  }
}
</script>

<style lang="scss" scoped>
.invite-list-container {
  width: 6.89rem;
  min-height: 9rem;
  margin-top: -0.3rem;
  border-radius: 0.2rem;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.invite-list {
  width: 6.38rem;
  min-height: 9rem;
  padding-top: 0.3rem;
}
.item-container {
  width: 100%;
  height: 1.5rem;
  // background: pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-left {
  width: 4.25rem;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.item-right {
  width: 2.12rem;
  height: 0.8rem;
  margin-right: 0.1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}
.avatar {
  width: 0.8rem;
  height: 0.8rem;
  margin-left: 0.1rem;
  margin-right: 0.29rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 50%;
}
.nick-box {
  height: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  >p:first-child {
    font-size:0.3rem;
    font-family:SourceHanSansCN-Medium;
    font-weight:bold;
    color:rgba(17,17,17,1);
  }
  >p:last-child {
    font-size:0.24rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
  }
}
.add-onot {
  font-size:0.32rem;
  font-family:SourceHanSansCN-Heavy;
  font-weight:800;
  color:rgba(230,74,43,1);
}
.onot {
  font-size:0.24rem;
  font-family:SourceHanSansCN-Normal;
  font-weight:400;
  color:rgba(102,102,102,1);
}
.bt {
  border-top: 1px solid rgba(230,74,43,1);
}
.bb {
  border-bottom: 1px solid rgba(238,238,238,1);
}
.wrap {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.no-friends {
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  >p {
    padding: 0 1rem;
    font-size: 0.3rem;
    color: #666666;
    font-weight: bold;
  }
}
.load-more {
  margin-top: 0.2rem;
}
</style>
