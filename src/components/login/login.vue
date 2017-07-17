<template>
  <div id="loginBg" class="acct-wrap" style="margin-top: 0px; overflow: hidden; height: 667px;">
    <div class="old_user_login"><label class="acct_top_back" @click="backToUserCenter"></label>
      <img src="./images/ico1.png" class="acct_top_show">
    </div>
    <div class="bg-wrap" style="height: 526px;">
      <div class="login_content">
        <h1>老用户登录</h1>
        <div id="wrap">
          <div v-if="isShow">
            <form id="reset-form">
              <ul class="fm_list">
                <li class="multi"><input required="required" type="tel" maxlength="11" placeholder="请输入手机号" class="field_ipt">
                  <a class="fidld_skip">获取验证码</a>
                </li>
                <li>
                  <input required="required" type="text" maxlength="10" id="loginVerifyCode" placeholder="请输入手机验证码" class="field_ipt">
                </li>
              </ul>
              <div class="set_link">
                <p class="problem_contact_service">遇到问题？请
                  <a href="tel:400-609-2288">联系客服</a>
                </p>
                <a><b></b> <span @click="changeLoginWay">账号密码登录</span></a>
              </div>
            </form>
          </div>
          <div v-else>
            <form id="login-form">
              <ul class="fm_list">
                <li>
                  <input type="tel" maxlength="11" placeholder="请输入手机号" required="required" class="field_ipt" v-model="phone">
                </li>
                <li class="multi">
                  <input type="password" maxlength="20" placeholder="请输入登录密码" required="required" class="field_ipt" v-model="password">
                  <a class="fidld_skip">忘记密码</a>
                </li>
              </ul>
              <div id="setting" class="set_link">
                <a href="javascript:;"><span @click="changeLoginWay">手机号快捷登录</span><b></b></a>
              </div>
            </form>
          </div>
          <input type="button" value="登录" class="btn_login" @click="login">
          <input type="button" value="注册" class="btn_regisiter" @click="goRegister">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    props:{
      updateUsername:Function
    },
    data(){
      return {
        isShow:false,
        phone:'',
        password:''
      }
    },
    created(){
    },
    computed: {
    },
    methods: {
      backToUserCenter(){
        this.$router.push({ path: '/usercenter'})
      },
      changeLoginWay(){
        this.isShow = !this.isShow
      },
      goRegister(){
        this.$router.push({path:'/register'})
      },
      login(){
        let {phone, password} = this
        axios.post('/login',{
          phone,
          password
        })
          .then(res=>{
            let {username} = res.data
            console.log(res);
            this.updateUsername(username)
            this.$router.push({path:'/usercenter'})
          })
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .old_user_login {
    width: 100%;
    height: 2.82rem;
    background: #fff;
    position: relative;
  }
  .old_user_login .acct_top_back {
    width: 26px;
    height: 26px;
    display: block;
    border-radius: 50%;
    position: absolute;
    left: .3rem;
    top: 46px;
    border: 1px solid #3aad36;
  }
  .old_user_login .acct_top_back:after {
    content: "";
    width: 14px;
    height: 14px;
    display: block;
    border-left: 1px solid #3aad36;
    border-top: 1px solid #3aad36;
    position: absolute;
    left: 10px;
    top: 5px;
    transform: rotate(-45deg);
  }
  .acct_top_show {
    width: 2.4rem;
    overflow: hidden;
    display: block;
    position: absolute;
    top: 30%;
    left: 50%;
    margin-left: -1.2rem;
  }
  .bg-wrap {
    background: url(http://i1.lifevccdn.com/images/m/account/login-big-bg.jpg) no-repeat;
    background-size: 100% 100%;
    background-position: bottom;
    height: 79%;
  }
  .login_content {
    width: 100%;
    height: 6.5rem;
    box-sizing: border-box;
  }
  #loginBg h1, #registerBg h1 {
    width: 100%;
    text-align: center;
    color: #037049;
    font-size: 20px;
    line-height: 1.4rem;
    box-sizing: border-box;
  }
  #loginBg h1 {
    height: 1.68rem;
  }
  .fm_list li {
    width: 90%;
    margin: 0 auto;
    height: 1rem;
    border-bottom: 1px solid #dbdbdb;
    position: relative;
  }
  .field_ipt {
    font-size: 16px;
    width: 100%;
    background: transparent;
    position: absolute;
    left: 0;
    top: 0;
    height: 1rem;
    box-sizing: border-box;
  }
  form input, form select {
    height: 100%;
    background-color: #fff;
    border: 0;
    width: 90%;
    font-family: Microsoft YaHei;
  }
  .fidld_skip {
    display: inline-block;
    float: right;
    font-size: 16px;
    color: #3aad36;
    text-decoration: none;
    border: 1px solid #3aad36;
    border-radius: 4px;
    padding: .08rem .3rem;
    text-align: center;
    position: absolute;
    right: 0;
    top: .2rem;
  }
  .set_link {
    padding: .18rem 0 .4rem;
    text-align: right;
    height: 1rem;
    width: 90%;
    margin: 0 auto;
    font-size: 16px;
    box-sizing: border-box;
    position: relative;
  }
  .set_link .problem_contact_service {
    float: left;
    color: #666;
    font-size: 15px;
    line-height: .4rem;
  }
  .set_link .problem_contact_service a {
    color: #3ea438;
    text-decoration: underline;
    line-height: .4rem;
  }
  .set_link a {
    color: #3aad36;
    letter-spacing: 1px;
    font-size: 15px;
    margin: 0 0 .8rem;
  }
  .set_link a b {
    width: 8px;
    height: 8px;
    display: block;
    position: absolute;
    right: 0;
    top: .28rem;
    border-top: 1px solid;
    border-right: 1px solid;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
  }
  .set_link a span {
    float: right;
    line-height: .4rem;
    margin-right: .14rem;
  }
  .btn_login, .btn_regisiter {
    width: 80%;
    overflow: hidden;
    display: block;
    outline: none;
    text-align: center;
    font-size: 19px;
    color: #fff;
    line-height: .72rem;
    letter-spacing: 20px;
    text-indent: 20px;
    box-sizing: border-box;
  }
  .btn_login {
    margin: 0 auto .3rem;
    background-color: #3aad36;
    border: 1px solid #3aad36;
    border-radius: 5px;
  }
  .btn_regisiter {
    margin: 10px auto 0;
    background-color: #8a8a8a;
    border: 1px solid #8a8a8a;
    border-radius: 5px;
    opacity: .5;
  }
</style>
<!--<style lang="stylus" rel="stylesheet/stylus">
  .old_user_login {
    width: 100%;
    height: 8.81rem;
    background: #fff;
    position: relative;
  }
  .old_user_login .acct_top_back {
    width: 26px;
    height: 26px;
    display: block;
    border-radius: 50%;
    position: absolute;
    left: .94rem;
    top: 46px;
    border: 1px solid #3aad36;
  }
  .old_user_login .acct_top_back:after {
    content: "";
    width: 14px;
    height: 14px;
    display: block;
    border-left: 1px solid #3aad36;
    border-top: 1px solid #3aad36;
    position: absolute;
    left: 10px;
    top: 5px;
    transform: rotate(-45deg);
  }
  .acct_top_show {
    width: 7.5rem;
    overflow: hidden;
    display: block;
    position: absolute;
    top: 30%;
    left: 50%;
    margin-left: -3.74rem;
  }
  .bg-wrap {
    background: url(http://i1.lifevccdn.com/images/m/account/login-big-bg.jpg) no-repeat;
    background-size: 100% 100%;
    background-position: bottom;
    height: 79%;
  }
  .login_content {
    width: 100%;
    height: 20.28rem;
    box-sizing: border-box;
  }
  #loginBg h1, #registerBg h1 {
    width: 100%;
    text-align: center;
    color: #037049;
    font-size: 20px;
    line-height: 4.37rem;
    box-sizing: border-box;
  }
  #loginBg h1 {
    height: 5.24rem;
  }
  .fm_list li {
    width: 90%;
    margin: 0 auto;
    height: 3.12rem;
    border-bottom: 1px solid #dbdbdb;
    position: relative;
  }
  .field_ipt {
    font-size: 16px;
    width: 100%;
    background: transparent;
    position: absolute;
    left: 0;
    top: 0;
    height: 3.12rem;
    box-sizing: border-box;
  }
  form input, form select {
    height: 100%;
    background-color: #fff;
    border: 0;
    width: 90%;
    font-family: Microsoft YaHei;
  }
  .fidld_skip {
    display: inline-block;
    float: right;
    font-size: 16px;
    color: #3aad36;
    text-decoration: none;
    border: 1px solid #3aad36;
    border-radius: 4px;
    padding: .25rem .94rem;
    text-align: center;
    position: absolute;
    right: 0;
    top: .62rem;
  }
  .set_link {
    padding: .56rem 0 1.25rem;
    text-align: right;
    height: 3.12rem;
    width: 90%;
    margin: 0 auto;
    font-size: 16px;
    box-sizing: border-box;
    position: relative;
  }
  .set_link .problem_contact_service {
    float: left;
    color: #666;
    font-size: 15px;
    line-height: 1.25rem;
  }
  .set_link .problem_contact_service a {
    color: #3ea438;
    text-decoration: underline;
    line-height: 1.25rem;
  }
  .set_link a {
    color: #3aad36;
    letter-spacing: 1px;
    font-size: 15px;
    margin: 0 0 2.5rem;
  }
  .set_link a b {
    width: 8px;
    height: 8px;
    display: block;
    position: absolute;
    right: 0;
    top: .87rem;
    border-top: 1px solid;
    border-right: 1px solid;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
  }
  .set_link a span {
    float: right;
    line-height: 1.25rem;
    margin-right: .44rem;
  }
  .btn_login, .btn_regisiter {
    width: 80%;
    overflow: hidden;
    display: block;
    outline: none;
    text-align: center;
    font-size: 19px;
    color: #fff;
    line-height: 2.25rem;
    letter-spacing: 20px;
    text-indent: 20px;
    box-sizing: border-box;
  }
  .btn_login {
    margin: 0 auto .94rem;
    background-color: #3aad36;
    border: 1px solid #3aad36;
    border-radius: 5px;
  }
  .btn_regisiter {
    margin: 10px auto 0;
    background-color: #8a8a8a;
    border: 1px solid #8a8a8a;
    border-radius: 5px;
    opacity: .5;
  }
</style>-->
