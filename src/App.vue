<template>
  <div id="app" class='u-outerwrapper' @click="isDo()">
    <IndexHeader v-if='!isLogin'/>
    000
    <div class='u-outerwrapper-container'>
      <indexList v-if='!isLogin'/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import IndexHeader from './components/index/indexHeader'
import indexList from './components/index/indexList'
export default {
  name: 'App',
  data () {
    return {
      isLogin: false,
      lastTime: null,
      currentTime: null,
      // timeOut: 10 * 60 * 1000//设置超时时间： 10分钟
      timeOut: 10 * 1000
    }
  },
  components: {
    IndexHeader,
    indexList
  },
  created () {
    this.isLogin = window.location.href.indexOf('login') > -1 || false
  },
  methods: {
    isDo () {
      this.currentTime = new Date().getTime()
      if (this.currentTime - this.lastTime > this.timeOut) {
        // 这里写状态已过期后执行的操作
        // console.log('该退出了')
      } else {
        this.lastTime = new Date().getTime()
      }
    }
  },
  watch: {
    $route (to, from) {
      this.isLogin = window.location.href.indexOf('login') > -1 || false
    }
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  .u-outerwrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    min-width: 1140px;
    min-height: 600px;
    display: -webkit-flex;
    flex-direction: column;
    .u-outerwrapper-container {
      flex: 1;
      display: -webkit-flex;
      & > div {
        flex: 1;
        overflow-y: auto;
      }
    }
    .u-icon {
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
      background-size: 100%;
      margin-left: 10px;
    }
  }
</style>
