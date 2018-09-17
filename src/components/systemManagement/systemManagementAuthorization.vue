<template>
  <el-dialog
    class='u-authorization-wrap'
    :class='{2: "u-authorization-wrap-700"}[options.type]'
    :title="{1: '修改角色', 2: '授权角色', 3: '删除角色', 4: '添加角色'}[options.type]"
    :visible.sync="dialogFormVisible">
    <div v-if='options.type == 1'>
      <el-input v-model="options.name" placeholder="请输入内容"></el-input>
    </div>
    <div v-else-if='options.type === 2' class='u-authorization-table-wrap'>
      <el-tabs type="border-card" class='u-authorization-table'>
        <el-tab-pane v-for='(item, n1) in list' :key='n1' :label='item.name'>
          <SystemManagementCheckBox :infoObj='item' :keys='"checkBoxWrap-" + n1'/>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div v-else-if='options.type === 3'>
      <p>是否要删除该角色？</p>
    </div>
    <div v-else>
      <el-input v-model="roleName" placeholder="请输入角色名称"></el-input>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button options.type="primary" @click="saveCheckBox">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
/*
  options.type:
    0 -> 修改角色名称
    1 -> 授权
    3 -> 删除
*/
import authorizationJson from './authorization.json'
import SystemManagementCheckBox from './systemManagementCheckBox'
export default {
  name: 'authorization',
  data () {
    return {
      dialogFormVisible: false,
      checkListAll: {},
      checkList: [],
      roleName: ''
    }
  },
  props: {
    showDialog: Boolean,
    options: Object
  },
  components: {
    SystemManagementCheckBox
  },
  created () {
    this.dialogFormVisible = this.showDialog
    this.list = authorizationJson.data
  },
  methods: {
    saveCheckBox () {
      if (this.options.type === 4) {
        this.$emit('sendData', this.roleName)
      } else if (this.options.type === 1) {
        this.$emit('sendData', this.roleName)
      } else {
        console.log(document.querySelectorAll('input[data-id=authorizationCheckBox]:checked'))
      }
      this.dialogFormVisible = false
    }
  },
  watch: {
    showDialog () {
      this.dialogFormVisible = this.showDialog
      if (this.roleName && this.options.type === 4) this.roleName = ''
      if (this.showDialog && this.options.type === 1) this.roleName = this.options.name
    },
    dialogFormVisible () {
      if (!this.dialogFormVisible) {
        this.$emit('changeDialogFlag', this.dialogFormVisible)
      }
    }
  }
}
</script>

<style lang='scss'>
  .u-authorization-wrap {
    .el-dialog {
      width: 400px;
    }
    .el-checkbox-group {
      font-size: 16px;
    }
    p {
      line-height: 50px;
    }
    .u-authorization-table {
      width: 600px;
      margin: 0 auto;
    }
  }
  .u-authorization-wrap-700 {
    .el-dialog {
      width: 700px;
    }
  }
</style>
