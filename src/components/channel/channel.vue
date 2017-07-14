<template>
  <div class="channel-wrap" v-if="currentGood">
    <lf-header :navLists="navLists"></lf-header>
    <h1>{{currentGood.name}}</h1>
    <div class="main-body-shelf">
      <div class="lf-loadmore">
        <ul id="blockcartegory" class="life-goodsUl clearFix life-child-thank">
          <li v-for="product in currentGood.products">
            <router-link :to="`/channelsub/${$route.params.id}/3351`">
              <img :src="product.image">
              <dl>{{product.name}}</dl>
            </router-link>
          </li>
        </ul>
        <div id="category-banner" class="category-banner">
          <img src="http://i.lifevccdn.com/upload/DesignerMessageImg/6d2115bb205649fd81a5a028a3142354.jpg"
            onerror="this.style.display='none'"
            class="item-pic">
        </div>
        <div id="ceoRecommend" class="wrap-shelf">
          <div class="subcat-title">Rico.S的精心推荐：</div>
          <div class="shelf-item"  v-for="ware in randomWares">
            <a class="item-pic-bx">
              <img class="item-pic" :src="ware.image"> <!---->
              <div class="item-status-empty" style="display: none;">
                热卖脱销
              </div>
            </a>
            <div class="item-panel">
              <div class="title clearFix">
                {{ware.name}}
              </div>
              <div class="item-price">
                <div class="price-cont">
                  <span class="act-tag">限时体验价</span>
                  <span>￥</span> <span>{{ware.price}}</span>&nbsp;
                  <span class="original-price" v-show="ware.oldPrice">￥{{ware.oldPrice}}</span>
                  <span class="promo-lable" v-show="ware.newWare">新</span>
                </div>
                <div class="item-comment">评论：{{ware.ratings.length}}</div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <!--<div id="wrap_shelf_nav" class="wrap-shelf-navs clearFix"
             style="display: block;">
          <div id="wrap_shelf_nav_sort"
               style="width: 100%; z-index: 105; position: relative; top: 0px;">
            <ul class="life-sort has-filter clearFix">
              <li><a>新品</a></li>
              <li><a>畅销</a></li>
              <li><a><em>价格</em> <i
              ></i></a></li>
              <li><a><em>需求筛选</em> <span
                  class="filter"></span></a></li>
            </ul>
          </div>
        </div>
        <div id="wrap_shelf_list" class="wrap-shelf wrap-shelf-list">
          <div class="shelf-item" style="position: relative;">
            <a class="item-pic-bx"><img class="item-pic"
                                        src="http://i.lifevccdn.com/upload/AppItemInfoImage/7430df5fa7b24de2a7a523698aeeaabc_d1242x0.jpg"
                                        lazy="loaded"> &lt;!&ndash;&ndash;&gt;
              <div class="item-status-empty" style="display: none;">
                热卖脱销
              </div>
            </a>
            <div class="item-panel">
              <div class="title clearFix">
                麦饭石不粘锅
              </div>
              <div class="item-price">
                <div class="price-cont"><span class="act-tag"
                                              style="display: none;"></span> <span
                >￥</span> <span>199</span>&nbsp;
                  <span class="original-price"></span> <span
                      class="promo-lable">新</span></div>
                <div class="item-comment">评论：331</div>
              </div>
            </div>
            <div></div>
          </div>
          <div class="shelf-item" style="position: relative;">
            <a class="item-pic-bx"><img class="item-pic"
                                        src="http://i.lifevccdn.com/upload/AppItemInfoImage/e50dc0d1663744c0b63135ca1d05cc12_d1242x0.jpg"
                                        lazy="loaded"> &lt;!&ndash;&ndash;&gt;
              <div class="item-status-empty" style="display: none;">
                热卖脱销
              </div>
            </a>
            <div class="item-panel">
              <div class="title clearFix">
                不粘少油烟炒锅(日本大金)
              </div>
              <div class="item-price">
                <div class="price-cont"><span class="act-tag"
                                              style="display: none;"></span> <span
                >￥</span> <span>139</span>&nbsp;
                  <span class="original-price"></span> <span class="promo-lable"
                                                             style="display: none;"></span></div>
                <div class="item-comment">评论：17881</div>
              </div>
            </div>
            <div></div>
          </div>
          <div class="shelf-item" style="position: relative;">
            <a class="item-pic-bx"><img class="item-pic"
                                        src="http://i.lifevccdn.com/upload/AppItemInfoImage/4ef4ff5fd68f4fbe806e3e202d12f877_d1242x0.jpg"
                                        lazy="loaded"> &lt;!&ndash;&ndash;&gt;
              <div class="item-status-empty" style="display: none;">
                热卖脱销
              </div>
            </a>
            <div class="item-panel">
              <div class="title clearFix">
                不粘少油烟炒锅(美国华福)
              </div>
              <div class="item-price">
                <div class="price-cont"><span class="act-tag"
                                              style="display: none;"></span> <span
                >￥</span> <span>229</span>&nbsp;
                  <span class="original-price"></span> <span class="promo-lable">积分换购</span>
                </div>
                <div class="item-comment">评论：1256</div>
              </div>
            </div>
            <div></div>
          </div>
        </div>-->
      </div>
    </div>
  </div>
