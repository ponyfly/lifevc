<template>
  <div>
    <header id="topbar" class="header">
      <div class="header-content"> <!---->
        <p class="header-title">全部产品</p>
      </div>
      <div id="wrap" class="search-panel">
        <mt-search
            cancel-text="取消"
            placeholder="搜索商品">
        </mt-search>
      </div>
    </header>
      <div id="content-wrap">
        <div class="life-module">
          <div class="life-goodsAll">
            <div class="life-goodsBox"><!---->
              <div class="life-goodsTip">
                <dl class="life-goodsMark">家务</dl> <!----></div>
              <ul class="life-goodsUl clearFix onlyStyle">
                <li style="height: 138px;"><img
                    src="http://i.lifevccdn.com/upload/AppIndexIcon/54079a754099447281e284d45a5c078b.jpg"
                    lazy="loaded">
                  <dl>家务工具</dl>
                </li>
                <li style="height: 138px;"><img
                    src="http://i.lifevccdn.com/upload/AppIndexIcon/04597da396224b39a5184c7b031c507d.jpg" lazy="loaded">
                  <dl>家庭清洁剂</dl>
                </li>
                <li style="height: 138px;"><img
                    src="http://i.lifevccdn.com/upload/AppIndexIcon/f14c5afd18a74be197bbef999e58387e.jpg"
                    lazy="loaded">
                  <dl>防霉除菌</dl>
                </li>
                <li style="height: 138px;"><img
                    src="http://i.lifevccdn.com/upload/AppIndexIcon/4f4dc02735f74e568d7adbe6ac1522f2.jpg"
                    lazy="loaded">
                  <dl>百纳箱</dl>
                </li>
                <li style="height: 138px;"><img
                    src="http://i.lifevccdn.com/upload/AppIndexIcon/33daaf6cfaa345e8a475ce8ea932a393.jpg"
                    lazy="loaded">
                  <dl>衣物收纳</dl>
                </li>
                <li style="height: 138px;"><img
                    src="http://i.lifevccdn.com/upload/AppIndexIcon/9bbb1b97d5c04460a76fde006f08c6ea.jpg"
                    lazy="loaded">
                  <dl>酵素洗衣液</dl>
                </li>
                <li style="height: 138px;"><img
                    src="http://i.lifevccdn.com/upload/AppIndexIcon/4a8a241b4f7041b2b6bd9bfa1d24a87c.jpg"
                    lazy="loaded">
                  <dl>魔力挂钩</dl>
                </li>
                <li style="height: 138px;"><img
                    src="http://i.lifevccdn.com/upload/AppIndexIcon/6f88e8a13af944019d6b8cee8c723b7e.jpg"
                    lazy="loaded">
                  <dl>生活必备</dl>
                </li>
                <li style="height: 138px;"><img
                    src="http://i.lifevccdn.com/upload/AppIndexIcon/eef70d4649914a2c9323e16c9907d62d.jpg"
                    lazy="loaded">
                  <dl>地毯地垫</dl>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="life-module">
          <div class="life-goodsAll">
            <div class="life-goodsBox"><!---->
              <div class="life-goodsTip">
                <dl class="life-goodsMark">搬家</dl> <!----></div>
              <ul class="life-goodsUl clearFix onlyStyle">
                <li style="height: 138px;"><img
                    src="http://i.lifevccdn.com/upload/AppIndexIcon/54079a754099447281e284d45a5c078b.jpg"
                    lazy="loaded">
                  <dl>家务工具</dl>
                </li>
                <li style="height: 138px;"><img
                    src="http://i.lifevccdn.com/upload/AppIndexIcon/04597da396224b39a5184c7b031c507d.jpg" lazy="loaded">
                  <dl>家庭清洁剂</dl>
                </li>
                <li style="height: 138px;"><img
                    src="http://i.lifevccdn.com/upload/AppIndexIcon/f14c5afd18a74be197bbef999e58387e.jpg"
                    lazy="loaded">
                  <dl>防霉除菌</dl>
                </li>
                <li style="height: 138px;"><img
                    src="http://i.lifevccdn.com/upload/AppIndexIcon/4f4dc02735f74e568d7adbe6ac1522f2.jpg"
                    lazy="loaded">
                  <dl>百纳箱</dl>
                </li>
                <li style="height: 138px;"><img
                    src="http://i.lifevccdn.com/upload/AppIndexIcon/33daaf6cfaa345e8a475ce8ea932a393.jpg"
                    lazy="loaded">
                  <dl>衣物收纳</dl>
                </li>
                <li style="height: 138px;"><img
                    src="http://i.lifevccdn.com/upload/AppIndexIcon/9bbb1b97d5c04460a76fde006f08c6ea.jpg"
                    lazy="loaded">
                  <dl>酵素洗衣液</dl>
                </li>
                <li style="height: 138px;"><img
                    src="http://i.lifevccdn.com/upload/AppIndexIcon/4a8a241b4f7041b2b6bd9bfa1d24a87c.jpg"
                    lazy="loaded">
                  <dl>魔力挂钩</dl>
                </li>
                <li style="height: 138px;"><img
                    src="http://i.lifevccdn.com/upload/AppIndexIcon/6f88e8a13af944019d6b8cee8c723b7e.jpg"
                    lazy="loaded">
                  <dl>生活必备</dl>
                </li>
                <li style="height: 138px;"><img
                    src="http://i.lifevccdn.com/upload/AppIndexIcon/eef70d4649914a2c9323e16c9907d62d.jpg"
                    lazy="loaded">
                  <dl>地毯地垫</dl>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import {Search} from 'mint-ui'
  export default {
    data(){
      return {

      }
    },
    methods: {

    },
    components:{
      'mt-search':Search
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #content-wrap{
    margin-top 8rem
  }
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

  .search-panel {
    background-color: #f2f2f2;
    padding: .5rem 0;
  }

  #search-bar {
    width: 94%;
    height: 3rem;
    overflow: hidden;
    border-radius: 6px;
    margin: 0 auto;
    padding: 0;
    position: relative;
  }

  .search-panel .searchfouce, .search-panel .searchinput {
    width: 100%;
    height: 3rem;
    background-color: #fff;
    background-image: url('./images/search_ico.png');
    background-repeat: no-repeat;
    background-position: 38% .5rem;
    background-size: auto 70%;
    border: 0;
    border-radius: 6px;
    text-align: center;
    font-size: 1.6em;
    color: #1f5350;
    font-family: Microsoft YaHei;
    margin: 0;
    padding-left: 3rem;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
  }

  .search-panel .sch-cancel {
    width: 15%;
    height: 3rem;
    display: block;
    float: right;
    background: none;
    background-color: transparent;
    border: 0;
    text-align: right;
    font-size: 1.5rem;
    color: #83b842;
    line-height: 3rem;
    outline:none
  }
