<template>
  <div class='u-sales-management-wrap'>
    <el-tabs class='u-sales-management-container' type='border-card'>
      <el-button type='primary' @click='change(4)'>添加销售人员</el-button>
      <el-table
        class='u-sales-management-table'
        :data='tableData'
        border
        style='width: 100%'>
        <el-table-column
          prop='name'
          align='center'
          label='销售名称'>
        </el-table-column>
        <el-table-column
          prop='type'
          align='center'
          label='当前状态'>
        </el-table-column>
        <el-table-column
          prop='subordinateDepartment'
          align='center'
          label='所属部门'>
        </el-table-column>
        <el-table-column
          prop='role'
          align='center'
          label='角色'>
        </el-table-column>
        <el-table-column
          align='center'
          label='操作'>
          <template slot-scope="scope">
            <el-button
              @click="change(1, scope.$index, tableData)"
              type="text"
              size="small">
              停用
            </el-button>
            <el-button
              @click="change(2, scope.$index, tableData)"
              type="text"
              size="small">
              启用
            </el-button>
            <el-button
              @click="change(3, scope.$index, tableData)"
              type="text"
              size="small">
              编辑
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-tabs>
    <SalesManagementDialog :editFlag='showDialog' :dialogOpt='dialogOpt' @changeEditFlag='changeEditFlag'/>
  </div>
</template>

<script>
import SalesManagementDialog from './salesManagementDialog'
export default {
  name: '',
  data () {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '超级管理员',
          type: '1',
          subordinateDepartment: '朗播网',
          role: '系统'
        },
        {
          date: '2016-05-02',
          name: '超级管理员',
          type: '1',
          subordinateDepartment: '朗播网',
          role: '系统'
        },
        {
          date: '2016-05-02',
          name: '超级管理员',
          type: '1',
          subordinateDepartment: '朗播网',
          role: '系统'
        },
        {
          date: '2016-05-02',
          name: '超级管理员',
          type: '1',
          subordinateDepartment: '朗播网',
          role: '系统'
        }
      ],
      showDialog: false,
      type: 0,
      dialogOpt: {},
      titleList: [
        '修改启动状态',
        '修改启动状态',
        '编辑销售人员',
        '添加销售人员'
      ]
    }
  },
  components: {
    SalesManagementDialog
  },
  methods: {
    change (n, index, rows) {
      this.showDialog = true
      this.dialogOpt.type = n
      this.changeOpt({
        title: this.titleList[n - 1],
        type: n
      })
    },
    changeOpt (opt) {
      this.dialogOpt = Object.assign({}, opt)
    },
    changeEditFlag (bool) {
      this.showDialog = bool
    }
  }
}
</script>

<style lang='scss'>
  .u-sales-management-wrap {
    padding: 50px;
    .u-sales-management-table {
      margin-top: 20px;
    }
    .u-sales-management-container {
      width: 960px;
      height: 700px;
    }
  }
</style>
