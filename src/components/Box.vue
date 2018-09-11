<template>
  <div id = "box-wrap">
    <div class = "u-box" @mouseover="hover">
      <p v-if="text">{{ text }}</p>
      <List v-else @sendStr='getStr' :flag='flag'/>
    </div>
  </div>
</template>

<script>
import List from './list.vue'
export default {
  name: 'box',
  data () {
    return {
      list: ['school', 'lectuer', 'practice'],
      text: '',
      flag: false
    }
  },
  components: {
    List
  },
  methods: {
    getStr (str) {
      this.text = str
    },
    hover () {
      if (!this.flag) this.flag = true
    }
  }
}
</script>

<style scoped>
  #box-wrap {
    width: 220px;
    height: 120px;
    margin: 20px auto;
    overflow: hidden;
  }
  #box-wrap .u-box {
    width: 200px;
    height: 100px;
    background: -webkit-linear-gradient(left bottom, #74d4ba, #53d7f3);
    border: 1px solid #1f8bc9;
    position: relative;
    box-sizing: border-box;
    margin: 10px auto;
  }
  #box-wrap .u-box:hover {
    box-shadow: 0 0 6px #03598a;
    cursor: pointer;
  }
  #box-wrap .u-box p {
    line-height: 100px;
    text-align: center;
    font-size: 24px;
  }
</style>