//search
  .mint-search{
    height:100%
  }
  .mint-searchbar{
    background-color: transparent;
  }
  .mint-searchbar-inner{
    border-radius 6px
  }
  .mint-searchbar-inner .mintui-search{
    position: absolute;
    left: 135px;
    font-size: 20px;
    top: 16px;
  }
  .mint-searchbar-core{
    text-align center
    font-size: 16px;
    padding-left: 22px
  }
  .mint-searchbar-cancel{
    width: 10%;
    text-align: center;
    font-size: 1.5rem;
    color: #83b842;
    line-height: 3rem;
  }



  ::-webkit-scrollbar{
    width:4px
    background-color: #fff;
  }
  .changeStyle {
    width: 88% !important;
    background-position: .4rem .5rem !important;
    text-align: left !important;
  }

  .life-module{
    overflow: hidden;
    background-color: #f2f2f2;
  }
  .life-goodsAll .life-goodsBox {
    margin-top: 2rem;
  }
  .life-goodsTip {
    width: 10rem;
    margin: auto;
    text-align: center;
  }
  .life-goodsTip dl:last-child {
    line-height: 2.4rem;
  }
  .life-goodsTip .life-goodsMark {
    font-size: 1.8rem;
    letter-spacing: .2rem;
    position: relative;
  }
  .life-goodsTip dl {
    height: 3rem;
    line-height: 3rem;
    font-size: 1.4rem;
  }
  .life-goodsUl {
    background: #fff;
  }
  .onlyStyle li {
    float: left;
    width: 33%;
    text-align: center;
    border: 1px solid #f1f1f1;
    margin: 0 0 -1px -1px;
  }
  .life-goodsUl li {
    float: left;
    width: 33%;
    text-align: center;
  }
  .onlyStyle li img {
    width: 60%!important;
    margin: auto;
    padding-top: 1rem;
  }
  .onlyStyle li dl {
    height: 2rem;
    line-height: 2rem;
    padding-bottom: 1rem;
    padding-top: .5rem;
    font-size: 1.3rem;
  }

  .mint-searchbar-core:focus {
    text-align: left;
    padding-left: 30px;
  }
  .mint-searchbar-inner .mintui-search{
    left: 20px;
    top: 18px;
  }
</style>