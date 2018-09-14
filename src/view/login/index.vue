<template>
  <div class='u-login-wrap'>
    <div class='u-login-banner-wrap'>
      <div class="u-login-narrow">
        <h1 class='u-login-slogan'>朗播后台管理系统</h1>
        <LoginComponent @loginUserInfo='getLoginUserInfo' :errorMessage='loginErrorMessage'/>
      </div>
    </div>
    <div class='u-login-container'>
      <h3 class="u-login-container-title">朗播后台</h3>
      <ul class='u-login-container-list'>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
import LoginComponent from '@/components/loginComponent'
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
    .u-login-banner-wrap {
      height: 500px;
      background-image: url(../../assets/login/login_banner.png);
      background-size: cover;
      color: #fff;
    }
    .u-login-narrow {
      width: 1140px;
      margin: 0 auto;
    }
    .u-login-slogan {
      float: left;
      margin-top: 130px;
      margin-left: 30px;
      font-size: 48px;
    }
    .u-login-container {
    }
    .u-login-container-title {
      font-size: 24px;
      text-align: center;
      margin-top: 31px;
      margin-bottom: 61px;
    }
    .u-login-container-list {
      width: 1140px;
      margin: 0 auto 74px;
      li {
        float: left;
        width: 254px;
        margin-left: 44px;
      }
      i {
        display: inline-block;
        width: 145px;
        height: 102px;
        margin: auto;
      }
      li:first-child {
        margin-left: 0;
      }
    }
  }
</style>
