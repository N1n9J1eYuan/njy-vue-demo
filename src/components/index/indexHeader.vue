<template>
  <div class='u-index-header-wrap'>
    <h3>朗播后台管理系统</h3>
    <p @click='signOut'>注销 <i class="u-icon u-index-header-icon-sign-out"></i></p>
  </div>
</template>

<script>
export default {
  name: 'indexHeader',
  methods: {
    signOut () {
      console.log(999)
    }
  }
}
</script>

<style lang='scss'>
  .u-index-header-wrap {
    height: 70px;
    background-color: #030303;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    h3 {
      color: #e48229;
      font-size: 24px;
    }
    p {
      display: -webkit-flex;
      cursor: pointer;
    }
    .u-index-header-icon-sign-out {
      background-image: url('../../images/icon/index_sign_out.png');
    }
  }
</style>
