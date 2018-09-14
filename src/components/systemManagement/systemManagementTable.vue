<template>
  <div class='u-table-wrap'>
    <el-table
      :data="tableData"
      border
      width='500'>
      <el-table-column
        type="index"
        align='center'
        label="编号"
        width="50">
      </el-table-column>
      <el-table-column
        prop="name"
        label="角色"
        align='center'
        width="180">
      </el-table-column>
      <el-table-column
        width="280"
        align='center'
        label="操作">
        <template slot-scope="scope">
          <el-button
            @click="change(scope.$index, tableData, 1)"
            type="text"
            size="small">
            编辑
          </el-button>
          <el-button
            @click="change(scope.$index, tableData, 2)"
            type="text"
            size="small">
            授权
          </el-button>
          <el-button
            @click="deleteRow(scope.$index, tableData, 3)"
            type="text"
            size="small">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <SystemManagementAuthorization
      :showDialog='showDialog'
      @changeDialogFlag='changeDialogFlag'
      :type='type'/>
  </div>
</template>

<script>
import SystemManagementAuthorization from './systemManagementAuthorization'
export default {
  name: 'systemManagementTable',
  data () {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '电销人员'
        },
        {
          date: '2016-05-04',
          name: '网销人员'
        },
        {
          date: '2016-05-01',
          name: '电销主管'
        },
        {
          date: '2016-05-03',
          name: '网销主管'
        },
        {
          date: '2016-05-03',
          name: '销售总监'
        }
      ],
      showDialog: false,
      type: 1
    }
  },
  components: {
    SystemManagementAuthorization
  },
  methods: {
    change (index, rows, n) {
      this.showDialog = true
      this.type = n
    },
    deleteRow (index, rows, n) {
      this.showDialog = true
      this.type = n
      console.log(index)
    },
    changeDialogFlag (bool) {
      this.showDialog = bool
    }
  }
}
</script>

<style lang='scss'>
  .u-table-wrap {
    width: 500px;
    margin: 20px auto;
  }
</style>
