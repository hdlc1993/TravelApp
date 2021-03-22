<template>
  <div class="ct-swiper">
    <swiper :options="swiperOption" ref="mySwiper" :key="mykey">
      <swiper-slide><img src="static/img/1.png" /></swiper-slide>
      <swiper-slide style="width:100%"><img src="static/img/2.jpg" /></swiper-slide>
      <swiper-slide style="width:100%"><img src="static/img/3.jpg" /></swiper-slide>
      <swiper-slide style="width:100%"><img src="static/img/4.jpg" /></swiper-slide>
      <swiper-slide style="width:100%"><img src="static/img/5.jpg" /></swiper-slide>
      <swiper-slide style="width:100%"><img src="static/img/6.jpg" /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
         
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <!-- //标页码 -->
  </div>
</template>

<script>
export default {
  inject:['reload'],
  data() {
    return {
      mykey:1,
      swiperOption: {
        notNextTick: true,
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mountedGit() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
       
        window.onresize = ()=>{
           setTimeout(()=>{
             this.mykey++;
           },1000);
            console.log(123)
           //2131f11111111xs
        }
    // this.swiper.slideTo(3, 1000, false);
  },
};
</script>

<style scoped lang="less">
.ct-swiper {
  width: 100%;
  height: 2rem;
  background:#ccc;
}
.swiper-slide{
  width:100% !important;
}
.ct-swiper .swiper-container {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #ffffffc2;
  --swiper-navigation-size: .4rem;
  --swiper-pagination-color: #fff;
}
.ct-swiper img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>