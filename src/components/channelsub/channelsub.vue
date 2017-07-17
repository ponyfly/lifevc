<template>
  <div class="sub-wrap" v-if="goods.length">
      <header>
        <span class="btn-block" @click="goBack"></span>
        <p>家务</p>
      </header>
      <ul class="life-sort clearFix">
        <li><a>新品</a></li>
        <li><a class="newSellingPrice">畅销</a></li>
        <li><a><em>价格</em> <i></i></a></li>
      </ul>
      <div class="main-body-shelf">
        <div class="wrap-shelf toolsOnly">
          <div class="shelf-item" v-for="ware in newWares">
          <router-link :to="`/item/${ware.id}`" class="item-pic-bx">
            <img class="item-pic" :src="ware.image"> <!---->
            <div class="item-status-empty" v-show="false">热卖脱销</div>
          </router-link>
          <div class="item-panel">
            <div class="title clearFix">{{ware.name}}</div>
            <div class="item-price">
              <div class="price-cont">
                <span class="act-tag" v-show="ware.oldPrice">限时优惠</span>
                <span>￥</span> <span>{{ware.price}}</span>&nbsp;
                <span class="original-price" v-show="ware.oldPrice">￥{{ware.oldPrice}}</span>
                <span class="promo-lable" v-show="ware.newWare">新</span>
              </div>
              <div class="item-comment">评论：{{ware.ratings.length}}</div>
            </div>
          </div>
        </div>
        </div>
      </div>
  </div>
</template>


<script>
  export default {
    props:{
      goods:Array
    },
    data(){
      return {
      }
    },

    computed: {
      //所有商品
      wares(){
        if(!this.$route.params.productId) return
        let good = this.goods.find(good=>good.id == this.$route.params.goodId)
        let product = good.products.find(product=>product.id == this.$route.params.productId)
        return product.wares
      },
      //新品
      newWares(){
        if(!this.$route.params.productId) return
        return this.wares.filter(ware=>ware.newWare)
      },
    },
    methods: {
      goBack(){
        this.$router.back();
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .sub-wrap {
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
    .life-sort {
      padding: .4rem 2%;
      background: #fff;
      border-bottom: 1px solid #f2f2f2;
      position: fixed
      top:4rem
      width:100%
      z-index 8
      li {
        float: left;
        width: 33.33333%;
        height: 3rem;
        line-height: 3rem;
        a {
          display: block;
          position: relative;
          height: 1.4rem;
          line-height: 1.4rem;
          border-right: 1px solid #f2f2f2;
          text-align: center;
          margin-top: .8rem;
          font-size: 1.35rem;
          color: #666;
          i {
            width: 1rem;
            height: 1rem;
            display: inline-block;
            position: relative;
          }
          em {
            padding-right: 12px;
          }
        }
        &:last-child a {
          border-right none
        }
      }
    }
    .main-body-shelf{
      margin-top 8.5rem
      .wrap-shelf {
        width: 100%;
        margin: -7em auto 2em;
        padding: 7em 0 0;
        .shelf-item {
          width: 96%;
          border: 1px solid #ddd;
          margin: 2rem auto 0;
          .item-pic-bx {
            width: 100%;
            overflow: hidden;
            display: block;
            position: relative;
          }
          .item-pic {
            width: 100%;
            display: block;
            vertical-align: top;
            margin: 0 auto;
            position: static;
          }
          .item-panel {
            width: 100%;
            background: #fff;
            color: #333;
            padding-bottom: .3rem;
            .price-cont {
              min-width: 68%;
              overflow: hidden;
              float: left;
              line-height: 1.8rem;
              margin-top: .2rem;
              .promo-lable {
                display: inline-block;
                background-color: #c00;
                padding: 1px 3px;
              }
            }
            .item-comment {
              float: right;
              text-align: right;
              color: #999;
            }
            .original-price{
              color: #ccc
              text-decoration: line-through
            }
          }
        }
      }
      .toolsOnly {
        padding-bottom: 5rem!important;
      }
    }
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
  .shelf-item .item-panel, .shelf-item .profile {
    overflow: hidden;
    font-size: 1.35rem;
    line-height: 2.6rem;
  }
</style>