<template>
  <div class="product" v-if="currentWare">
    <header>
      <span class="btn-block" @click="goBack"></span>
      <p>商品介绍</p>
    </header>
    <article class="item-body">
        <div style="height:578px;">
          <!--轮播图-->
          <div class="page-swipe">
              <mt-swipe style="height: 375px;" :auto="2000">
                <mt-swipe-item style="height: 375px; width: 375px;" v-for="(swipeItem, index) in currentWare.swipeImage" :key="index">
                  <img :src="swipeItem" style="width: 100%;">
                </mt-swipe-item>
              </mt-swipe>
          </div>
          <dl id="itemdl" class="item-intro" style="background-color: rgb(255, 255, 255);">
            <dd class="item-price pd05">
              <div class="title">{{currentWare.title}}</div>
              <p class="des">{{currentWare.description}}</p>
              <div class="price-cntr clearfix" style="text-align: center;">
                <em class="icon-money-larger normal-price-color yi">¥</em>
                <em class="price-money-larger normal-price-color er">{{currentWare.attrs[currentSize].price}}</em>
              </div>
              <div class="price">
                <div class="lable-wrap"></div>
              </div> <!---->
            </dd>
            <div id="promosWrap" style="display: none;"></div>
            <dd class="promo-sect pd05" style="display: none;">
              <div class="promo-cont"></div>
            </dd>
            <dd id="promoWrap" style="transform: translateZ(-0.01px)">
              <div class="promo-item" @click="toLogin">
                <div>
                  <span class="tag-promo bgred">优惠</span>
                  <span class="m-txt red">登录查看你的积分和优惠券</span>
                </div>
              </div>
            </dd>
            <dd class="GroupAttrs font-medium  pd05">
              <div class="wrap-spec Warp-Props">
                <table width="100%">
                  <tr>
                    <td>
                      <div class="font-medium attrtitle">{{currentWare.attrTitel}}：</div>
                      <div class="font-small item"
                           v-for="(attr, index) in currentWare.attrs"
                           @click="toggleSize(index)" :class="{selected:index === currentSize}">
                        <span class="spec-txt">{{attr.txt}}</span>
                        <span class="state" v-show="true">正常售卖</span> <i></i>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </dd>
            <dd class="spec-amount pd05 pl-2px">
              <div class="wrap-spec clearFix">
                <span class="num-tt" style="color: rgb(107, 107, 107);">数量：</span>
                <span class="wrap-num clearFix">
                  <button class="des" @click="addOrDes(false)"></button>
                  <span class="ipt-num">{{count}}</span>
                  <button class="inc" @click="addOrDes(true)"></button>
                </span>
              </div>
            </dd>
            <dd class="deliveryPanel pd05 pl-2px">
              <div class="wrap-spec">
                <span class="delivery-tt" style="color: rgb(107, 107, 107); visibility: visible;">送至：</span>
                <div class="deliver-cont">
                  <v-distpicker province="北京市" city="北京市市辖区" area="朝阳区"></v-distpicker>
                  (满￥99免运费)
                  <p class="deliver-promo" style="padding-top: 4px; color: rgb(204, 0, 0);">
                    <span>
                      新会员首单，满69元免运费
                    </span>
                  </p>
                </div>
              </div>
            </dd>
            <dd class="general-info ser-promise">
              <div class="huodongcenter">
                <img src="http://i.lifevccdn.com/upload/combinationchart/8790d2e3fe9b4440afaeff14ca3a2a45.jpg" usemap="#planetmap0">
                <map name="planetmap0" id="planetmap0">
                  <area shape="rect" coords="0,2,375,101">
                </map>
              </div>
              <div class="huodongcenter">
                <img src="http://i.lifevccdn.com/upload/combinationchart/dc678db46c3b45b184a07930bb294647.jpg" usemap="#planetmap1">
                <map name="planetmap1" id="planetmap1">
                  <area shape="rect" coords="0,0,375,190">
                </map>
              </div>
            </dd>
          </dl>
          <div id="selmenu" class="warp-Menus" >
            <div id="Menus">
              <dl>
                <dd><span :class="{focusTab:itemType == 1}" @click="toggleItem(1)">商品介绍</span></dd>
                <dd><span :class="{focusTab:itemType == 2}" @click="toggleItem(2)">规格参数</span></dd>
                <dd><span :class="{focusTab:itemType == 3}" @click="toggleItem(3)">评论({{currentWare.ratings.length}})</span></dd>
              </dl>
            </div>
          </div>
          <div class="item-tab-cont" style="min-height: 599.4px;">
            <div id="detailsItem" class="Detailsdiv" v-show="itemType == 1">
              <div>
                <img src="http://i.lifevccdn.com/upload/AppItemDetails/3189209407c94fc7b65d71dd4abf53ef_d1242x0.jpg" lazy="loaded">
                <div></div>
              </div>
              <div>
                <img src="http://i.lifevccdn.com/upload/AppItemDetails/8e974019bff841069f879729be2b7e8b_d1242x0.jpg" lazy="loaded">
                <div></div>
              </div>
              <div>
                <img src="http://i.lifevccdn.com/upload/AppItemDetails/28b2318f973d41139d1bfd76414501d9_d1242x0.jpg" lazy="loaded">
                <div></div>
              </div>
            </div>
            <div title="规格参数" class="Detailsdiv" v-show="itemType == 2">
              <div class="font-medium Specifications">
                品名：懒人清洁喷水拖把

              </div>
              <div class="font-medium Specifications">
                材质：铁杆+PP配件+涤纶、氨纶拖布

              </div>
              <div class="font-medium Specifications">
                包装方式：PE袋包装

              </div>
              <div class="font-medium Specifications app-red"
                   style="border-top: 0.2rem solid rgb(242, 242, 242);">
                <div style="line-height: 2.5rem;">客户经理提醒:</div>
                <div style="line-height: 2.5rem;">1、清水冲洗，请勿接触带有腐蚀性液体或化学性液体；</div>
                <div style="line-height: 2.5rem;"> 2、瓶子请勿装热水，并勿倒置使用；</div>
                <div style="line-height: 2.5rem;"> 3、避免高温、阳光暴晒；</div>
                <div style="line-height: 2.5rem;">4、勿接近火源、热源；</div>
                <div style="line-height: 2.5rem;">5、远离婴幼儿；</div>
                <div style="line-height: 2.5rem;">6、水瓶内有少量水珠为正常现象，是经防漏水测试留下的，不影响产品使用；</div>
                <div style="line-height: 2.5rem;">7、由于水瓶有出气孔，刚灌满水翻倒过来会滴少许水，属正常现象。</div>
              </div>
            </div>
            <div title="评论" class="Detailsdiv" v-show="itemType == 3">
              <dl>
                <dd class="font-small CommentContent" style="line-height: 2.2rem;" v-for="rating in currentWare.ratings">
                  福建&nbsp;{{rating.username}}&nbsp;
                  <span style="color: silver;">{{rating.memberLevel}}&nbsp;累计购物：{{rating.totalBuys}}</span> <br>
                  <span>{{rating.text}}</span> <br>
                  <span style="color: silver;">{{rating.rateTime | date-formate}}&nbsp;  规格:{{rating.size}}</span>
                </dd>
              </dl>
          </div>
        </div>
       </div>
    </article>
  </div>

