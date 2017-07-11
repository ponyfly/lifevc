<template>

  <div class="new-product">
    <lf-header></lf-header>
    <h1>我是news</h1>
  </div>
</template>
<script>
  import header from '../header/header.vue'
  export default {
    data(){
      return {}
    },
    computed: {},
    methods: {},
    components:{
      'lf-header':header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .new-product{
    padding-top 96px
  }
  h1{
    height: 5rem
    font-size 3rem
    line-height 5rem
    text-align center
  }
</style>