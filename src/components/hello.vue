<template>
  <div class="hello">
    <p>{{ name }}</p>
    <input type="text" v-model="changeName">
    <button @click='clickChangeName'>修改</button>
    <button class="u-edit-btn" @click='edit'>编辑</button>
    <div id="myChart" ref="myChart" :style="{width: '500px', height: '500px'}"></div>
    <el-dialog class="u-edit-wrap" title="组织架构" :visible.sync="dialogFormVisible">
      <div class="dialog-body">
        <el-tree
          :data="treeData"
          :defaultExpandAll='true'
          :expandOnClickNode='false'
          @node-click="handleNodeClick"></el-tree>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-row>
          <el-button>添加</el-button>
          <el-button>修改</el-button>
          <el-button v-if='deleteFlag'>删除</el-button>
        </el-row>
      </div>
    </el-dialog>
    <SystemManagementTree/>
    <Table/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import listData from '@/flare.json'
import echarts from 'echarts'
import SystemManagementTree from './systemManagement/systemManagementTree'
import Table from './systemManagement/systemManagementTable'
export default {
  name: 'HelloWorld',
  data () {
    return {
      changeName: '',
      dialogFormVisible: false,
      obj: {},
      treeData: [],
      deleteFlag: false,
      id: 16,
      editFlag: false,
      dialogOpt: {
        type: 1,
        title: '编辑下级部门',
        superiorDepartment: '销售部'
      }
    }
  },
  components: {
    SystemManagementTree,
    Table
  },
  created () {
    this.obj = this.clone(listData)
    this.forEach(this.obj)
    console.log(this)
  },
  computed: {
    ...mapState({
      name: state => state.moduleA.name
    })
  },
  mounted () {
    this.drawLine()
    this.treeData.push(this.obj)
  },
  methods: {
    ...mapActions('moduleA', ['saveName']),
    forEach (data) {
      data.label = data.name
      delete data.name
      if (data.children && data.children.length) {
        for (let i = 0; i < data.children.length; i++) {
          this.forEach(data.children[i])
        }
      }
    },
    clone (data) {
      return JSON.parse(JSON.stringify(data))
    },
    clickChangeName () {
      this.saveName(this.changeName)
    },
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: 'item',
          triggerOn: 'click'
        },
        series: [
          {
            type: 'tree',
            data: [listData],
            top: '1%',
            left: '20%',
            bottom: '1%',
            right: '20%',
            symbolSize: 7,
            label: {
              normal: {
                position: 'left',
                verticalAlign: 'middle',
                align: 'right',
                fontSize: 16
              }
            },
            leaves: {
              label: {
                normal: {
                  position: 'right',
                  verticalAlign: 'middle',
                  align: 'left'
                }
              }
            },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
          }
        ]
      })
    },
    edit (node, data, n) {
      console.log(n)
    },
    handleNodeClick (data) {
      if (!data.children) {
        this.deleteFlag = true
      } else {
        this.deleteFlag = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
  .hello {
    h1 {
      color: #eee
    }
    .u-modify-wrap {
      width: 150px;
      height: 120px;
      border: 1px solid #f4f4f4;
      li {
        height: 40px;
        line-height: 40px;
        text-indent: 1em;
      }
    }
    .u-edit-btn {
      width: 80px;
      height: 36px;
      border-radius: 10px;
      outline: none;
      margin-left: 80%;
      margin-bottom: 100px;
    }
    .dialog-body {
      height: 300px;
      overflow-y: auto;
    }
    .el-dialog {
      width: 500px;
    }
    #myChart {
      margin: 0 auto 50px;
    }
    .custom-tree-node {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      padding-right: 8px;
      &:hover .custom-tree-span {
        display: block;
      }
    }
    .custom-tree-container {
      width: 300px;
      margin: 50px auto;
    }
    .custom-tree-span {
      position: relative;
      display: none;
    }
    .custom-tree-list {
      position: absolute;
      top: 0;
      right: -110px;
      display: none;
      background-color: #fff;
      border: 1px solid #f4f4f4;
      li {
        height: 30px;
        line-height: 30px;
        padding-left: 10px;
        padding-right: 10px;
        border-bottom: 1px solid #f4f4f4;
        &:last-child {
          border-bottom: none;
        }
      }
    }
    .el-tree-node > .el-tree-node__children {
      overflow: initial;
    }
    .el-dialog__header {
      text-align: center;
    }
    .u-edit-wrap {
      p {
        line-height: 50px;
      }
    }
  }
</style>
