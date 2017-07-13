<template>
  <div>
    <div id="stroll-header"><!---->
      <header id="topbar" class="header">
        <div class="header-content"> <!---->
          <p class="header-title">闲逛</p>
        </div>
      </header>
    </div>

    <div class="page-loadmore-wrapper" style="margin-top: 48px;">
      <mt-loadmore :top-method="loadTop"
                   :bottom-method="loadBottom"
                   :bottom-all-loaded="allLoaded"
                   :maxDistance="180"
                   ref="loadmore">
        <div class="clearFix" v-if="randomWares">
          <div class="stroll-all-item">
            <div class="stroll-item">
              <div class="stroll-type-item" v-for="ware in wares">
                <div class="stroll-item-layer">
                  <img class="stroll-item-img" :src="ware.image">
                  <span class="tag-new">New</span>
                </div>
                <h3 class="stroll-item-title">
                  <a href="javascript:void(0);">{{ware.name}}</a>
                </h3>
                <div class="stroll-price-bar">
                  <span class="price">￥<em>{{ware.price}}</em></span>
                  <span class="comment">月销 {{ware.sellCount}}</span></div>
              </div> <!----> <!----></div>
          </div>
          <div class="stroll-all-item">
            <div class="stroll-item">
              <div class="stroll-type-item" v-for="ware in sortWares">
                <div class="stroll-item-layer">
                  <img class="stroll-item-img" :src="ware.image">
                  <span class="tag-new">New</span>
                </div>
                <h3 class="stroll-item-title">
                  <a href="javascript:void(0);">{{ware.name}}</a>
                </h3>
                <div class="stroll-price-bar">
                  <span class="price">￥<em>{{ware.price}}</em></span>
                  <span class="comment">月销 {{ware.sellCount}}</span></div>
              </div> <!----> <!----></div>
          </div>
        </div>
      </mt-loadmore>
    </div>

   </div>
</template>

<script>
  import {Loadmore} from 'mint-ui'
  export default {
    props:['randomWares'],
    data(){
      return {
        allLoaded: false
      }
    },
    methods: {
      loadTop() {
        this.$refs.loadmore.onTopLoaded();
      },
      loadBottom() {
        setTimeout(()=>{
          this.allLoaded = true;// 若数据已全部获取完毕
          this.$refs.loadmore.onBottomLoaded();
        },5000)
      }
    },
    computed:{
      wares(){
        let newWares = [];
        this.randomWares.forEach(wares=>{
          wares.forEach(ware=>{
            newWares.push(ware)
          })
        })
        return newWares
      },
      sortWares(){
        return this.wares.reverse()
      }
    },
    components: {
      'mt-loadmore': Loadmore
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
  }

  .header-content {
    width: 100%;
    margin: 0 auto;
    position: relative;
  }

  .header-title {
    margin: 0 auto;
    line-height: 4rem;
    font-size: 2rem;
    text-align: center;
    color: #fff;
    width: 80%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .stroll-all-item {
    width: 50%;
    float: left;
  }

  .stroll-item {
    margin: 3%;
    width: 94%;
    clear: both;
  }

  .stroll-type-item {
    margin: 0 1%;
  }

  .stroll-item-layer {
    position: relative;
    border-radius: 8px;
  }

  .stroll-item-img {
    border-radius: 8px;
  }

  .stroll-bottom {
    padding-bottom: 6rem;
    background: #fff;
  }

  .stroll-bottom .stroll-loading {
    width: 1.5rem;
    height: 1.5rem;
    background: #fff;
    border-radius: 50%;
    margin: 0 auto;
    position: relative;
    -webkit-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
  }

  .stroll-bottom .stroll-loading .cont {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: block;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
  }

  .stroll-bottom .stroll-loading .snakehead {
    width: .5rem;
    height: .2rem;
    display: block;
    background-color: #5bb908;
    border-radius: 50%;
    box-shadow: -2px 0 5px 2px #5bb908;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 3;
    background-image: -webkit-linear-gradient(-90deg, rgba(91, 185, 8, .6), #5bb908);
    background-image: linear-gradient(-90deg, rgba(91, 185, 8, .6), #5bb908);
    -webkit-transform: rotate(35deg);
    transform: rotate(35deg);
    -webkit-animation: twinkle 1s linear infinite;
    animation: twinkle 1s linear infinite;
  }

  .stroll-bottom .stroll-bottom-txt {
    width: 100%;
    overflow: hidden;
    clear: both;
    text-align: center;
    font-size: .9rem;
    color: #999;
    line-height: 1.8rem;
  }

  .stroll-item .tag-new {
    background-color: #79da87;
    max-width: 94%;
    overflow: hidden;
    display: inline-block;
    text-align: left;
    font-size: .8rem;
    color: #fff;
    line-height: 1.4rem;
    text-transform: uppercase;
    padding: 0 .5rem;
    position: absolute;
    left: 0;
    top: .8rem;
    z-index: 6;
    white-space: nowrap;
    word-break: keep-all;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
  }

  .cat-menu-a {
    width: 47%;
    min-height: 3rem;
    background-color: #eaeaea;
    border: 0;
    border-radius: 8px;
    font-size: 1.35rem;
    color: #4a4a4a;
    vertical-align: center;
    padding: .95rem .5%;
    display: inline-block;
    margin: 1%;
    float: left;
    display: -webkit-flex;
    text-align: center;
  }

  .cat-menu-a span {
    margin: auto;
  }

  .stroll-item-title {
    font-size: .95rem;
    padding: .4rem 0 .2rem;
    overflow: hidden;
    white-space: nowrap;
    word-break: keep-all;
    text-overflow: ellipsis;
  }

  .stroll-item-title a {
    color: #333;
    text-decoration: none;
    font-size: 1.35rem;
  }

  .stroll-price-bar {
    text-align: left;
    width: 100%;
    font-size: .9rem;
    height: 2rem;
    overflow: hidden;
  }

  .stroll-price-bar .price {
    font-size: 1.8rem;
    line-height: 2rem;
    display: inline-block;
    color: #ff475d;
    font-weight: 400;
    overflow: hidden;
    text-align: left;
    width: auto;
  }

  .stroll-price-bar .comment {
    font-size: 1.4rem;
    line-height: 1.5rem;
    width: auto;
    max-width: none;
    overflow: hidden;
    float: right;
    display: inline-block;
    text-align: right;
    color: #999;
    white-space: nowrap;
    word-break: keep-all;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
  }

  .stroll-price-bar .original {
    font-size: .9rem;
    display: inline-block;
    color: #888;
    text-decoration: line-through;
    margin-left: 5px;
  }
</style>