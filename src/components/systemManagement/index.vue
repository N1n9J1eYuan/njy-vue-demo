<template>
  <div class='u-system-management-wrap'>
    <el-tabs class='u-system-management-container' type="border-card">
      <el-tab-pane class='u-system-management-tab-pane' label='组织架构管理'>
        <SystemManagementTree/>
      </el-tab-pane>
      <el-tab-pane label='角色管理'>
        <SystemManagementTable/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import SystemManagementTree from './systemManagementTree'
import SystemManagementTable from './systemManagementTable'
export default {
  name: 'systemManagement',
  components: {
    SystemManagementTree,
    SystemManagementTable
  }
}
</script>

<style lang='scss'>
  .u-system-management-wrap {
    padding: 50px;
    .u-system-management-container {
      width: 960px;
      height: 700px;
    }
    .u-system-management-tab-pane {
      overflow-y: auto;
    }
  }
</style>
