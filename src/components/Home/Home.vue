<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
    <NavIcons></NavIcons>
    <Location :list="locationList"></Location>
    <AdvertBanner :list="advertList" :style="{margin:'10px 0'}"></AdvertBanner>
    <HotList></HotList>
  </div>
</template>

<script>
import HomeHeader from './pages/Header';
import HomeSwiper from './pages/Swiper';
import NavIcons from './pages/NavIcons';
import Location from './pages/Location';
import AdvertBanner from './pages/AdvertBanner';
import HotList from './pages/HotList';
export default {
    components:{
        HomeHeader,
        HomeSwiper,
        NavIcons,
        Location,
        AdvertBanner,
        HotList
    },
    data(){
      return {
        locationList:[
          {
            name:'北京',
            url:'',
          },
          {
            name:'大兴',
            url:''
          }
        ],
        advertList:[
          {
            title:'门票特卖',
            desc:'天天好价1折起',
            src:'static/img/activity1.jpg',
            href:'#'
          },
          {
            title:'暑期大促',
            desc:'领券立减15元',
            src:'static/img/activity2.jpg',
            href:'#'
          }
        ]
      }
    }
}
</script>

<style scoped lang="less">
@w:100%;  
.home{
    background: #ccc;
    height: @w;
  }
</style>  