<template>
  <div class="location border-top">
      <div class="location-item border-right">
          <span class="iconfont iconmap">
          </span>
          {{list[0].name}}
      </div>
      <div class="location-item">
          <span class="iconfont icondiqiu-01">
          </span>
          {{list[1].name}}
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    props:['list']
}
</script>

<style lang="less" scoped>
    @w:100%;
    .location{
        width: @w;
        height: 1rem;
        background:#fff;
        display: flex;
        text-align: center;
        position: relative;
        .location-item{
            flex:1;
            font-size: .30rem;
            font-weight:400;
            line-height: 1rem;
        }
    }
</style>