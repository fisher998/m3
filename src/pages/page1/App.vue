<template>
  <div id="app">
    <write-number></write-number>
  </div>
</template>

<script>
import WriteNumber from './views/WriteNumber.vue';
export default {
  name: 'app',
  components: {
    WriteNumber
  },
  data () {
    return {
      clientWidth: null,
      clientHeight: null
    };
  },
  mounted () {
    this.clientWidth = `${document.documentElement.clientWidth}`;
    this.clientHeight = `${document.documentElement.clientHeight}`;
    var per = this.clientWidth / 750;
    document.documentElement.style.fontSize = per * 100 + 'px';
    window.onresize = () => {
      this.clientWidth = `${document.documentElement.clientWidth}`;
      this.clientHeight = `${document.documentElement.clientHeight}`;
      var per = this.clientWidth / 750;
      document.documentElement.style.fontSize = per * 100 + 'px';
    };
  }
}
</script>

<style lang="scss">
@import url(../../styles/index.sass);
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>