<template>
  <div class="u-check-box-wrap" >
    <div class="u-check-box-all">
      <label>
        <input type="checkbox" :data-type='keys + "-checkAll"' :checked='infoObj.checked' @change='changeCheckedAll'> 全选
      </label>
    </div>
    <div class="u-check-box-group" v-for='(obj1, n1) in infoObj.item' :key='"checkBox-" + n1'>
      <p>{{obj1.name}}</p>
      <label v-for='(obj2, n2) in obj1.item' :key='"checkBox-" + n1 + "-" + n2'>
        <input type="checkbox"
          :checked='obj2.checked'
          data-id='authorizationCheckBox'
          :data-type='keys'
          @change='changeCheckBox'> {{obj2.name}}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'systemManagementCheckBox',
  props: {
    infoObj: Object,
    keys: String
  },
  data () {
    return {
      nodeArr: null
    }
  },
  mounted () {
    this.nodeArr = document.querySelectorAll('input[data-type=' + this.keys + ']')
  },
  methods: {
    // 全选 / 全不选
    changeCheckedAll ($event) {
      let bool = $event.target.checked
      this.nodeArr.forEach(element => {
        element.checked = bool
      })
    },
    // 复选按钮
    changeCheckBox () {
      this.checkAllCheckBox()
    },
    checkAllCheckBox () {
      let count = 0
      this.nodeArr.forEach(element => {
        if (element.checked) count++
      })
      document.querySelector('input[data-type=' + this.keys + '-checkAll]').checked = count === this.nodeArr.length || false
    }
  }
}
</script>

<style lang='scss'>
  .u-check-box-wrap {

  }
</style>
