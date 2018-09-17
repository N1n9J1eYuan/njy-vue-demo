<template>
  <el-dialog class="u-edit-wrap" :title="dialogOpt.title" :visible.sync="flag">
    <!-- <ul v-if='dialogOpt.type'>
      <li>
        <p>上级部门</p>
        <el-input v-model="dialogOpt.superiorDepartment" :disabled="true"></el-input>
      </li>
      <li>
        <p> {{dialogOpt.type ? '新建名称' : '部门名称'}}</p>
        <el-input v-model="dialogOpt.department"></el-input>
      </li>
    </ul> -->
    <div v-if='dialogOpt.type === 4'>
      <div class='u-edit-query-input'>
        <span>查询销售</span>
        <el-input v-model="salesInfo"></el-input>
        <el-button type="primary" @click='querySales'>查询</el-button>
      </div>
    </div>
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
  name: 'salesManagementDialog',
  data () {
    return {
      flag: false,
      deleteText: '是否要删除该部门？',
      salesInfo: ''
    }
  },
  props: {
    editFlag: Boolean,
    dialogOpt: Object
  },
  methods: {
    saveDepartment () {
      console.log(this.dialogOpt)
      this.$emit('changeEditFlag', false)
    },
    chooseDelete (n) {
      if (n) {}
      this.$emit('changeEditFlag', false)
    },
    querySales () {
      if (!this.salesInfo) {
        this.$alert('请输入查询销售人员信息', '提示', {
          confirmButtonText: '确定'
        })
        return false
      }
      console.log(this.salesInfo)
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
    .el-dialog__header {
      text-align: center;
    }
    .el-dialog__body p {
      line-height: 40px;
    }
    .u-edit-query-input {
      display: -webkit-flex;
      align-items: center;
      justify-content: space-between;
      .el-input {
        flex: 1;
        margin-left: 20px;
        margin-right: 20px;
      }
    }
  }
</style>
