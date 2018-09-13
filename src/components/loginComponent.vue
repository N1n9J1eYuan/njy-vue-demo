<template>
  <div class='u-login-component-wrap'>
    <h3 class='u-login-component-title'>用户登陆</h3>
    <div class='u-login-component-container'>
      <label>
        <i class='u-icon u-login-component-icon-user'></i>
        <input
          type="text"
          placeholder='用户名/手机号/邮箱号'
          v-model="userInfo.username">
      </label>
      <label>
        <i class='u-icon u-login-component-icon-password'></i>
        <input
          type="text"
          placeholder='密码'
          v-model="userInfo.password">
      </label>
      <p class='u-login-component-error'>{{ hintText }}</p>
    </div>
    <el-button
      class='u-login-component-btn'
      type="primary"
      @click='login'>登 录</el-button>
  </div>
</template>

<script>
export default {
  name: 'loginComponent',
  data () {
    return {
      userInfo: {
        username: '',
        password: ''
      },
      hintText: ''
    }
  },
  props: {
    errorMessage: String
  },
  methods: {
    login () {
      if (this.hintText) this.hintText = ''
      if (!this.userInfo.username || !this.userInfo.password) {
        this.hintText = '用户名或密码不能为空。'
      } else {
        this.$emit('loginUserInfo', this.userInfo)
      }
    }
  },
  watch: {
    errorMessage () {
      this.hintText = this.errorMessage
    }
  }
}
</script>

<style lang='scss'>
  .u-login-component-wrap {
    position: absolute;
    top: 100px;
    right: 200px;
    width: 300px;
    height: 260px;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, .2);
    border-radius: 10px;
    color: #fff;
    display: -webkit-flex;
    flex-direction: column;
    .u-login-component-title {
      text-align: center;
    }
    .u-login-component-container {
      position: relative;
      height: 150px;
    }
    label {
      height: 40px;
      background-color: rgba(255, 255, 255, .22);
      margin-top: 20px;
      border-radius: 10px;
      display: -webkit-flex;
      align-items: center;
      input {
        margin-left: 10px;
        margin-right: 20px;
        flex: 1;
        height: 30px;
        border: none;
        outline: none;
        background: none;
        color: #fff;
        &::-webkit-input-placeholder {
          color: #ddd;
        }
      }
    }
    .u-login-component-icon-user {
      background-image: url('../images/icon/login_user.png');
    }
    .u-login-component-icon-password {
      background-image: url('../images/icon/login_password.png');
    }
    .u-login-component-btn {
      font-size: 16px;
    }
    .u-login-component-error {
      color: red;
      position: absolute;
      bottom: 8px;
      font-size: 12px;
    }
  }
</style>
