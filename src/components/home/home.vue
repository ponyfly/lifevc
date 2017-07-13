
<template>
  <div><!---->
    <lf-header :navLists="navLists"></lf-header>
    <homebody :comboImages="comboImages"></homebody>
  </div>
</template>

<script>

  import header from '../header/header.vue'
  import homebody from '../homebody/homebody.vue'
  export default {
    props:['navLists','comboImages'],
    data(){
      return {
        goods:[]
      }
    },
    created(){

    },
    computed: {

    },
    methods: {},
    components:{
      homebody,
      'lf-header':header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
