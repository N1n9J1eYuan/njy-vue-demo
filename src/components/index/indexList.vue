<template>
  <ul class='u-index-list-wrap'>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          background-color="#030303"
          text-color="#fff"
          active-text-color="#ffd04b"
          :default-active="$route.path"
          router>
          <div v-for='(item, idx) in list' :key='"wrap" + idx'>
            <el-submenu
              :index="item.name"
              v-if='item.children'>
              <template slot="title">
                <span>{{ item.text }}</span>
              </template>
              <el-menu-item-group
                v-for='(child, n) in item.children'
                :key='"child" + n'>
                <el-menu-item
                  :index="child.path">
                  <span slot="title">{{ child.text }}</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item
              :index="item.path"
              v-else>
              <span slot="title">{{ item.text }}</span>
            </el-menu-item>
          </div>
        </el-menu>
      </el-col>
    </el-row>
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
          name: 'systemManagement',
          path: '/systemManagement',
          text: '系统管理',
          children: [
            {
              text: '组织架构',
              path: '/systemManagement'
            }
          ]
        },
        {
          path: '/salesManagement',
          name: 'salesManagement',
          text: '销售人员管理'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang='scss'>
  .u-index-list-wrap {
    width: 200px;
    height: 100%;
    background-color: #030303;
    color: #fff;
    .el-menu-item.is-active {
      background-color: #ee8523 !important;
      color: #fff !important;
    }
    .el-menu {
      border-right: none;
    }
    .el-col-12 {
      width: 100%;
    }
    .el-menu-item, .el-submenu__title{
      min-width: 160px;
      height: 45px;
      line-height: 45px;
    }
    .el-menu-item-group {
      padding-left: 0;
    }
  }
</style>
