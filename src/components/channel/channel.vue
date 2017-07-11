<template>
  <div class="channel-wrap">
    <lf-header></lf-header>

    <h1>我是{{channelName}}</h1>
  </div>
</template>

<script>
  import header from '../header/header.vue'
  import LfHeader from "../header/header";
  export default {
    data(){
      return {
        channels:[
          {id:2859,name:'了解lifeVC'},
          {id:2860,name:'软装'},
          {id:2861,name:'生活'},
          {id:2862,name:'床品'},
          {id:2863,name:'工作和旅行'},
          {id:2864,name:'下厨'},
          {id:2865,name:'家居服'},
          {id:2866,name:'家务'},
        ]
      }
    },
    created(){
      this.channelName=this.channels.find(channel=>channel.id==this.$route.params.id).name
    },
    computed: {
     /* channelName(){
        console.log(123);
        if(!this.$route.params){
          return
        }
        return this.channels.find(channel=>channel.id==this.$route.params.id).name
      }*/
    },
    methods: {},
    components:{
      LfHeader,
      'lf-header':header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .channel-wrap{
    padding-top 96px
  }
  h1{
    height: 5rem
    font-size 3rem
    line-height 5rem
    text-align center
  }
</style>