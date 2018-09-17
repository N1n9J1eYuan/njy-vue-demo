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
        <li class="u-login-container-resource">
          <i></i>
          <h3>优势的教育资源</h3>
          <p>10 年经验名师团队，课程有<br>效有料，传授高分秘诀。</p>
        </li>
        <li class="u-login-container-plan">
          <i></i>
          <h3>精准的练习规划</h3>
          <p>精准能力评测、个性化训练计<br>划，提升备考效率。</p>
        </li>
        <li class="u-login-container-data">
          <i></i>
          <h3>全面的数据跟踪</h3>
          <p>学习数据实时记录，训练质量全<br>面跟踪，管控学习过程。</p>
        </li>
        <li class="u-login-container-system">
          <i></i>
          <h3>科学的管理体系</h3>
          <p>多维度数据建模，协同校长、教<br>师、学生及家长高效融合。</p>
        </li>
      </ul>
    </div>
    <div class="u-login-footer">
      <div class="u-login-hotline">
          <i></i>咨询热线 400-656-9559
      </div>
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
      // /users/login
      this.setCookie('langlibUserName', userInfo.langlibUserName)
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
        width: 252px;
        margin-left: 44px;
        text-align: center;
      }
      i {
        display: block;
        width: 145px;
        height: 102px;
        margin: auto;
      }
      h3 {
        margin: 25px auto 12px;
        font-size: 20px;
      }
      p {
        color: #767676;
        font-size: 18px;
      }
      li:first-child {
        margin-left: 0;
      }
      &:after {
        content: '';
        display: block;
        clear: both;
      }
    }
    .u-login-container-resource i {
      background: url(../../assets/login/login_resource.png) 50% no-repeat;
    }
    .u-login-container-plan i {
      background: url(../../assets/login/login_plan.png) 50% no-repeat;
    }
    .u-login-container-data i {
      background: url(../../assets/login/login_data.png) 50% no-repeat;
    }
    .u-login-container-system i {
      background: url(../../assets/login/login_system.png) 50% no-repeat;
    }
    .u-login-footer {
      width: 100%;
      height: 40px;
      min-width: 1140px;
      background-color: #f5f5f5;
      line-height: 40px;
      color: #767676;
      text-align: center;
      letter-spacing: -1.13px;
    }
    .u-login-hotline {
      display: inline-block;
      font-size: 18px;
      i {
        float: left;
        margin-right: 10px;
        margin-top: 8px;
        width: 22px;
        height: 22px;
        background: url(../../assets/login/icon-phone.png) 50% no-repeat;
      }
    }
  }
</style>
