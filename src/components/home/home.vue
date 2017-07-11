
<template>
  <div><!---->
    <lf-header></lf-header>
    <homebody></homebody>
  </div>
</template>

<script>
  import header from '../header/header.vue'
  import homebody from '../homebody/homebody.vue'
  export default {
    data(){
      return {}
    },
    computed: {},
    methods: {},
    components:{
      homebody,
      'lf-header':header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
