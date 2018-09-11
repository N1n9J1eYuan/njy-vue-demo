<template>
    <ul id="box-list" class="u-box-list" :class="{true: 'u-box-list-enter'}[flag]">
      <li v-for="(str, idx) in list" :key='idx' @click="sendStr(str)">{{ str }}</li>
    </ul>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      list: ['school', 'lectuer', 'practice']
    }
  },
  props: {
    flag: Boolean
  },
  methods: {
    sendStr (str) {
      this.$emit('sendStr', str)
    }
  }
}
</script>

<style scoped>
  li {
    list-style: none;
  }
  #box-list.u-box-list {
    position: absolute;
    top: -1px;
  }
  #box-list.u-box-list li{
    position: relative;
    left: -160px;
    width: 130px;
    height: 25px;
    background-color: #ffd571;
    text-indent: 1em;
  }
  #box-list.u-box-list-enter li {
    animation: enter .3s;
    animation-fill-mode : forwards;
  }
  #box-list.u-box-list li:nth-child(1) {
    animation-delay: .5s;
  }
  #box-list.u-box-list li:nth-child(2) {
    animation-delay: .8s;
  }
  #box-list.u-box-list li:nth-child(3) {
    animation-delay: 1.1s;
  }
  #box-list.u-box-list li:after {
    position: absolute;
    right: -24px;
    content: "";
    border: 12px solid transparent;
    border-left-color: #ffd571;
  }
  #box-list.u-box-list li:hover {
    color: #fff;
    background-color: #fa9849;
  }
  #box-list.u-box-list li:hover:after {
    border-left-color: #fa9849;
  }
  @keyframes enter {
    0% {
      left: -160px;
    }
    100% {
      left: -2px;
    }
  }
</style>
