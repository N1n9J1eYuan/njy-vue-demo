<template>
  <div class="treeData">
    <div class="custom-tree-container">
      <div class="block">
        <el-tree
          :data="treeData"
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
          :render-content="renderContent">
        </el-tree>
      </div>
    </div>
    <SystemManagementDialog
      :editFlag='editFlag'
      :dialogOpt='dialogOpt'
      @changeEditFlag='changeEditFlag'/>
  </div>
</template>

<script>
import listData from '@/flare.json'
import SystemManagementDialog from './systemManagementDialog'
export default {
  name: 'treeData',
  data () {
    return {
      treeData: [],
      dialogOpt: {},
      editFlag: false
    }
  },
  created () {
    let data = this.clone(listData)
    this.forEach(data)
    this.treeData.push(data)
  },
  components: {
    SystemManagementDialog
  },
  methods: {
    // 处理数据
    clone (data) {
      return JSON.parse(JSON.stringify(data))
    },
    forEach (data) {
      data.label = data.name
      delete data.name
      if (data.children && data.children.length) {
        for (let i = 0; i < data.children.length; i++) {
          this.forEach(data.children[i])
        }
      }
    },
    // 渲染dom
    renderContent (h, { node, data, store }) {
      return (
        <div class="custom-tree-node">
          <span>{node.label}</span>
          <div class="custom-tree-span">
            <span onClick={(e) => this.setup(e)}>设置</span>
            <ul class="custom-tree-list">
              <li>
                <span on-click={ () => this.append(node, data, 1) }>新建下级部门</span>
              </li>
              <li>
                <span on-click={ () => this.append(node, data, 0) }>编辑部门</span>
              </li>
              { this.panduan(data, node) }
            </ul>
          </div>
        </div>
      )
      // el-tree-node is-expanded is-focusable
      // el-tree-node is-expanded is-current is-focusable
    },
    // 判断是否是最后一级 是的话显示删除按钮
    panduan (data, node) {
      if (!data.children) {
        return (
          <li>
            <span on-click={ () => this.remove(node, data) }>删除部门</span>
          </li>
        )
      }
    },
    // 点击添加 / 编辑部门 函数
    append (node, data, n) {
      if (this.dialogOpt.department) this.dialogOpt.department = ''
      const opt = {
        title: '新建下级部门',
        superiorDepartment: node.parent.label,
        type: n
      }
      if (!n) {
        opt.department = data.label
        opt.title = '编辑部门信息'
      }
      this.showDialog(opt)
    },
    // 显示弹窗
    showDialog (opt) {
      this.editFlag = true
      this.dialogOpt = Object.assign({}, opt)
    },
    // 改变展示dialog开关
    changeEditFlag (bool) {
      this.editFlag = bool
    },
    // 点击设置
    setup (e) {
      this.hideTreeSet()
      const nextNode = e.target.parentNode.childNodes[1]
      nextNode.style.display = 'block'
    },
    // 点击隐藏列表
    hideTreeSet () {
      document.querySelectorAll('.custom-tree-list').forEach(item => {
        item.style.display = 'none'
      })
    },
    // 点击删除
    remove (node, data) {
      const opt = {
        title: '删除部门',
        type: 0
      }
      this.showDialog(opt)
    }
  }
}
</script>

<style lang='scss'>
  .treeData {
    .custom-tree-container {
      width: 300px;
      margin: 30px auto 0;
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
    .el-tree-node > .el-tree-node__children {
      overflow: initial;
    }
    .el-tree-node__content{
      .el-tree-node__expand-icon {
        padding: 0px;
        margin-right: 10px;
        margin-top: -2px;
        width: 15px;
        height: 15px;
        content: url("../../images/home.png");
      }
      .el-tree-node__expand-icon.expanded{
        transform: rotate(0deg);
      }
    }
  }
</style>
