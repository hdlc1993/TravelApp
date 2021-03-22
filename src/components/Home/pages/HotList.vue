<template>
  <section class="hot-banner">
      <div class="hot-head">
          <span class="iconfont iconicon-test"></span>
          <h2>本周热门榜单</h2>
          <a class="hot-more" href="#">全部榜单&nbsp;>&nbsp;</a>
      </div>
      <div class="hot-list">
          <div class="hot-item" v-for="(item,index) in hotList" :key="index">
              <img :src="item.src" alt="">
              <p>{{item.name}}</p>
              <p>
                  <span class="hot-mark">
                      ￥{{item.mark}}
                  </span>起
              </p>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    data(){
        return {
            hotList:[
                {
                    name:'故宫',
                    src:'static/img/hot1.jpg',
                    href:'#',
                    id:'1',
                    mark:'20',
                }
            ]
        }
    }
}
</script>

<style  lang="less" scoped>
@w:100%;
    .hot-banner{
        width: @w;
        background:#fff;
        .hot-head{
            line-height: .6rem;
            padding:0 10px;
            h2{
                display: inline-block;
                
                font-weight: normal;
                font-size: .3rem;
            }
            .iconicon-test{
                color:orangered;
                font-size: .3rem;
            }
            .hot-more{
                
                font-size: .25rem;
                float:right;
            }
        }

        .hot-list{
            
            color:orangered;
            font-weight:bold;
            .hot-mark{
            }
        }
    }
</style>