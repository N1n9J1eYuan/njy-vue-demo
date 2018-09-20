<template>
  <div class="treeData">
    <el-button type="primary" @click='append(null, null, 4)' v-if='!treeData.length'>添加部门</el-button>
    <div class="custom-tree-container" v-else>
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
      @changeEditFlag='changeEditFlag'
      @sendData='getData'/>
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
    this.getDepartments()
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
                <span on-click={ () => this.append(node, data, 2) }>编辑部门</span>
              </li>
              { this.panduan(data, node) }
            </ul>
          </div>
        </div>
      )
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
      if (this.dialogOpt.departmentName) this.dialogOpt.department = ''
      let opt = {}
      if (n !== 4) {
        opt = {
          title: '新建下级部门',
          superiorDepartment: node.parent.label,
          parentDepartmentId: node.parent.id,
          type: n,
          id: data.id
        }
      } else {
        opt = {
          title: '新建下级部门',
          type: 1
        }
      }
      if (n === 2) {
        opt.departmentName = data.label
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
        id: data.id,
        type: 0
      }
      this.showDialog(opt)
    },
    getData (data) {
      switch (true) {
        case this.dialogOpt.type === 1:
          this.addDepartments(data)
          break
        case this.dialogOpt.type === 2:
          this.changeDepartments(data)
          break
        default:
          this.deleteDepartments(data)
      }
    },
    // 获取组织架构
    getDepartments () {
      // const result = this.$fetch.get.getDepartments()
      // result.then(rs => {
      //   if (rs.code === 200) {
      //     this.treeData = rs.data
      //   }
      // })
    },
    // 填加部门
    addDepartments (data) {
      // const params = {
      //     departmentName: data.departmentName,
      //     parentDepartmentId: data.parentDepartmentId
      //   }
      // const result = this.$fetch.post.addDepartments(params)
      // result.then(rs => {
      //   if (rs.code === 200) {
      //     this.getDepartments()
      //   }
      // })
    },
    // 修改部门名称
    changeDepartments (data) {
      // const params = {
      //     departmentName: data.departmentName,
      //     id: data.id,
      //     code: data.code
      //   }
      // const result = this.$fetch.put.changeDepartments(params)
      // result.then(rs => {
      //   if (rs.code === 200) {
      //     this.getDepartments()
      //   }
      // })
    },
    // 删除部门
    deleteDepartments (data) {
      // const result = this.$fetch.delete.deleteDepartments({id: data.id})
      // result.then(rs => {
      //   if (rs.code === 200) {
      //     this.getDepartments()
      //   }
      // })
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
