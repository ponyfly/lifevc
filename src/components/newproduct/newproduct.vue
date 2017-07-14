<template>
  <div class="new-product">
    <lf-header :navLists="navLists"></lf-header>
    <div class="wrap-shelf" style="margin-bottom: 80px" v-if="newWares">
      <div class="subcat-title">最近一周新品</div>
      <div class="shelf-item" v-for="ware in newWares">
        <a class="item-pic-bx">
          <img class="item-pic" :src="ware.image">
          <!---->
          <div class="item-status-empty" v-show="false">热卖脱销</div>
        </a>
        <div class="item-panel">
          <div class="title clearFix">{{ware.name}}</div>
          <div class="item-price">
            <div class="price-cont">
              <span class="act-tag" style="display: none;"></span>
              <span>￥</span> <span>{{ware.price}}</span>&nbsp;
              <span class="original-price" v-show="ware.oldPrice">￥{{ware.oldPrice}}</span>
              <span class="promo-lable" v-show="ware.newWare">新</span>
            </div>
            <div class="item-comment">评论：{{ware.ratings.length}}</div>
          </div>
        </div>
        <div>
        </div>
      </div>
      <!---->
    </div><!---->
  </div>
</template>
<script>
  import header from '../header/header.vue'
  export default {
    props: ['navLists', 'goods'],
    data(){
      return {}
    },
    computed: {
      newWares(){
        let newWares = []
        this.goods.forEach(good=>{
          good.products.forEach(product=>{
            product.wares.forEach(ware=>{
              if(ware.newWare){
                newWares.push(ware)
              }
            })
          })
        })
        return newWares
      }
    },
    methods: {},
    components: {
      'lf-header': header,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .new-product {
    padding-top 96px
    background-color: #f2f2f2
    margin-bottom: 55px;
  }

  .subcat-title {
    max-width: 96%;
    text-align: center;
    font-size: 1.9em;
    color: #000;
    line-height: 2em;
    margin: 0 auto -1.2em;
  }

  .wrap-shelf {
    width: 100%;
    margin: -7em auto 2em;
    padding: 7em 0 0;
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
    background-color: rgba(0, 0, 0, .6);
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

  element.style {
    display: none;
  }

  .shelf-item .item-panel .act-tag {
    background-color: #fff000;
  }

  .shelf-item .item-panel .act-tag, .shelf-item .item-panel .act-tag-red, .shelf-item .item-panel .promo-lable {
    display: inline-block;
    background-color: #c00;
    padding: 1px 3px;
  }

  .shelf-item .item-panel .original-price {
    color: #ccc;
    text-decoration: line-through;
  }

  .shelf-item .item-panel .act-tag-red, .shelf-item .item-panel .promo-lable {
    background-color: #c00;
    color: #fff;
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
</style>