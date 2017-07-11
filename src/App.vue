<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <lf-footer v-if="isShow"></lf-footer>
  </div>
</template>

<script>
  import footer from './components/footer/footer.vue'
  export default {
    data(){
      return {
        width:0,
        isShow:true
      }
    },
    created(){
      this.styleN = document.createElement('style');
      this._initStyle()
    },
    updated(){
      this._initStyle()
    },
    computed:{},
    methods:{
      _initStyle(){
        if(this.$route.path!='/login' && this.$route.path!='/register'){
          this.isShow=true;
          this.width = 375/36;
        }else{
          this.isShow=false;
          this.width = 375/7.5;
        }
        this.styleN.innerHTML = 'html{font-size: '+this.width +'px !important;}';
        document.head.appendChild(this.styleN);
      },
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

