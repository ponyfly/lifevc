<template>
  <div>
    <header id="topbar" class="header" v-show="knowMoreShow">
      <div class="header-content"></div>
      <div class="wrap-heard">
        <div class="header-Ico"></div>
        <router-link to="/all"><span class="head-typeimg"></span></router-link></div>
      <div title="分类导航条" class="wrap-menuNavNewProduct">
        <div id="navPanelDiv" class="menuNavNewProductPanel" ref="menuNavNewProductPanel">
          <ul id="navUL" class="menuNavNewProduct" style="width: 800px;" ref="menuNavNewProduct">
            <li class="font-large" v-for="(navItem,index) in navLists">
              <router-link :to="`/${navItem.url}/${navItem.id}`">{{navItem.name}}</router-link>
            </li>
            <li class="font-large">
              <a href="javascript:void(0)"
                 @click.stop.prevent="knowShow(false)">了解LifeVC
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <knowmore v-show="!knowMoreShow"
              @knowShow="knowShow">
    </knowmore>
  </div>

</template>

<script>
  import axios from 'axios'
  import knowmore from '../knowmore/knowmore.vue'
  import BScroll from 'better-scroll'

  export default {
    props:['navLists'],
    data(){
      return {
        knowMoreShow:true,
      }
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
    computed: {

    },
    methods: {
      knowShow(isShow){
        this.knowMoreShow = isShow
      }
    },
    components:{
      knowmore
    }
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