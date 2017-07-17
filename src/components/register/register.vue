<template>
  <div id="registerBg" class="acct-wrap" style="margin-top: 0px; overflow: hidden; height: 667px;">
    <div class="old_user_login"><label class="acct_top_back" @click="backToUserCenter"></label>
      <img src="./images/ico1.png" class="acct_top_show">
    </div>
    <div class="bg-wrap" style="height: 526px;">
      <div class="login_content">
        <h1>新用户注册</h1>
        <div id="wrap">
          <div>
            <form id="register-form">
              <ul class="fm_list register_distance">
                <li><input id="txtMobile" type="tel" maxlength="11" placeholder="请输入手机号" required="required" class="field_ipt" v-model="phoneNumber"></li>
                <li><input type="password" maxlength="20" placeholder="请设置6-20位密码,包含字母、数字或符号" id="regPwd" required="required" class="field_ipt" v-model="password"></li>
                <li><input required="required" type="text" maxlength="10" id="regCaptcha" placeholder="请输入图形验证码" class="field_ipt" style="width: 70%;">
                  <div class="verifycode_img">
                    <img src="http://account.lifevc.com/Account/NewVerifyCode?t=1499764256730"
                      style="width: 20%; border-left: 0px solid silver;">
                    <img src="./images/ico2.png" style="width: 5%;">
                  </div>
                </li>
                <li>
                  <input type="text" placeholder="请输入手机验证码" maxlength="10" id="regSmsCaptcha" required="required" class="field_ipt" v-model="smsNum">
                  <a class="fidld_skip" @click="getSms">获取验证码</a>
                </li>
              </ul>
              <p>遇到问题？请<a href="tel:400-609-2288">联系客服</a></p>
              <input type="button" value="注册"  class="btn_login space m-top" @click="toRegister">
              <input type="button" value="登录" class="btn_regisiter space m-top" @click="goLogin">
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return {
        isShow:true,
        phoneNumber:'',
        password:'',
        smsNum:''
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
      goLogin(){
        this.$router.push({path:'/login'})
      },
      getSms(){
        let url = `/sendcode?phone=${this.phoneNumber}`
        axios.get(url)
          .then(res=>{
            //..
          })
      },
      toRegister(){
        axios.post('/register',{
          phone:this.phoneNumber,
          password:this.password,
          code:this.smsNum
        })
          .then(res=>{
            console.log(res.data.code)
          })
          .catch(err=>{
            console.log(err);
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
  #registerBg h1{
    height: 1.04rem;
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
  .verifycode_img {
    position: absolute;
    right: -70%;
    width: 100%;
    top: -7px;
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
  .register_distance {
    box-sizing: border-box;
    margin-bottom: .2rem;
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
  #register-form p {
    font-size: 14px;
    color: #666;
    width: 100%;
    text-align: center;
    margin-bottom: .15rem;
  }
  #register-form p a {
    color: #3ea438;
    text-decoration: underline;
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