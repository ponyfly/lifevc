<template>
  <div>
    <keep-alive>
      <router-view
          :navLists="navLists"
          :comboImages="comboImages"
          :goods="goods"
          :randomWares="randomWares"
          :username="username"
          :updateUsername="updateUsername">
      </router-view>
    </keep-alive>
    <lf-footer v-if="isShow"></lf-footer>
  </div>
</template>

<script>
  import axios from 'axios'
  import footer from './components/footer/footer.vue'
  export default {
    data(){
      return {
        width:0,
        isShow:true,
        lifeInfo:{},
        goods:[],
        username:''
      }
    },
    created(){
      this.styleN = document.createElement('style');
      this._initFooter(this.$route.path)
      this._initStyle()
        //发送请求获取数据
      axios.get('/life/webinfos')
        .then(res=>{
          this.lifeInfo = res.data;
        })
        .catch(err=>{
          console.log('something wrong')
        })
      axios.get('/life/goods')
        .then(res=>{
          this.goods = res.data;
        })
        .catch(err=>{
          console.log('something wrong')
        })
    },
    computed:{
      navLists(){
        if(this.lifeInfo.name){
          return this.lifeInfo.cates.map(cate=>{
            return {
              name:cate.name,
              id:cate.id,
              url:cate.url
            }
          })
        }
      },
      comboImages(){
        if(this.lifeInfo.name){
          return this.lifeInfo.cates.filter(cate=>{
            return cate.comboImage
          })
        }
      },
      randomWares(){
        if(this.goods.length){
          return this.goods.map(good=>{
            return good.products.map(product=>{
              return product.wares.find(ware=>{
                return ware.sellCount>1000
              })
            })
          })
        }
      }
    },
    watch:{
      "$route":{
        handler(){
          document.body.scrollTop = 0;
        },
        deep:true
      },
      "$route.path":{
        handler(newVal){
          this._initFooter(newVal)
        }
      }
    },
    updated(){
      this._initStyle()
    },
    methods:{
      _initFooter(newVal){
        if(
          newVal.indexOf('channelsub')>0 ||
          newVal.indexOf('login')>0 ||
          newVal.indexOf('register')>0 ||
          newVal.indexOf('item')>0
        ){
          this.isShow=false
        }else{
          this.isShow = true
        }
      },
      _initStyle(){
        if(this.$route.path!='/login' && this.$route.path!='/register'){
          this.width = 375/36;
        }else{
          this.width = 375/7.5;
        }
        this.styleN.innerHTML = 'html{font-size: '+this.width +'px !important;}';
        document.head.appendChild(this.styleN);
      },
      updateUsername(username){
        this.username = username
      }
    },
    components:{
      'lf-footer':footer,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  ::-webkit-scrollbar {
    width: 10px;
    height: 4px;
    background-color: #6fa;
  }
</style>

