<template>
  <div class="header">
      <div class="header-left">
          <!-- 左边箭头 返回按钮 -->
          <span class="iconfont iconfanhui1"></span>
      </div>
      <div class="header-search">
          <span class="iconfont iconsearch"></span>
          输入城市/景点/黄东亮的demo
      </div>
      <div class="header-right">
          北京
          <span class="iconfont iconjiantouxia"></span>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style scoped lang="less" type="text/less">
    @import '~@/assets/css/var.less';

    .header{
        width: 100%;
        line-height: .88rem;
        background-color: @bgColor;
        color:@textColor;
        font-size:.36rem;
        display: flex;
    }
    .header-left{
        width: .4rem;
        padding:0 .2rem;
        text-align: center;
        font-weight: bold;
    }
    .header-search{
        flex:1;
        background-color: #fff;
        height:.6rem;
        margin:.15rem 0;
        border-radius: .2rem;
        color:gray;
        font-size:.28rem;
        line-height: .6rem;
        padding-left:.2rem;
    }
    .header-right{
        font-size:.28rem;
        padding:0 .2rem;
    }
</style>