<template>
  <footer id="bottombar" class="footer">
    <ul id="footermenuNav">
        <li><router-link to="/home">
          <div class="ico homeico"></div>
          <span class="lispan">首页</span></router-link></li>
        <li><router-link to="/all">
          <div class="ico typeico"></div>
          <span>全部产品</span></router-link></li>
        <li><router-link to="/stroll">
          <div class="ico strollico"></div>
          <span>闲逛</span></router-link></li>
        <li><router-link to="/cart">
          <div class="ico shoppingcartico"></div>
          <span>购物车</span> <!----> <!----></router-link></li>
        <li><router-link to="/usercenter">
          <div class="ico accountcenterico"></div>
          <span>账户中心</span> <span></span></router-link></li>
      </ul>
  </footer>
</template>

<script>
  export default {
    data(){
      return {}
    },
    computed: {},
    methods: {}
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  footer{
    padding: 0;
    height: 4.5rem;
    position: fixed;
    bottom: 0;
    z-index: 900;
    width: 100%;
    background: #f8f8f8;
    border-top: .04rem solid #ddd;
    #footermenuNav {
      margin: 0;
      padding: 0;
      background: #f8f8f8;
      text-align: center;
      .ico{
        width: 100%;
        height: 3.3rem;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: 28%;
        margin-bottom: .2rem;
      }
      .homeico{
        background-image:url('./images/homeico.png')
      }
      .typeico{
        background-image:url('./images/all.png')
      }
      .strollico{
        background-image:url('./images/stroll.png')
      }
      .shoppingcartico{
        background-image:url('./images/cart.png')
      }
      .accountcenterico{
        background-image:url('./images/usercenter.png')
      }
      li{
        width: 20%;
        float: left;
        margin: 0 auto;
        position: relative;
        a{
          margin-top: 0;
          display: block;
          color: #ababab;
          line-height: .1rem;
          font-size: 1.1rem;
          vertical-align: bottom;
          text-align: center;
          text-decoration: none;
        }
        a.selected{
          color: #009c42;
          .homeico{
            background-image:url('./images/homeico1.png')
          }
          .typeico{
            background-image:url('./images/all1.png')
          }
          .strollico{
            background-image:url('./images/stroll1.png')
          }
          .shoppingcartico{
            background-image:url('./images/cart1.png')
          }
          .accountcenterico{
            background-image:url('./images/usercenter1.png')
          }
        }
      }
    }
  }
</style>