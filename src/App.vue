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
      console.log(88888);
      this.styleN = document.createElement('style');
      if(this.$route.path!='/login'){
        console.log('不是登陆');
        this.width = 375/36;
      }else{
        console.log('登陆');
        this.width = 375/7.5;
        this.isShow=false;
      }
      this.styleN.innerHTML = 'html{font-size: '+this.width +'px !important;}';
      document.head.appendChild(this.styleN);
    },
    updated(){
      if(this.$route.path!='/login'){
        console.log(132);
        this.width = document.documentElement.clientWidth/36;
      }else{
        console.log(456);
        this.width = document.documentElement.clientWidth/7.5;
        this.isShow=false;
      }
      this.styleN.innerHTML = 'html{font-size: '+this.width +'px !important;}';
      document.head.appendChild(this.styleN);
    },
    computed:{},
    methods:{},
    components:{
      'lf-footer':footer,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>

