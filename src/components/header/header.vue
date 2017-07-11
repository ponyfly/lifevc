<template>
  <header id="topbar" class="header">
    <div class="header-content"></div>
    <div class="wrap-heard">
      <div class="header-Ico"></div>
      <router-link to="/all"><span class="head-typeimg"></span></router-link></div>
    <div title="分类导航条" class="wrap-menuNavNewProduct">
      <div id="navPanelDiv" class="menuNavNewProductPanel" ref="menuNavNewProductPanel">
        <ul id="navUL" class="menuNavNewProduct" style="width: 800px;" ref="menuNavNewProduct">
          <li class="font-large"><router-link to="/home" default-active="1">首页</router-link></li> <!---->
          <li class="font-large"><router-link to="/new">新品</router-link></li> <!---->
          <li class="font-large"><router-link to="/channel/2866">家务</router-link></li> <!---->
          <li class="font-large"><router-link to="/channel/2864">下厨</router-link></li> <!---->
          <li class="font-large"><router-link to="/channel/2865">家居服</router-link></li> <!---->
          <li class="font-large"><router-link to="/channel/2861">生活</router-link></li> <!---->
          <li class="font-large"><router-link to="/channel/2860">软装</router-link></li> <!---->
          <li class="font-large"><router-link to="/channel/2862">床品</router-link></li> <!---->
          <li class="font-large"><router-link to="/channel/2863">工作和旅行</router-link></li> <!----><!---->
          <li class="font-large"><router-link to="/channel/2859">了解LifeVC</router-link></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data(){
      return {}
    },
    created(){
      this.$nextTick(()=>{
        new BScroll(this.$refs.menuNavNewProductPanel,{
          click:true,
          scrollX:true,
          momentum:true,
          bounce: true
        })
      })
    },
    computed: {},
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  header {
    padding: 0;
    width: 100%;
    background: #89be48;
    position: fixed;
    top: 0;
    z-index: 999;
    min-width: 320px;
    max-width: 640px;
    margin: auto;
    .header-content {
      width: 100%;
      margin: 0 auto;
      position: relative;
    }
    .wrap-heard {
      width: auto;
      height: 4rem;
      background: #89be48;
      .header-Ico {
        display: block;
        width: 100%;
        height: 4rem;
        background: url('./images/header_icon.png') no-repeat;
        background-size: 50%;
        background-position: 50%;
      }
      .head-typeimg {
        width: 3.666666rem;
        height: 3.666666rem;
        display: block;
        float: right;
        position: absolute;
        z-index: 1000;
        top: 0;
        right: 0;
        background-size: 45%;
        background-image: url('./images/header_type.png');
        background-repeat: no-repeat;
        background-position: 50%;
      }
    }
    .wrap-menuNavNewProduct {
      position: relative;
      z-index: 1100;
      background: #fff;
      .menuNavNewProductPanel {
        margin: 0 auto;
        position: relative;
        width: 100%;
        height: 4rem;
        border-bottom 2px solid #ddd
        .menuNavNewProduct {
          position: relative;
          z-index: 1101;
          overflow: hidden;
          line-height: 4rem;
          width: 800px;
          li{
            height: 4rem;
            float: left;
            box-sizing: border-box;
            width: 80px;
            text-align: center;
            border-bottom: 2px solid #ddd;
            margin-top 2px
            a{
              height: 3.8rem;
              display: block;
              line-height: 3.8rem;
              padding: 0;
              position: relative;
              font-size: 1.35rem;
            }
            .selected{
              color: #80b532;
              border-bottom: 2px solid #80b532;
            }
          }
            /*.selected{
            border-bottom: 2px solid #80b532;
            a{
              color: #80b532;
            }
          }*/
        }
      }
    }
  }


</style>