<template>
  <div id="shopping" class="shopping">
      <div>
        <header id="shoppingbar" class="header">
          <div class="header-content">
            <span class="btn-back" @click="goBack">
              <label class="leftback-img"></label>
            </span>
            <p class="header-title">购物车</p>
            <label class="editcart" style="display: none;">修改</label>
            <img src="./images/sz.png" class="i-header-set" style="display: none;">
          </div>
          <div class="header-login-wrap">
            <div class="header-login">
              <router-link to="/login" class="btn-login">登录</router-link>
              <span class="login-tip">你可以在登录后同步电脑与手机购物车中的商品</span>
            </div>
          </div>
          <div class="header-exchange-wrap">
            <div class="header-exchange">

              <input type="text" maxlength="15" placeholder="礼品兑换处，请输入兑换码" class="exch-ipt">
              <input type="button" value="兑换" class="exch-btn">
              <!--<a href="javascript:;" id="hideAclick" style="display: none;"></a>-->
            </div>
          </div>
        </header>
      </div>
      <div class="wrap-content wrap-cart-cont  wrap-cart-login">
        <div class="page-loadmore-wrapper">
          <div class="mint-loadmore">
            <div class="mint-loadmore-content" style="transform: translate3d(0px, 0px, 0px);">
              <div class="mint-loadmore-top">
                <span class="mint-loadmore-text">下拉刷新</span>
              </div>
              <div class="wrap-cart-promo" style="display: none;">
                <p class="promo-cont">
                  <a href="javascript:void(0);">
                    <span class="act-tag">积分换购</span>
                    "200积分特价换购"
                    <i class="promo-skip"></i>
                  </a>
                </p>
              </div>
              <div class="wrap-cartgrid"></div>
              <div class="wrap-cart-panel cart-panle-address" style="display: none;">
                <div class="panel-item">
                  <span class="field-tt">送至：</span>
                  <span class="panel-address">上海</span>
                  <div class="sect-freight">
                    <div class="address-promo">
                      <div class="cont">
                        <p style="width: 100%;">上海￥99包邮</p>
                        <p class="tip" style="width: 100%;"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="wrap-cart-panel cart-panle-promo" style="display: none;"></div>
              <div class="wrap-cart-assem" style="display: none;">
                <div class="cart-assem-title life-lh-assemTit">凑单免运费：
                  <a href="#/cart/freeshipping" class="skip-assem">查看凑单商品</a>
                </div>
                <div class="cart-assem-list">
                  <ul style="width: 1060px;">
                    <li>
                      <div class="cart-assem-item">
                        <a href="#/item/6365">
                          <img src="http://i.lifevccdn.com/upload/AppItemExhibit/96d319883f854736a6926131987444e1.jpg">
                        </a>
                        <p class="title">不伤手强力去污杯刷</p>
                        <p class="price">￥9</p>
                      </div>
                    </li>
                    <li>
                      <div class="cart-assem-item">
                        <a href="#/item/9567">
                          <img src="http://i.lifevccdn.com/upload/AppItemExhibit/89556cdd38bb47fa9af68dbbeff97845.jpg">
                        </a>
                        <p class="title">冰箱除异味竹炭盒(2只装)</p>
                        <p class="price">￥15</p>
                      </div>
                    </li>
                    <li>
                      <div class="cart-assem-item">
                        <a href="#/item/14948">
                          <img src="http://i.lifevccdn.com/upload/AppItemExhibit/067314c7b44c4f0b9ef1ae1d226a59be.jpg">
                        </a>
                        <p class="title">厨房防油污贴(3片装)</p>
                        <p class="price">￥15</p>
                      </div>
                    </li>
                    <li>
                      <div class="cart-assem-item">
                        <a href="#/item/9970">
                          <img src="http://i.lifevccdn.com/upload/AppItemExhibit/db9ff53ccd194e7cb820458152d4f99a.jpg">
                        </a>
                        <p class="title">超强吸水干发帽</p>
                        <p class="price">￥15</p>
                      </div>
                    </li>
                    <li>
                      <div class="cart-assem-item">
                        <a href="#/item/15518">
                          <img src="http://i.lifevccdn.com/upload/AppItemExhibit/c07303b3ea7d46a3b99fa40aeed41223.jpg">
                        </a>
                        <p class="title">蒸笼无纺布(30片装)</p>
                        <p class="price">￥9</p>
                      </div>
                    </li>
                    <li>
                      <div class="cart-assem-item">
                        <a href="#/item/7784">
                          <img src="http://i.lifevccdn.com/upload/AppItemExhibit/1d9c5e50c5cb496e89536d16893f9370.jpg">
                        </a>
                        <p class="title">天然铁木加长筷</p>
                        <p class="price">￥9</p>
                      </div>
                    </li>
                    <li>
                      <div class="cart-assem-item">
                        <a href="#/item/15553">
                          <img src="http://i.lifevccdn.com/upload/AppItemExhibit/916bc6c354814abf9b557b00cb0233f8.jpg">
                        </a>
                        <p class="title">水槽沥水置物架</p>
                        <p class="price">￥9</p>
                      </div>
                    </li>
                    <li>
                      <div class="cart-assem-item">
                        <a href="#/item/16427">
                          <img src="http://i.lifevccdn.com/upload/AppItemExhibit/6d256d71b7c148e28a7fb6a5e23af2ae.jpg">
                        </a>
                        <p class="title">懒人清洁扫把(地砖专用)</p>
                        <p class="price">￥19</p>
                      </div>
                    </li>
                    <li>
                      <div class="cart-assem-item"><a href="#/item/18521">
                        <img src="http://i.lifevccdn.com/upload/AppItemExhibit/548dc74af7594b1f8c59633c8d8fb1e2.jpg">
                      </a>
                        <p class="title">无痕简约衣架(5只装)</p>
                        <p class="price">￥9</p>
                      </div>
                    </li>
                    <li>
                      <div class="cart-assem-item">
                        <a href="#/item/21241">
                          <img src="http://i.lifevccdn.com/upload/AppItemExhibit/745d881d8be3426faae541ad43211c58.jpg">
                        </a>
                        <p class="title">抽真空防潮收纳袋（小-2只装）</p>
                        <p class="price">￥10</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cart-panel" v-show="false">
          <ul>
            <li class="check-all">
              <span class="slct"></span>
              <span class="slct-txt">全选</span>
            </li>
            <li class="btn-com disabled">
              <span class="cart-btn-txt">去结算
                <span>(0)</span>
              </span>
            </li>
            <li class="btn-com del disabled" style="display: none;">
              <span class="cart-btn-txt">删除</span>
            </li>
            <li class="cart-count">
              <p>合计：
                <em class="stress">￥0</em>
              </p>
              <p class="misc">商品 ￥0 - 优惠 ￥0</p>
            </li>
          </ul>
        </div>
        <div id="wrap-nodata">
          <div id="carts-img">
            <img src="./images/gwc.png" alt="购物车" style="vertical-align: middle; max-width: 160px;">
          </div>
          <div id="carts-text font-medium"
               style="text-align: center; font-size: calc(1.2rem * 1.33); color: rgb(102, 102, 102); line-height: calc(3rem * 1.33);">
            <p>您的购物车还是空荡荡的</p>
          </div>
          <div id="carts-link font-medium" style="text-align: center;">
            <a href="#/"
               style="border: 1px solid rgb(137, 190, 72); padding: calc(0.5rem * 1.33) calc(1.5rem * 1.33); display: inline-block; border-radius: 6px; font-size: calc(1rem * 1.33); letter-spacing: 1px; margin-top: 2px; color: rgb(137, 190, 72);">赶紧去逛逛</a>
          </div>
          <div class="wrap-cart-assem cart-empty-recom">
            <div class="cart-assem-title">
              <p>小可爱为你精心推荐</p></div>
            <div class="cart-assem-list">
              <ul style="width: 1991px;">
                <li>
                  <div class="cart-assem-item"><a href="#/item/23028">
                    <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg">
                  </a>
                    <p class="title">自粘式缝隙贴(2卷装)</p>
                    <p class="price">￥19</p>
                  </div>
                </li>
                <li>
                  <div class="cart-assem-item">
                    <a href="#/item/19184">
                      <img src="http://i.lifevccdn.com/upload/goods/D1704201923204119_d230x230.jpg">
                    </a>
                    <p class="title">酵素洗衣液(超强洁净)</p>
                    <p class="price">￥29</p>
                  </div>
                </li>
                <li>
                  <div class="cart-assem-item">
                    <a href="#/item/16427">
                      <img src="http://i.lifevccdn.com/upload/goods/D1508271208278864_d230x230.jpg">
                    </a>
                    <p class="title">懒人清洁扫把(地砖专用)</p>
                    <p class="price">￥19</p>
                  </div>
                </li>
                <li>
                  <div class="cart-assem-item">
                    <a href="#/item/25139">
                      <img src="http://i.lifevccdn.com/upload/goods/D1705041713502720_d230x230.jpg">
                    </a>
                    <p class="title">加拿大原生木浆抽纸（12包）</p>
                    <p class="price">￥29</p>
                  </div>
                </li>
                <li>
                  <div class="cart-assem-item">
                    <a href="#/item/24093">
                      <img src="http://i.lifevccdn.com/upload/goods/D1702241415015696_d230x230.jpg">
                    </a>
                    <p class="title">防尘防潮内衣整理盒</p>
                    <p class="price">￥29</p>
                  </div>
                </li>
                <li>
                  <div class="cart-assem-item">
                    <a href="#/item/22830">
                      <img src="http://i.lifevccdn.com/upload/goods/D1611042139369284_d230x230.jpg">
                    </a>
                    <p class="title">活氧除水垢片(6片装)</p>
                    <p class="price">￥9</p>
                  </div>
                </li>
                <li>
                  <div class="cart-assem-item">
                    <a href="#/item/22730">
                      <img src="http://i.lifevccdn.com/upload/goods/D1609272032103963_d230x230.jpg">
                    </a>
                    <p class="title">双锁扣密封保鲜袋</p>
                    <p class="price">￥9</p>
                  </div>
                </li>
                <li>
                  <div class="cart-assem-item">
                    <a href="#/item/24109">
                      <img src="http://i.lifevccdn.com/upload/goods/D1702101330159527_d230x230.jpg">
                    </a>
                    <p class="title">自粘式水槽防水贴(2片装)</p>
                    <p class="price">￥12</p>
                  </div>
                </li>
                <li>
                  <div class="cart-assem-item">
                    <a href="#/item/10292">
                      <img src="http://i.lifevccdn.com/upload/goods/D170615151903237_d230x230.jpg">
                    </a>
                    <p class="title">不粘少油烟炒锅(日本大金)</p>
                    <p class="price">￥139</p>
                  </div>
                </li>
                <li>
                  <div class="cart-assem-item">
                    <a href="#/item/19191">
                      <img src="http://i.lifevccdn.com/upload/goods/D1601121539343815_d230x230.jpg">
                    </a>
                    <p class="title">酵素衣物顽渍净(超强洁净)</p>
                    <p class="price">￥15</p>
                  </div>
                </li>
                <li>
                  <div class="cart-assem-item">
                    <a href="#/item/24712">
                      <img src="http://i.lifevccdn.com/upload/goods/D1706271835501125_d230x230.jpg">
                    </a>
                    <p class="title">夏凉冰丝沙发席</p>
                    <p class="price">￥89</p>
                  </div>
                </li>
                <li>
                  <div class="cart-assem-item">
                    <a href="#/item/24180">
                      <img src="http://i.lifevccdn.com/upload/goods/D1702161807101_d230x230.jpg">
                    </a>
                    <p class="title">大容量防潮除湿桶（可重复使用）</p>
                    <p class="price">￥19</p>
                  </div>
                </li>
                <li>
                  <div class="cart-assem-item">
                    <a href="#/item/25094">
                      <img src="http://i.lifevccdn.com/upload/goods/D1706221637103775_d230x230.jpg">
                    </a>
                    <p class="title">可降解环保垃圾袋（超值3包装）</p>
                    <p class="price">￥19</p>
                  </div>
                </li>
                <li>
                  <div class="cart-assem-item">
                    <a href="#/item/21262">
                      <img src="http://i.lifevccdn.com/upload/goods/D1608221935203840_d230x230.jpg"></a>
                    <p class="title">懒人清洁喷水拖把</p>
                    <p class="price">￥69</p>
                  </div>
                </li>
                <li>
                  <div class="cart-assem-item">
                    <a href="#/item/23994">
                      <img src="http://i.lifevccdn.com/upload/goods/D170505115957481_d230x230.jpg"></a>
                    <p class="title">竹炭超细软毛牙刷（3支装）</p>
                    <p class="price">￥15</p>
                  </div>
                </li>
                <li>
                  <div class="cart-assem-item">
                    <a href="#/item/7784">
                      <img src="http://i.lifevccdn.com/upload/goods/D1309260015599886_d230x230.jpg">
                    </a>
                    <p class="title">天然铁木加长筷</p>
                    <p class="price">￥9</p>
                  </div>
                </li>
                <li>
                  <div class="cart-assem-item">
                    <a href="#/item/20778">
                      <img src="http://i.lifevccdn.com/upload/goods/D1604271802558838_d230x230.jpg">
                    </a>
                    <p class="title">舒适防滑休闲人字拖</p>
                    <p class="price">￥25</p>
                  </div>
                </li>
                <li>
                  <div class="cart-assem-item">
                    <a href="#/item/23965">
                      <img src="http://i.lifevccdn.com/upload/goods/D1705021849548872_d230x230.jpg"></a>
                    <p class="title">天然榉木多用床刷</p>
                    <p class="price">￥19</p>
                  </div>
                </li>
                <li>
                  <div class="cart-assem-item">
                    <a href="#/item/20367">
                      <img src="http://i.lifevccdn.com/upload/goods/D160802104943857_d230x230.jpg">
                    </a>
                    <p class="title">进口埃及长绒棉毛巾</p>
                    <p class="price">￥19</p>
                  </div>
                </li>
                <li>
                  <div class="cart-assem-item">
                    <a href="#/item/25179">
                      <img src="http://i.lifevccdn.com/upload/goods/D1705091633483868_d230x230.gif">
                    </a>
                    <p class="title">除菌湿巾(20片)</p>
                    <p class="price">￥9</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--<div id="GroupAttrDetalis" class="pop-temp-mask group-attr-popup item-body">-->
        <div class="pop-temp pop-spec-wrap"  v-show="false">
          <div class="spec-head">
            <div class="item-pic">
              <img src="http://i.lifevccdn.com/images/h5/bg_placeholder_lifevc.png">
            </div>
            <div class="item-info"></div>
          </div>
          <div class="spec-wrap">
            <dd class="GroupAttrs font-medium  pd05"></dd>
          </div>
          <span class="btn">确定</span>
          <span class="pop-close"></span>
        </div>
      </div>
      <div id="region_container">
        <div class="mint-popup areaDialog mint-popup-bottom" style="display: none;">
          <div class="toolbar">
            <span class="left-button btn-toolbar">取消</span>
            <span class="right-button btn-toolbar">确定</span>
          </div>
        </div>
      </div>
      <div class="mint-actionsheet">
        <ul class="mint-actionsheet-list" style="margin-bottom: 5px;">
          <li class="mint-actionsheet-listitem">删除选中的商品</li>
        </ul>
        <a class="mint-actionsheet-button">取消</a>
      </div>
    </div>