</template>
<script>
  import header from '../header/header.vue'
  export default {
    props:['navLists','goods'],
    data(){
      return {
      }
    },
    computed: {
      currentGood(){
        if(!this.$route.params.id) return
        return this.goods.find(good=>good.id==this.$route.params.id)
      },
      randomWares(){
        if(!this.$route.params.id) return
        let wares = [];
        this.currentGood.products.forEach(product=>{
          product.wares.forEach(ware=>{
            if(ware.sellCount<3600){
              wares.push(ware)
            }
          })
        })
        return wares
      }
    },
    methods: {},
    components:{
      'lf-header':header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .channel-wrap{
    padding-top 96px
    background-color: #f2f2f2;
  }
  h1{
    height: 49px
    font-size 1.9rem
    line-height 49px
    text-align center
  }
  .life-goodsUl {
    background: #fff;
  }
  .life-child-thank li {
    float: left
    width: 25%;
    margin: 1rem 0;
    text-align center
  }
  .life-goodsUl li a {
    display: block;
  }
  .life-goodsUl li a img {
    width: 80%;
    margin: auto;
  }
  .wrap-shelf {
    margin: -4rem auto 2rem;
    padding: 4rem 0 0;
  }
  .subcat-title {
    max-width: 96%;
    text-align: center;
    font-size: 1.9em;
    color: #000;
    line-height: 2.5em;
    margin: 0 auto -1.2em;
  }
  .shelf-item {
    width: 96%;
    border: 1px solid #ddd;
    margin: 2rem auto 0;
  }
  .shelf-item .item-pic-bx {
    width: 100%;
    overflow: hidden;
    display: block;
    position: relative;
  }
  .shelf-item .item-pic {
    width: 100%;
    display: block;
    vertical-align: top;
    margin: 0 auto;
    position: static;
  }
  .item-status-empty {
    width: 7rem;
    height: 7rem;
    background-color: rgba(0,0,0,.6);
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    font-size: 1.5em;
    color: #fff;
    line-height: 7rem;
    font-weight: 700;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -4rem;
    margin-left: -3.5rem;
  }
  .shelf-item .item-panel {
    width: 100%;
    background: #fff;
    color: #333;
    padding-bottom: .3rem;
  }
  .shelf-item .item-panel, .shelf-item .profile {
    overflow: hidden;
    font-size: 1.35rem;
    line-height: 2.6rem;
  }
  .shelf-item .item-panel .item-price, .shelf-item .item-panel .title {
    width: 94%;
    overflow: hidden;
    margin: 0 auto;
  }
  .shelf-item .item-panel .title {
    text-align: left;
    font-size: 1.35rem;
    color: #333;
    line-height: 2.6rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-top: .5rem;
  }
  .shelf-item .item-panel .item-price, .shelf-item .item-panel .title {
    width: 94%;
    overflow: hidden;
    margin: 0 auto;
  }
  .shelf-item .item-panel .price-cont {
    min-width: 68%;
    overflow: hidden;
    float: left;
    line-height: 1.8rem;
    margin-top: .2rem;
  }
  .shelf-item .item-panel .act-tag {
    background-color: #fff000;
  }
  .shelf-item .item-panel .act-tag, .shelf-item .item-panel .act-tag-red, .shelf-item .item-panel .promo-lable {
    display: inline-block;
    background-color: #c00;
    padding: 1px 3px;
  }
  .shelf-item .item-panel .item-comment {
    float: right;
    text-align: right;
    color: #999;
  }
  .wrap-shelf-navs {
    width: 100%;
    z-index: 10;
    display: none;
    height: 3rem;
  }
  element.style {
    width: 100%;
    z-index: 105;
    position: relative;
    top: 0px;
  }
  .life-sort {
    padding: .4rem 2%;
    background: #fff;
    border-bottom: 1px solid #f2f2f2;
  }
  .life-sort.has-filter li {
    width: 25%;
  }
  .life-sort li {
    float: left;
    width: 33.33333%;
    height: 3rem;
    line-height: 3rem;
  }
  .life-sort li a {
    display: block;
    position: relative;
    height: 1.4rem;
    line-height: 1.4rem;
    border-right: 1px solid #f2f2f2;
    text-align: center;
    margin-top: .8rem;
    font-size: 1.35rem;
    color: #666;
  }
  .life-sort li a em {
    padding-right: 12px;
  }
  .life-sort a .filter {
    width: 1rem;
    height: 1rem;
    display: inline-block;
    position: absolute;
    top: .2rem;
    right: .1rem;
    background: url('./images/ico1.png') no-repeat;
    background-position: 0 0;
    background-size: 100%;
  }
</style>