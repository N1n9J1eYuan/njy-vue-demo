<template>
  <el-dialog class="u-edit-wrap" :title="dialogOpt.title" :visible.sync="flag">
    <ul v-if='dialogOpt.type'>
      <li>
        <p>上级部门</p>
        <el-input v-model="dialogOpt.superiorDepartment" :disabled="true"></el-input>
      </li>
      <li>
        <p> {{dialogOpt.type === 1 ? '新建名称' : '部门名称'}}</p>
        <el-input v-model="dialogOpt.departmentName" placeholder='请输入部门名称'></el-input>
      </li>
    </ul>
    <p v-else>{{ deleteText }}</p>
    <div slot="footer" class="el-dialog__footer" v-if='dialogOpt.type'>
      <el-button type="primary" @click='saveDepartment'>保存</el-button>
    </div>
    <div slot="footer" class="el-dialog__footer" v-else>
      <el-button type="primary" @click='chooseDelete'>取消</el-button>
      <el-button type="info" @click='chooseDelete(1)'>保存</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      flag: false,
      deleteText: '是否要删除该部门？'
    }
  },
  props: {
    editFlag: Boolean,
    dialogOpt: Object
  },
  methods: {
    saveDepartment () {
      this.$emit('sendData', this.dialogOpt)
      this.$emit('changeEditFlag', false)
    },
    chooseDelete (n) {
      this.$emit('changeEditFlag', false)
      if (n) this.$emit('sendData', this.dialogOpt)
    }
  },
  watch: {
    editFlag () {
      if (this.editFlag !== this.flag) this.flag = this.editFlag
    },
    flag () {
      if (!this.flag) this.$emit('changeEditFlag', false)
    }
  }
}
</script>

<style lang='scss'>
  .u-edit-wrap {
    .el-dialog {
      width: 400px;
    }
    .el-dialog__header {
      text-align: center;
    }
    .el-dialog__body p {
      line-height: 40px;
    }
  }
</style>