</template>

<script>
  import {Swipe, SwipeItem, Loadmore} from 'mint-ui'
  export default {
    data(){
      return {}
    },
    computed: {},
    methods: {
      loadTop() {
        this.$refs.loadmore.onTopLoaded();
      },
      loadBottom() {
        this.allLoaded = true;// 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded();
      },
      goBack(){
        history.back()
      }
    },
    components:{
      'mt-swipe':Swipe,
      'mt-swipe-item':SwipeItem,
      'mt-loadmore':Loadmore
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  #shoppingbar{
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
      .header-title {
        margin: 0 auto;
        line-height: calc(3rem * 1.33);
        font-size: 2rem;
        text-align: center;
        color: #fff;
        width: 80%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .btn-back {
        width: 10%;
        height: calc(3.8rem * 1.33);
        position: absolute;
        left: 0;
        top: 0;
        label {
          left: 30%;
        }
        .leftback-img {
          width: calc(1rem * 1.33);
          height: calc(2.6rem * 1.33);
          display: block;
          float: left;
          background: url("./images/abc.png") no-repeat;
          position: absolute;
          left: 4%;
          top: calc(.6rem * 1.33);
        }
      }

      .editcart {
        font-size: calc(1.8rem * 1.33);
        color: #fff;
        line-height: calc(4rem * 1.33);
        margin-right: 2%;
        position: absolute;
        right: 2%;
        top: 0;
        z-index: 9;
      }

      .i-header-set {
        width: calc(2.8rem * 1.33);
        right: 13%;
        top: calc(.6rem * 1.33);
      }
    }


    .header-login-wrap {
      width: 100%;
      height: calc(2rem * 1.33);
      background-color: #f0fae6;
      margin: 0;
      padding: calc(.5rem * 1.33) 0 calc(.8rem * 1.33);
      .header-login {
        width: 74%;
        min-height: calc(2.5rem * 1.33);
        display: table;
        overflow: hidden;
        margin: 0 auto;
        padding: 0 0 0 21%;
        position: relative;
        .btn-login {
          width: 18%;
          height: calc(1.9rem * 1.33);
          display: block;
          background: #fff;
          border: 1px solid #8bc146;
          text-align: center;
          font-size: calc(0.9rem * 1.33);
          color: #88c13e;
          line-height: calc(1.9rem * 1.33);
          margin: 0;
          position: absolute;
          left: 0;
          top: calc(0.2rem * 1.33);
        }
        .login-tip {
          width: 100%;
          display: table-cell;
          text-align: left;
          vertical-align: middle;
          font-size: calc(0.9rem * 1.33);
          color: #333;
          line-height: calc(1.2rem * 1.33);
        }
      }
    }

    .header-exchange-wrap {
      width: 100%;
      height: calc(2rem * 1.33);
      background-color: #fff;
      margin: 0;
      padding: calc(.6rem * 1.33) 0 calc(.5rem * 1.33);
      border-bottom: 1px solid #f2f2f2;
      .header-exchange {
        width: 93%;
        height: calc(3rem * 1.33);
        overflow: hidden;
        margin: calc(.1rem * 1.33) auto 0;
        padding: 0;
        position: relative;
        .exch-ipt {
          padding-left: 10px;
          width: 80%;
          height: calc(1.8rem * 1.33);
          line-height: calc(1.8rem * 1.33);
          display: inline-block;
          border-radius: 0;
          border: 1px solid #e7e7e7;
          background: #fff;
          text-align: center;
          font-size: calc(0.4rem * 1.33);
        }
        .exch-btn {
          width: 20%;
          height: calc(1.9rem * 1.33);
          line-height: calc(1.8rem * 1.33);
          display: inline-block;
          border-radius: 0;
          background: #fff;
          text-align: center;
          font-size: calc(0.9rem * 1.33);
          color: #6fbd00;
          letter-spacing: calc(.1rem * 1.33);
          text-indent: calc(.2rem * 1.33);
          position: absolute;
          right: 0;
          top: 0;
          z-index: 3;
          border: 1px solid #6fbd00;
        }
      }
    }
  }


  .wrap-content {
    width: 100%;
    overflow: hidden;
    margin-top: calc(4rem * 1.33);
    margin-bottom: calc(10rem * 1.33);
    margin: 0;
    padding: 0;
    .mint-loadmore {
      overflow: hidden;
      .mint-loadmore-top {
        margin-top: -50px;
        text-align: center;
        height: 50px;
        line-height: 50px;
        .mint-loadmore-text {
          vertical-align: middle;
        }
      }
      .wrap-cart-promo {
        width: 94%;
        overflow: hidden;
        background-color: #fff;
        border-bottom: 1px solid #f2f2f2;
        margin: 0 auto;
        padding: calc(.5rem * 1.33) 3%;
        .promo-cont {
          width: 100%;
          height: calc(1.8rem * 1.33);
          overflow: hidden;
          display: block;
          font-size: calc(1.2rem * 1.33);
          color: #4a4a4a;
          line-height: calc(1.8rem * 1.33);
          text-overflow: ellipsis;
          white-space: nowrap;
          word-break: keep-all;
          -o-text-overflow: ellipsis;
          margin: calc(.6rem * 1.33) 0;
          padding: 0;
        }
      }
      .wrap-cartgrid {
        width: 100%;
        overflow: hidden;
        margin: 0 auto;
      }
      .wrap-cart-panel {
        width: 100%;
        overflow: hidden;
        background-color: #fff;
        .cart-panle-address {
          border-bottom: 1px solid #f2f2f2;
          padding-bottom: 0;
          .panel-item {
            padding-top: calc(1rem * 1.33);
            width: 94%;
            overflow: hidden;
            text-align: left;
            font-size: 1.25rem;
            color: #4a4a4a;
            line-height: calc(2rem * 1.33);
            margin: 0 auto;
            padding: calc(.5rem * 1.33) 0;
            .field-tt {
              display: inline-block;
              float: left;
              line-height: calc(2.4rem * 1.33);
            }
            .panel-address {
              max-width: 21%;
              height: calc(2rem * 1.33);
              overflow: hidden;
              display: inline-block;
              float: left;
              border: 1px solid #cdcdcd;
              text-align: left;
              text-overflow: ellipsis;
              white-space: nowrap;
              word-break: keep-all;
              -o-text-overflow: ellipsis;
              margin-right: 8px;
              padding: 1px 25px 1px 3px;
              position: relative;
            }
            .sect-freight {
              width: 57%;
              overflow: hidden;
              display: block;
              float: left;
              margin-top: -6px;
              .address-promo {
                width: 100%;
                height: 36px;
                overflow: hidden;
                display: table;
                float: left;
                text-align: left;
                font-size: 12px;
                color: #4a4a4a;
                line-height: 18px;
                .cont {
                  height: 36px;
                  display: table-cell;
                  text-align: left;
                  vertical-align: middle;
                  line-height: normal;
                  p {
                    width: 70%;
                    height: 18px;
                    overflow: hidden;
                    display: inline-block;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    word-break: keep-all;
                    -o-text-overflow: ellipsis;
                  }
                  .tip {
                    color: #9b9b9b;
                  }
                }
              }
            }
          }
          .cart-panle-promo {
            border-bottom: 1px solid #f2f2f2;
            padding: .5em 0;
          }
        }
      }
      .wrap-cart-assem {
        float left
        width: 100%;
        min-width: 320px;
        max-width: 640px;
        overflow: hidden;
        background-color: #fff;
        border-bottom: 1px solid #f2f2f2;
        margin: calc(1rem * 1.33) auto 0;
        .cart-assem-title {
          width: 94%;
          overflow: hidden;
          border-bottom: 1px solid #ccc;
          text-align: left;
          font-size: calc(1.6rem * 1.33);
          color: #333;
          line-height: calc(2rem * 1.33);
          margin: 0 auto;
          padding: calc(.8rem * 1.33) 3%;
          .skip-assem {
            display: inline-block;
            float: right;
            text-align: right;
            padding-right: 22px;
            position: relative;
          }
        }
        .cart-assem-list {
          width: 100%;
          max-height: calc(12rem * 1.33);
          overflow-y: hidden;
          overflow-x: scroll;
          margin: 0 auto;
          padding: calc(1.3rem * 1.33) 0;
          ul {
            overflow: hidden;
            width: 100%;
            height: calc(12rem * 1.33);
            li {
              margin: 0 5px;
              width: calc(8rem * 1.33);
              overflow: hidden;
              display: inline-block;
              vertical-align: top;
              text-align: left;
              .cart-assem-item {
                overflow: hidden;
                .title {
                  width: 100%;
                  overflow: hidden;
                  display: block;
                  text-align: left;
                  font-size: calc(1rem * 1.33);
                  color: #333;
                  line-height: calc(2rem * 1.33);
                  font-weight: 400;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  word-break: keep-all;
                  -o-text-overflow: ellipsis;
                }
              }
            }
          }
        }
      }
    }
  }
  .wrap-cart-cont {
    display: block;
    color: #2e2e2e;
    width: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
    padding-bottom: calc(8.5rem * 1.33);
    .mint-loadmore {
      overflow: hidden;
      .mint-loadmore-top {
        margin-top: -50px;
        text-align: center;
        height: 50px;
        line-height: 50px;
        .mint-loadmore-text {
          vertical-align: middle;
        }
      }
      .wrap-cart-promo {
        width: 94%;
        overflow: hidden;
        background-color: #fff;
        border-bottom: 1px solid #f2f2f2;
        margin: 0 auto;
        padding: calc(.5rem * 1.33) 3%;
        .promo-cont {
          width: 100%;
          height: calc(1.8rem * 1.33);
          overflow: hidden;
          display: block;
          font-size: calc(1.2rem * 1.33);
          color: #4a4a4a;
          line-height: calc(1.8rem * 1.33);
          text-overflow: ellipsis;
          white-space: nowrap;
          word-break: keep-all;
          -o-text-overflow: ellipsis;
          margin: calc(.6rem * 1.33) 0;
          padding: 0;
          a {
            display: inline-block;
            color: #4a4a4a;
            text-decoration: none;
            cursor: pointer;
            max-width: 100%;
            overflow: hidden;
            display: inline-block;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-break: keep-all;
            -o-text-overflow: ellipsis;
            margin: 0;
            padding: 0;
          }

          .act-tag {
            display: inline-block;
            background-color: #ab2c2b;
            text-align: center;
            font-size: calc(1.1rem * 1.33);
            color: #fff;
            padding: 0 5px;
            margin-right: 8px;
          }
          .promo-skip{
            width: 0;
            height: 0;
            display: inline-block;
            font-size: 0;
            line-height: 0;
            border-style: solid;
            border-width: 5px 0 5px 6px;
            border-color: transparent #4a4a4a;
            margin-left: 8px;
            position: relative;
            top: 1px;
            color: #4a4a4a;
            text-decoration: none;
            cursor: pointer;
          }
        }

      }
      .wrap-cartgrid {
        width: 100%;
        overflow: hidden;
        margin: 0 auto;
      }
      .wrap-cart-panel {
        width: 100%;
        overflow: hidden;
        background-color: #fff;
        .cart-panle-address {
          border-bottom: 1px solid #f2f2f2;
          padding-bottom: 0;
          .panel-item {
            width: 94%;
            overflow: hidden;
            text-align: left;
            font-size: 1.25rem;
            color: #4a4a4a;
            line-height: calc(2rem * 1.33);
            margin: 0 auto;
            padding: calc(.5rem * 1.33) 0;
            padding-top: calc(1rem * 1.33);
            .field-tt {
              display: inline-block;
              float: left;
              line-height: calc(2.4rem * 1.33);
            }
            .panel-address {
              max-width: 21%;
              height: calc(2rem * 1.33);
              overflow: hidden;
              display: inline-block;
              float: left;
              border: 1px solid #cdcdcd;
              text-align: left;
              text-overflow: ellipsis;
              white-space: nowrap;
              word-break: keep-all;
              -o-text-overflow: ellipsis;
              margin-right: 8px;
              padding: 1px 25px 1px 3px;
              position: relative;
            }
          }
          .wrap-cart-panel {
            width: 100%;
            overflow: hidden;
            background-color: #fff;
          }
        }

      }

      .wrap-cart-assem {
        width: 100%;
        min-width: 320px;
        max-width: 640px;
        overflow: hidden;
        background-color: #fff;
        border-bottom: 1px solid #f2f2f2;
        margin: calc(1rem * 1.33) auto 0;
        .cart-assem-title {
          width: 94%;
          overflow: hidden;
          border-bottom: 1px solid #ccc;
          text-align: left;
          font-size: calc(1.6rem * 1.33);
          color: #333;
          line-height: calc(2rem * 1.33);
          margin: 0 auto;
          padding: calc(.8rem * 1.33) 3%;
          .skip-assem {
            display: inline-block;
            float: right;
            text-align: right;
            padding-right: 22px;
            position: relative;
          }
        }
        .cart-assem-list {
          width: 100%;
          max-height: calc(12rem * 1.33);
          overflow-y: hidden;
          overflow-x: scroll;
          margin: 0 auto;
          padding: calc(1.3rem * 1.33) 0;
          ul {
            overflow: hidden;
            width: 100%;
            height: calc(12rem * 1.33);
            li {
              width: calc(8rem * 1.33);
              overflow: hidden;
              display: inline-block;
              vertical-align: top;
              text-align: left;
              .cart-assem-item {
                width: 80%;
                overflow: hidden;
                margin: 0 auto;
                img {
                  width: 100%;
                  overflow: hidden;
                  display: block;
                }
                .title {
                  width: 100%;
                  overflow: hidden;
                  display: block;
                  text-align: left;
                  font-size: calc(1rem * 1.33);
                  color: #333;
                  line-height: calc(2rem * 1.33);
                  font-weight: 400;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  word-break: keep-all;
                  -o-text-overflow: ellipsis;
                }
              }
            }
          }
        }

      }
    }

    .cart-panel {
      width: 100%;
      height: calc(4rem * 1.33);
      background: #fff;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #f6f6f6;
      color: gray;
      position: fixed;
      left: 0;
      bottom: calc(4.5rem * 1.33);
      z-index: 999;
      .check-all {
        margin: 13px 0 0 12px;
        float: left;
        .selectwrap {
          overflow: hidden;
          line-height: 20px;
          cursor: pointer;
          display: inline-block;
          float: left;
          .slct {
            width: 19px;
            height: 19px;
            background-color: #fff;
            border: 1px solid #9b9b9b;
            border-radius: 50%;
            position: relative;
            display: inline-block;
            float: left;
          }
          .slct-txt {
            text-align: left;
            font-size: 1.35rem;
            color: #4a4a4a;
            padding-left: calc(.6rem * 1.33);
          }
        }
        .btn-com {
          width: 30%;
          height: 100%;
          float: right;
          background-color: #8ec351;
          border: 0;
          border-bottom: 1px solid #8ec351;
          border-top: 1px solid #8ec351;
          border-radius: 0;
          text-align: center;
          font-size: calc(1.7rem * 1.33);
          color: #fff;
          line-height: calc(4rem * 1.33);
          letter-spacing: 2px;
          text-indent: 2px;
          position: absolute;
          right: 0;
          top: -1px;
          .cart-btn-txt {
            height: 100%;
            display: inline-block;
            line-height: calc(4rem * 1.33);
            color: #fff!important;
            opacity: .6;
            span {
              font-size: calc(1.4rem * 1.33);
              letter-spacing: 0;
            }
          }
        }
        .cart-count {
          width: 45%;
          height: calc(4rem * 1.33);
          overflow: hidden;
          float: right;
          text-align: right;
          font-size: 1.55rem;
          color: #4a4a4a;
          line-height: calc(2rem * 1.33);
          margin: 0;
          padding-right: 32%;
          p {
            padding: calc(.2rem * 1.33) 0 calc(.1rem * 1.33);
            font-size: calc(1.5rem * 1.33);
            .stress {
              color: #ab2c2b;
            }
          }
          .misc {
            font-size: calc(1.2rem * 1.33);
            line-height: calc(1.2rem * 1.33);
            padding: 0;
          }
        }
      }
    }

    #wrap-nodata {
      background-color: lightcyan;
      margin: calc(10rem * 1.33) auto;
      margin-bottom 0
      #carts-img {
        margin: 0 auto;
        text-align: center;
        padding-left: calc(2rem * 1.33);
        padding-top: 10px;
        box-sizing: border-box;
      }
      .carts-link a{
        border: 1px solid rgb(137, 190, 72);
        padding: calc(0.5rem * 1.33) calc(1.5rem * 1.33);
        display: inline-block;
        border-radius: 6px;
        font-size: calc(1.5rem * 1.33);
        letter-spacing: 1px;
        margin-top: 6px;
        color: rgb(137, 190, 72);
      }

      .wrap-cart-assem {
        width: 100%;
        min-width: 320px;
        max-width: 640px;
        overflow: hidden;
        background-color: #fff;
        border-bottom: 1px solid #f2f2f2;
        margin: calc(1rem * 1.33) auto 0;
        .cart-empty-recom {
          position: fixed;
          bottom: calc(4rem * 1.33);
          .cart-assem-title {
            width: 94%;
            overflow: hidden;
            border-bottom: 1px solid #ccc;
            text-align: left;
            font-size: calc(1.6rem * 1.33);
            color: #333;
            line-height: calc(2rem * 1.33);
            margin: 0 auto;
            padding: calc(.8rem * 1.33) 3%;
            p {
              line-height: 1.5em;
            }
          }
          .cart-assem-list {
            width: 100%;
            max-height: calc(12rem * 1.33);
            overflow-y: hidden;
            overflow-x: scroll;
            margin: 0 auto;
            padding: calc(1.3rem * 1.33) 0;
            ul {
              overflow: hidden;
              width: 100%;
              height: calc(12rem * 1.33);
              li {
                width: calc(8rem * 1.33);
                overflow: hidden;
                display: inline-block;
                vertical-align: top;
                text-align: left;
                .cart-assem-item{
                  width: 100%;
                  margin: 0;
                  overflow: hidden;
                  img {
                    width: 100%;
                    overflow: hidden;
                    display: block;
                  }
                  .title {
                    width: 100%;
                    overflow: hidden;
                    display: block;
                    text-align: left;
                    font-size: calc(1rem * 1.33);
                    color: #333;
                    line-height: calc(2rem * 1.33);
                    font-weight: 400;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    word-break: keep-all;
                    -o-text-overflow: ellipsis;
                  }
                }
              }
            }
          }
        }
      }
    }

    .pop-temp-mask {
      width: 100%;
      overflow: hidden;
      left: 0;
      bottom: 0;
      height: 100%;
      background: rgba(95,95,95,.75);
      position: fixed;
      z-index: 2000;
      .pop-temp {
        height: auto;
        background-color: #fff;
        position: absolute;
        width: 100%;
        overflow: hidden;
        left: 0;
        bottom: 0;
        .spec-head {
          width: 93%;
          overflow: hidden;
          border-bottom: 1px solid #f2f2f2;
          margin: 0 auto;
          padding: 15px 3.5%;
          .item-pic {
            width: 75px;
            height: 75px;
            overflow: hidden;
            float: left;
            position: relative;
            z-index: 5;
            img {
              width: 75px;
              height: 75px;
              overflow: hidden;
              display: block;
            }
          }
          .item-info {
            overflow: hidden;
            text-align: left;
            font-size: 14px;
            color: #4a4a4a;
            line-height: 18px;
            margin: 0 40px 0 90px;
            float: none;
            width: auto!important;
          }
        }
        .spec-wrap {
          width: 93%;
          max-height: 280px;
          overflow: hidden;
          overflow-y: auto;
          font-size: 14px;
          color: #4a4a4a;
          line-height: 18px;
          margin: 0 auto;
          padding: 5px 3.5%;
        }
        .btn {
          width: 93%;
          height: 30px;
          overflow: hidden;
          display: block;
          background-color: #8ec351;
          border: 1px solid #8ec351;
          border-radius: 4px;
          text-align: center;
          font-size: 16px;
          color: #fff;
          line-height: 30px;
          letter-spacing: 2px;
          text-indent: 2px;
          margin: 10px auto 20px;
          padding: 6px 0;
        }
        .pop-close {
          width: 30px;
          height: 30px;
          overflow: hidden;
          display: block;
          right: 10px;
          top: 12px;
          z-index: 9;
          background-color: #fff;
          position: absolute;
        }
      }
    }
    .mint-popup {
      position: fixed;
      background: #fff;
      .mint-popup-bottom {
        top: auto;
        right: auto;
        bottom: 0;
        left: 50%;
        -webkit-transform: translate3d(-50%,0,0);
        transform: translate3d(-50%,0,0);
        .areaDialog {
          z-index: 3001!important;
          width: 100%;
          .toolbar {
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #dcdcdc;
          }
          .left-button {
            float: left;
            padding-left: 36px;
          }
          .right-button {
            float: right;
            padding-right: 36px;
          }
          .btn-toolbar {
            font-size: 16px;
            color: #26a2ff;
          }
        }
      }
    }

    .mint-actionsheet {
      position: fixed;
      background: #e0e0e0;
      width: 100%;
      text-align: center;
      bottom: 0;
      left: 50%;
      backface-visibility: hidden;
      .mint-actionsheet-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .mint-actionsheet-button{
        display: block;
        width: 100%;
        height: 45px;
        line-height: 45px;
        font-size: 18px;
        color: #333;
        background-color: #fff;
      }

    }
  }
  .wrap-cart-assem.cart-empty-recom {
    position: fixed;
    bottom: 4rem;
  }

  .wrap-cart-assem {
    width: 100%;
    min-width: 320px;
    max-width: 640px;
    overflow: hidden;
    background-color: #fff;
    border-bottom: 1px solid #f2f2f2;
    margin: 1rem auto 0;
  }
  .wrap-cart-assem .cart-assem-title {
    width: 94%;
    overflow: hidden;
    border-bottom: 1px solid #ccc;
    text-align: left;
    font-size: 1.6rem;
    color: #333;
    line-height: 2rem;
    margin: 0 auto;
    padding: .8rem 3%;
  }
  p {
    line-height: 1.5em;
  }
  .wrap-cart-assem .cart-assem-list {
    width: 100%;
    max-height: 12rem;
    overflow-y: hidden;
    overflow-x: scroll;
    margin: 0 auto;
    padding: 1.3rem 0;
  }
  .wrap-cart-assem .cart-assem-list ul {
    overflow: hidden;
    width: 100%;
    height: 12rem;
    margin-left 3px
  }
  .wrap-cart-assem .cart-assem-list li[data-v-5cc9f28f] {
    margin: 0 5px;
  }
  .wrap-cart-assem .cart-assem-list li {
    width: 8rem;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    text-align: left;
  }
  .wrap-cart-assem .cart-assem-list .cart-assem-item[data-v-5cc9f28f] {
    width: 100%;
    margin: 0;
  }
  .wrap-cart-assem .cart-assem-list .cart-assem-item .price, .wrap-cart-assem .cart-assem-list .cart-assem-item .title {
    width: 100%;
    overflow: hidden;
    display: block;
    text-align: left;
    font-size: 1rem;
    color: #333;
    line-height: 2rem;
    font-weight: 400;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: keep-all;
    -o-text-overflow: ellipsis;
  }

</style>