<template>
  <div>
    <div class="toTop" style="display: none;"></div>
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
        <div class="clearFix">
          <div class="stroll-all-item">
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer"><img class="stroll-item-img"
                                                    src="http://i.lifevccdn.com/upload/stroll/e726ff1fb1d44685a91cf76ff56d5018.jpg"
                                                    lazy="loaded"> <span class="tag-new">New</span></div>
                <h3 class="stroll-item-title"><a href="javascript:void(0);">分类整理收纳箱</a></h3>
                <div class="stroll-price-bar"><span class="price">￥<em>49</em></span> <span
                    class="comment">月销 2662</span></div>
              </div> <!----> <!----></div><!----><!----><!---->
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer"><img class="stroll-item-img"
                                                    src="http://i.lifevccdn.com/upload/stroll/33b9b2000fe24e2083f22620658f3ad1.jpg"
                                                    lazy="loaded"> <span class="tag-new">New</span></div>
                <h3 class="stroll-item-title"><a href="javascript:void(0);">电蚊香</a></h3>
                <div class="stroll-price-bar"><span class="price">￥<em>29</em></span> <span
                    class="comment">月销 4416</span></div>
              </div> <!----> <!----></div><!---->
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer"><img class="stroll-item-img"
                                                    src="http://i.lifevccdn.com/upload/stroll/5b388119f79444ba889c4f6b9a118bad.jpg"
                                                    lazy="loaded"> <!----></div>
                <h3 class="stroll-item-title"><a href="javascript:void(0);">加拿大原生木浆抽纸（12包）</a></h3>
                <div class="stroll-price-bar"><span class="price">￥<em>29</em></span> <span
                    class="comment">月销 7317</span></div>
              </div> <!----> <!----></div><!---->
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer"><img class="stroll-item-img"
                                                    src="http://i.lifevccdn.com/upload/stroll/06cde94e3e4f4c2093b33fdcb1cb4726.jpg"
                                                    lazy="loaded"> <!----></div>
                <h3 class="stroll-item-title"><a href="javascript:void(0);">可挂式防潮除湿剂(8袋装)</a></h3>
                <div class="stroll-price-bar"><span class="price">￥<em>30</em></span> <span
                    class="comment">月销 4511</span></div>
              </div> <!----> <!----></div><!---->
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer"><img class="stroll-item-img"
                                                    src="http://i.lifevccdn.com/upload/stroll/31ba2fd1d25242889a094cae65568ba6.jpg"
                                                    lazy="loaded"> <!----></div>
                <h3 class="stroll-item-title"><a href="javascript:void(0);">植物精粹面膜礼盒(15片装)</a></h3>
                <div class="stroll-price-bar"><span class="price">￥<em>69</em></span> <span
                    class="comment">月销 3172</span></div>
              </div> <!----> <!----></div><!---->
          </div>
          <div class="stroll-all-item"><!---->
            <div class="stroll-item"><!----> <!---->
              <div class="stroll-type-item  clearFix">
                <div class="cat-menu-a"><span>49元包1年</span></div>
                <div class="cat-menu-a"><span>今日新品</span></div>
                <div class="cat-menu-a"><span>送500元积分</span></div>
                <div class="cat-menu-a"><span>金币商城</span></div>
              </div>
            </div>
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer"><img class="stroll-item-img"
                                                    src="http://i.lifevccdn.com/upload/stroll/9c66a042b58048219b6c5c1290426c94.jpg"
                                                    lazy="loaded"> <span class="tag-new">New</span></div>
                <h3 class="stroll-item-title"><a href="javascript:void(0);">全棉舒适四件套(绵羊)</a></h3>
                <div class="stroll-price-bar"><span class="price">￥<em>269</em><span
                    class="original">￥319</span></span> <span class="comment">月销 1681</span></div>
              </div> <!----> <!----></div>
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer"><img class="stroll-item-img"
                                                    src="http://i.lifevccdn.com/upload/stroll/865c7b1282a84b239d5f5d5c28972c2b.jpg"
                                                    lazy="loaded"> <span class="tag-new">New</span></div>
                <h3 class="stroll-item-title"><a href="javascript:void(0);">全效洗衣液(5合1)</a></h3>
                <div class="stroll-price-bar"><span class="price">￥<em>39</em></span> <span
                    class="comment">月销 4354</span></div>
              </div> <!----> <!----></div><!---->
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer"><img class="stroll-item-img"
                                                    src="http://i.lifevccdn.com/upload/stroll/e2b2e00afcbf428a8da047d73f7fa168.jpg"
                                                    lazy="loaded"> <span class="tag-new">New</span></div>
                <h3 class="stroll-item-title"><a href="javascript:void(0);">耐磨高弹力旅行箱保护套</a></h3>
                <div class="stroll-price-bar"><span class="price">￥<em>39</em><span
                    class="original">￥49</span></span> <span class="comment">月销 5368</span></div>
              </div> <!----> <!----></div><!---->
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer"><img class="stroll-item-img"
                                                    src="http://i.lifevccdn.com/upload/stroll/f5dd292151a24a078dd24945c6b80695.jpg"
                                                    lazy="loaded"> <span class="tag-new">New</span></div>
                <h3 class="stroll-item-title"><a href="javascript:void(0);">8K玻纤晴雨两用伞(抗UV)</a></h3>
                <div class="stroll-price-bar"><span class="price">￥<em>69</em></span> <span
                    class="comment">月销 2406</span></div>
              </div> <!----> <!----></div><!---->
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer"><img class="stroll-item-img"
                                                    src="http://i.lifevccdn.com/upload/stroll/d96367576ffb4714bd81d34259e2b84c.jpg"
                                                    lazy="loaded"> <span class="tag-new">New</span></div>
                <h3 class="stroll-item-title"><a href="javascript:void(0);">专业防水运动包 </a></h3>
                <div class="stroll-price-bar"><span class="price">￥<em>49</em></span> <span
                    class="comment">月销 2616</span></div>
              </div> <!----> <!----></div><!---->
          </div>
        </div>
      </mt-loadmore>
      <!--<div class="stroll-bottom" style="display: none;">
        <div class="stroll-loading"><span class="cont"></span><span
            class="snakehead"></span></div>
        <div class="stroll-bottom-txt">加载中</div>
      </div>&lt;!&ndash;&ndash;&gt;-->
    </div>

    <footer id="bottombar" class="footer">
      <div>
        <ul id="footermenuNav">
          <li><a href="#/" class="">
            <div class="ico homeico"></div>
            <span class="lispan">首页</span></a></li>
          <li><a href="#/all" class="">
            <div class="ico typeico"></div>
            <span>全部产品</span></a></li>
          <li><a href="#/stroll" class="selected">
            <div class="ico strollico"></div>
            <span>闲逛</span></a></li>
          <li><a href="#/cart" class="">
            <div class="ico shoppingcartico"></div>
            <span>购物车</span> <!----> <!----></a></li>
          <li><a href="#/usercenter" class="">
            <div class="ico accountcenterico"></div>
            <span>账户中心</span> <span class=""></span></a></li>
        </ul>
      </div>
    </footer> <!----></div>
</template>

<script>
  import {Loadmore} from 'mint-ui'
  export default {
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
    height: 1.5rem;
    overflow: hidden;
  }

  .stroll-price-bar .price {
    font-size: 1.8rem;
    line-height: 1.5rem;
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