<template>
  <ul class='u-index-list-wrap'>
    <router-link
      tag='li'
      exact
      active-class="active"
      v-for='(item, idx) in list'
      :key='item.name + idx'
      :to='item.path'>
      {{ item.text }}
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'indexList',
  data () {
    return {
      list: [
        {
          path: '/',
          name: 'index',
          text: '首页'
        },
        {
          path: '/systemManagement',
          name: 'systemManagement',
          text: '系统管理'
        },
        {
          path: '/salesManagement',
          name: 'salesManagement',
          text: '销售人员管理'
        }
      ]
    }
  }
}
</script>

<style lang='scss'>
  .u-index-list-wrap {
    width: 200px;
    height: 100%;
    background-color: #030303;
    color: #fff;
    li {
      line-height: 45px;
      font-size: 16px;
      padding-left: 20px;
    }
    .active {
      background-color: #ee8523;
    }
  }
</style>
