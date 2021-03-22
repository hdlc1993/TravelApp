<template>
  <div class="icons-container">
      <!-- 面板icons -->
        <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="(item,index) in getPage" :key="index">
                <div class="icons-item" v-for="(item2,index2) in item" :key="index2">
                    <a :href="item2.href">
                        <!-- i是图标 -->
                        <i :class="`icon_${item2.icon}`"></i>
                        <!-- 标题 -->
                        <p>{{item2.name}}</p>
                    </a>

                </div>
            </swiper-slide>
            <!-- Optional controls -->
            <!--标页码-->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
  </div>
</template>

<script>
export default {
    data(){
        return {
            list:[
                {
                    name:'景点门票',
                    href:'#',
                    icon:'card'
                },
                {
                    name:'必游榜单',
                    href:'#',
                    icon:'top'
                },
                {
                    name:'夏日玩水',
                    href:'#',
                    icon:'sumday'
                },
                {
                    name:'主题乐园',
                    href:'#',
                    icon:'themepark'
                },
                {
                    name:'动植物园',
                    href:'#',
                    icon:'garden'
                },
                {
                    name:'故宫',
                    href:'#',
                    icon:'palace'
                },
                {
                    name:'一日游',
                    href:'#',
                    icon:'daytrips'
                },
                {
                    name:'公园',
                    href:'#',
                    icon:'park'
                },
                {
                    name:'游乐场',
                    href:'#',
                    icon:'playground'
                },
                {
                    name:'全部玩乐',
                    href:'#',
                    icon:'allprograms'
                }
            ],
            swiperOption: {
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true, //允许分页点击跳转
                }
            }
        }
    },
    mounted(){
        console.log(this.getPage);
    },
    computed:{
        getPage(){
            let limit = 8;
            let arr = [];
            for(let i=0;i<Math.ceil(this.list.length/8);i++){
                arr.push(this.list.slice(i*limit,i*limit+8));
            }
            return arr;
        },
        notNextTick(){
            
        }
    }
}
</script>

<style scoped lang="less">
    .icons-container{
        text-align: center;
        height: 3.6rem;
        background:#fff;
        .icons-item{
            height: 1.8rem;
            width: 25%;
            overflow:hidden;
            a{
                display: block;
                width: 100%;
                height: 100%;
                padding-top: 10px;
                i{
                    width: .98rem;
                    height: 1rem;
                    display: block;
                    margin: auto;
                }
                
                p{
                    
                    font-size:.28rem;
                    margin-top: .1rem;
                }
            }
        }
    }
    .swiper-container {
        width: 100%;
        height: 100%;
        background-color: #ffffffc2;
        .swiper-slide{
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
        }
    }
    [class^="icon_"]{
        background: url(/static/img/icons.png) no-repeat;
        background-size: 4.035rem auto;
    }
    .icon_card{   
        background-position: 0 0;
    }
    .icon_top{
        background-position: -50px 0;
    }
    .icon_sumday{
        background-position: -100px 0;
    }
    .icon_themepark{
        background-position: -150px 0;
    }
    .icon_garden{
        background-position: 0 -50px;
    }
    .icon_garden{
        background-position: 0 -50px;
    }
    .icon_palace{
        background-position: -50px -50px;
    }
    .icon_daytrips{
        background-position: -100px -50px;
    }
    .icon_park{
        background-position: -150px -50px;
    }
</style>