<template>
  <div class='u-table-wrap'>
    <el-button type="primary" class='u-table-add' @click="change(null, null, 4)">添加角色</el-button>
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
            @click="change(scope.$index, tableData, 3)"
            type="text"
            size="small">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <SystemManagementAuthorization
      :showDialog='showDialog'
      :options='options'
      @changeDialogFlag='changeDialogFlag'
      @sendData='getData'/>
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
          id: '2016-05-02',
          name: '电销人员'
        },
        {
          id: '2016-05-04',
          name: '网销人员'
        },
        {
          id: '2016-05-01',
          name: '电销主管'
        },
        {
          id: '2016-05-03',
          name: '网销主管'
        },
        {
          id: '2016-05-03',
          name: '销售总监'
        }
      ],
      showDialog: false,
      type: 1,
      options: {}
    }
  },
  components: {
    SystemManagementAuthorization
  },
  created () {
    // 获取所有角色信息
    // this.getRoles()
  },
  methods: {
    getRoles () {
      // const result = this.$fetch.get.getRoles()
      // result.then(rs => {
      //   this.tableData = rs.data
      // }, err => {})
    },
    change (index, rows, n) {
      this.showDialog = true
      this.options.type = n
      if (n !== 4) this.options.id = rows[index].id
      if (n === 1) this.options.name = rows[index].name
    },
    changeDialogFlag (bool) {
      this.showDialog = bool
    },
    getData (data) {
      switch (true) {
        case this.options.type === 1:
          this.changeRoles({name: data.name})
          break
        case this.options.type === 2:
          break
        case this.options.type === 3:
          this.deleteRoles()
          break
        default:
          this.addRoles(data)
      }
    },
    // 添加角色
    addRoles (name) {
      // const result = this.$fetch.post.addRoles({name: name})
      // result.then(rs => {
      //   if (rs.code === 200) {
      //     this.$alert('添加成功', '提示', {
      //       confirmButtonText: '确定'
      //     })
      //     this.getRoles()
      //   }
      // })
    },
    // 删除角色
    deleteRoles () {
      // const result = this.$fetch.post.deleteRoles({id: this.options.id})
      // result.then(rs => {
      //   if (rs.code === 200) {
      //     this.$alert('删除成功', '提示', {
      //       confirmButtonText: '确定'
      //     })
      //     this.getRoles()
      //   }
      // })
    },
    // 修改名称
    changeRoles (params) {
      // const result = this.$fetch.put.changeRoles({id: this.options.id, name: params.name})
      // result.then(rs => {
      //   if (rs.code === 200) {
      //     this.$alert('修改成功', '提示', {
      //       confirmButtonText: '确定'
      //     })
      //     this.getRoles()
      //   }
      // })
    }
  }
}
</script>

<style lang='scss'>
  .u-table-wrap {
    width: 500px;
    margin: 20px auto;
    .u-table-add {
      margin-bottom: 20px;
    }
  }
</style>
