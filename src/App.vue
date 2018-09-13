<template>
  <div id="app" class='u-outerwrapper'>
    <IndexHeader v-if='!isLogin'/>
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
      isLogin: false
    }
  },
  components: {
    IndexHeader,
    indexList
  },
  created () {
    console.log()
    this.isLogin = window.location.href.indexOf('login') > -1 || false
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
    min-width: 1340px;
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