</template>

<script type="text/ecmascript-6">

  import {Cell, Swipe, SwipeItem} from 'mint-ui';
  import Distpicker from 'v-distpicker'

  export default {
    props:{
      goods:Array
    },
    data(){
      return {
        itemType:1,
        currentSize:2,
        count:1
      }
    },
    created(){},
    computed:{
      currentWare(){
        if(!this.goods.length) return
        let curWare = null;
        this.goods.forEach(good=>{
          good.products.forEach(product=>{
            curWare = product.wares.find(ware=>{
              return ware.id == this.$route.params.wareId
            })
          })
        })
        return curWare
      }
    },
    methods: {
      goBack(){
        this.$router.back();
      },
      toggleItem(index){
        this.itemType = index
      },
      toggleSize(index){
        this.currentSize = index
      },
      addOrDes(isAdd){
        if(isAdd){
          this.count++
        }else{
          if(this.count==1) return
          this.count--
        }
      },
      toLogin(){
        this.$router.push({path:'/login'})
      }
    },
    components: {
      'mt-swipe': Swipe,
      'mt-swipe-item': SwipeItem,
      'my-cell': Cell,
      'v-distpicker':Distpicker
    },
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .product{
    header {
      height: 4rem
      font-size: 2rem
      color: #fff;
      background-color: #89be48;
      position fixed
      top 0
      width:100%
      z-index 999
      .btn-block {
        height: 4rem
        width: 4rem
        float: left
        &:after {
          content: ''
          display block
          height: 1.5rem
          width: 1.5rem
          margin-left: 1rem;
          margin-top: 1.1rem;
          border-left: 2px solid #fff
          border-top: 2px solid #fff
          transform rotate(-45deg)
        }
      }
      p {
        float: left
        width: 75%
        text-align center
        line-height 4rem
      }
    }
  }
  //内容
  //轮播图
  .page-swipe{
    height: 375px;
    margin-top 4rem
  }

  //内容
  .item-body dd {
    background-color: #fff;
    margin: 0;
    .pd05 {
      padding: 0;
      margin-top: 0;
    }
  }

  .item-body .item-price {
    line-height: 2rem;
    border: 0;
    font-size: 4em;
    padding: 1.4rem 0 1.34rem
    .des {
      text-align: center;
      font-size: 1.5rem;
      color: #999;
      height: 3rem;
      line-height: 3rem;
      margin-top: .14rem;
      background: #eee url(./images/des.png) no-repeat 50%;
      background-size: .28rem .28rem;
    }
    .inc {
      background: #eee url(./images/inc.png) no-repeat 50%;
      background-size: .28rem .28rem;
    }

    .price {
      border: 0;
      padding: 0;
      font-size: .24rem;
      line-height: .24rem;
      color: #c00;
      font-weight: 400;
    }
    .icon-money-larger {
      font-size: 1.3rem;
    }
    .price-money-larger {
      font-size: 1.3rem;
      margin-left: 2px;
    }
    .normal-price-color {
      color: #000;
    }
    .price-cntr {
      font-family: PingFangSC-Regular, Microsoft YaHei, Arial, Verdana, Tahoma, Helvetica, "sans-serif";
      font-size: 0;
      text-align: center;
      height: 1.44rem;
      line-height: 1.44rem;
      margin-top: .6rem;
    }

    .title {
      padding: 0;
      text-align: center;
      font-size: 2.2rem;
      color: #000;
      height: 3.4rem;
      line-height: 3.4rem;
    }


    .lable-wrap {
      text-align: center;
      margin: .02rem auto 0;
    }
  }
  //优惠
  .promo-item {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 0.8rem 0;
    font-size: 18px;
    position: relative;
    width: 100%;
    color :#cd060f;
  }
  .tag-promo.bgred {
    display: inline-block;
    background: #cd060f;
    color: #fff;
    zoom: .5;
    border: 0;
    margin-left:1rem;
  }
  .tag-promo {
    border: 1px solid #c00;
    color: #c00;
    font-size: 24px;
    line-height: normal;
    padding: 0 3px;
    zoom: .46;
  }
  .m-txt {
    font-size: 12px;
    height: .3rem;
    line-height: .3rem;
    padding-left: .14rem;
  }


  //商品详情
  .font-medium {
    font-size: 15px;
    line-height: 2.2rem;
    color: #6b6b6b;
  }
  .item-body dd {
    background-color: #fff;
    margin-left: 5px;
  }
  .item-body .GroupAttrs div.Warp-Props .item.selected {
    border-color: #83b842;
    color: #83b842;
  }
  .GroupAttrs {
    margin-left: .14rem;
    border-top: 1px solid #ddd;
    .wrap-spec {
      margin-top: 0.2rem;
      padding: 0;
      position: relative;
      overflow hidden
      table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
      }
      .item {
        margin: .14rem ;
        box-sizing: border-box;
        padding: 0 .5rem;
        overflow: hidden;
        float: left;
        background-color: #fff;
        border: 1px solid #ccc;
        text-align: center;
        min-width: 15px;
        position: relative;
        -webkit-tap-highlight-color: transparent;
        .state {
          font-size: 12px;
          height: 14px;
          line-height: 16px;
          width: 100%;
          background-color: #ccc ;
          text-align: center;
          color: #fff ;
          position: absolute;
          left: 0;
          bottom: 0;
          display: none;
        }
        i {
          height: 0;
          border-style: solid;
          border-width: 15px 15px 0;
          border-color: transparent #83b842 #83b842 transparent;
          font-size: 0;
          line-height: 0;
          position: absolute;
          right: 0;
          bottom: 0;
          z-index: 9;
          display: none;
          i:after {
            content: "";
            width: 8px;
            height: 4px;
            display: block;
            border-bottom: 1px solid #fff;
            border-left: 1px solid #fff;
            position: absolute;
            left: 6px;
            top: -8px;
          }
        }
        .item.selected {
          border-color: #83b842;
          color: #83b842;
        }
      }
    }

    .attrtitle {
      color: #666;
      font-weight: 400;
      margin-bottom: 0;
      margin-top: 0;
    }
  }
  .item-body .spec-amount .des {
    border-right: 0;
  }
  .item-body .spec-amount button.des {
    background: #eee url(./images/des.png) no-repeat 50%;
    background-size: cover ;
  }
  .item-body .spec-amount .ipt-num {
    width: 2.54rem;
    height: 2.54rem;
    line-height: 2.54rem;
    font-size: 22px;
    box-sizing: border-box;
  }
  .item-body .spec-amount .ipt-num, .item-body .spec-amount button {
    float: left;
    border: 1px solid #ccc;
    text-align: center;
  }
  .item-body .spec-amount button {
    color: #333;
    box-sizing: border-box;
    width: 2.54rem;
    height: 2.54rem;
    line-height: 2.54rem;
  }
  .item-body .spec-amount button.inc {
    background: #eee url(./images/inc.png) no-repeat 50%;
    background-size: cover;
  }
  .wrap-spec{
    .num-tt{
      height: 3.54rem
      line-height 3.54rem
      float: left
      font-size 20px
    }
    .wrap-num{
      float: left
      margin-top 0.5rem
    }
  }
  .delivery-tt{
    font-size 14px
  }
  .deliver-cont{
    line-height: 3.54rem
    font-size 18px
  }
  .warp-Menus {
    width: 100%;
    height: .8rem;
    top: 4rem;
    z-index: 999;
    left: 0;
  }
  #Menus {
    background-color: #fff;
    width: 100%;
    margin: 0 auto;
    border-bottom: .04rem solid #f2f2f2;
  }
  #Menus dl {
    padding: .16rem;
    font-size: 12px;
    text-align: center;
    border: 0;
  }
  #Menus dl dd {
    display: inline-block;
    min-width: 19%;
    text-align: center;
    background-color: #fff;
    font-family: Microsoft YaHei;
    border-radius: 1.3rem;
    cursor: pointer;
    margin: 0 6% 0 0;
    padding-left: 0;
    height: 3.48rem;
    line-height: 3.48rem;
  }
  #Menus dl dd:first-child {
    float: left;
  }
  #Menus dl dd span {
    display: inline-block;
    border-radius: 2rem;
    font-size: 14px;
    padding: 1.04rem 1.2rem;
    line-height: .44rem;
  }
  .focusTab {
    background-color: #89be48;
    color: #fff;
    padding: .2rem 1rem;
    border-radius: .5rem;
  }
  .item-tab-cont{
    margin-top:3rem
  }
</style>
