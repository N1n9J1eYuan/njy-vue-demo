<template>
  <div class='u-login-wrap'>
    <LoginComponent @loginUserInfo='getLoginUserInfo' :errorMessage='loginErrorMessage'/>
  </div>
</template>

<script>
import LoginComponent from './loginComponent'
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      loginErrorMessage: ''
    }
  },
  components: {
    LoginComponent
  },
  methods: {
    ...mapActions('login', ['saveUserInfo']),
    // 获取登陆信息 并发送登陆请求
    getLoginUserInfo (userInfo) {
      if (this.loginErrorMessage) this.loginErrorMessage = ''
      // 请求登陆接口后 储存返回用户信息并跳转页面
      this.saveUserInfo(userInfo)
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style lang='scss' scoped>
  .u-login-wrap {
    min-width: 1200px;
    height: 1000px;
    background-color: #333;
    position: relative;
  }
</style>
