<template>
  <div class='u-login-form-wrap'>
    <h3 class='u-login-form-title'>用户登陆</h3>
    <div class='u-login-form-container'>
      <label>
        <i class='u-icon u-login-form-icon-user'></i>
        <input
          type="text"
          placeholder='用户名/手机号/邮箱号'
          v-model="userInfo.username">
      </label>
      <label>
        <i class='u-icon u-login-form-icon-password'></i>
        <input
          type="text"
          placeholder='密码'
          v-model="userInfo.password">
      </label>
      <p class='u-login-form-error'>{{ hintText }}</p>
    </div>
    <el-button
      class='u-login-form-btn'
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
  .u-login-form-wrap {
    float: right;
    width: 340px;
    height: 300px;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, .2);
    border-radius: 10px;
    color: #fff;
    display: -webkit-flex;
    flex-direction: column;
    margin-top: 130px;
    margin-right: 30px;
    .u-login-form-title {
      text-align: center;
    }
    .u-login-form-container {
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
    .u-login-form-icon-user {
      background-image: url('../images/icon/login_user.png');
    }
    .u-login-form-icon-password {
      background-image: url('../images/icon/login_password.png');
    }
    .u-login-form-btn {
      font-size: 16px;
      margin-top: 18px;
    }
    .u-login-form-error {
      color: red;
      position: absolute;
      bottom: 8px;
      font-size: 12px;
    }
  }
</style>
