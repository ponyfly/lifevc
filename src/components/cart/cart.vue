<template>
  <div class="cart-wrap">
    <h1>我是购物车</h1>
    <mt-swipe :auto="2000" >
      <mt-swipe-item><a><img
          src="http://i.lifevccdn.com/upload/IndexBanner/dd0e77b30b7a4457ad4bff10a5ef028e_d1242x0.jpg"
      ></a></mt-swipe-item>
      <mt-swipe-item><a ><img
          src="http://i.lifevccdn.com/upload/IndexBanner/09c6c6a15c2d48d19a03b473a7c3764a_d1242x0.jpg"
      ></a></mt-swipe-item>
      <mt-swipe-item><a
      ><img
          src="http://i.lifevccdn.com/upload/IndexBanner/e234e5b64ab1456c9345dc8a4d604fb2_d1242x0.jpg"
      ></a></mt-swipe-item>
      <mt-swipe-item><a
      ><img
          src="http://i.lifevccdn.com/upload/IndexBanner/924590309cb749fabf810a832a402984_d1242x0.jpg"
      ></a></mt-swipe-item>
      <mt-swipe-item><a
      ><img
          src="http://i.lifevccdn.com/upload/IndexBanner/e0f30fd934134d28ad9c5c45f96c7045_d1242x0.jpg"
      ></a></mt-swipe-item>
      <mt-swipe-item><a
      ><img
          src="http://i.lifevccdn.com/upload/IndexBanner/a33813da3f924276a6cff34312ad587d_d1242x0.jpg"
      ></a></mt-swipe-item>
      <mt-swipe-item><a
      ><img
          src="http://i.lifevccdn.com/upload/IndexBanner/85f5aea681ab4e98b72f1d59b9a5b073_d1242x0.jpg"
      ></a></mt-swipe-item>
      <mt-swipe-item><a ><img
          src="http://i.lifevccdn.com/upload/IndexBanner/b074f4f091d44569acdd9d001cd4e0b5_d1242x0.jpg"
      ></a></mt-swipe-item>
      <mt-swipe-item><a ><img
          src="http://i.lifevccdn.com/upload/IndexBanner/dd0e77b30b7a4457ad4bff10a5ef028e_d1242x0.jpg"
      ></a></mt-swipe-item>
      <mt-swipe-item><a ><img
          src="http://i.lifevccdn.com/upload/IndexBanner/09c6c6a15c2d48d19a03b473a7c3764a_d1242x0.jpg"
      ></a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import {Swipe, SwipeItem } from 'mint-ui'
  export default {
    data(){
      return {}
    },
    computed: {},
    methods: {},
    components:{
      'mt-swipe':Swipe,
      'mt-swipe-item':SwipeItem
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mint-swipe {
    height: 250px;
    margin-bottom: 20px;
  }
  .mint-swipe-item  {
    width: 375px;
  }
  .mint-swipe-item img{
    width:100%;
  }
  .cart-wrap h1{
    flex 1
    height: 48px
    font-size 2rem
    line-height 48px
    text-align center
    background-color: #89be48;
    color: #fff
  }
</style>