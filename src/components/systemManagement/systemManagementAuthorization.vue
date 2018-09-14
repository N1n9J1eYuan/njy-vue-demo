<template>
  <el-dialog
    class='u-authorization-wrap'
    :title="{1: '编辑角色', 2: '授权角色', 3: '删除角色'}[type]"
    :visible.sync="dialogFormVisible">
    <div v-if='type == 1'>
      <p>修改角色</p>
      <el-input v-model="opt.input" placeholder="请输入内容"></el-input>
    </div>
    <div v-else-if='type === 2'>
      <el-tabs type="border-card" class='u-authorization-table'>
        <el-tab-pane v-for='(item, n1) in list' :key='n1' :label='item.name'>
          <SystemManagementCheckBox :infoObj='item' :keys='"checkBoxWrap-" + n1'/>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div v-else>
      <p>是否要删除该角色？</p>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="saveCheckBox">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
/*
  type:
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
      opt: {
        title: '编辑角色',
        list: []
      },
      checkListAll: {},
      checkList: []
    }
  },
  props: {
    showDialog: Boolean,
    type: Number
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
      this.dialogFormVisible = false
      console.log(document.querySelectorAll('input[data-id=authorizationCheckBox]:checked'))
    }
  },
  watch: {
    showDialog () {
      this.dialogFormVisible = this.showDialog
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
      width: 700px;
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
</style>
