<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home">
    <div class="m_layout">
        <!-- 头部区 -->
        <HomeHeader :bannerHeight="bannerHeight"></HomeHeader>

        <!-- 轮播图 -->
        <HomeBanner @sendBannerHeight="getMsg"></HomeBanner>

        <!-- 导航区 -->
        <HomeNav></HomeNav>

        <!-- 商品区 -->
        <HomeMain></HomeMain>
    </div>
  </div>
</template> 
<script>
import HomeHeader from "../components/HomeHeader.vue";
import HomeBanner from "../components/HomeBanner.vue";
import HomeNav from "../components/HomeNav.vue";
import HomeMain from "../components/HomeMain.vue";

// import {bindEvent,scrollPic} from '../assets/js/index.js'  //头部栏和轮播图的js

export default {
  components:{
    HomeHeader,
    HomeBanner,
    HomeNav,
    HomeMain,
  },
  data(){
    return{
      bannerHeight:0
    }
  },
  mounted(){
    // bindEvent()
    // scrollPic()
    // console.log(this.$refs.bannerBox)
  },
  methods:{
    getMsg(height){
      this.bannerHeight = height
      // console.log(this.bannerHeight)
    }
  }
}
</script>

<style>
@import '../assets/css/index.css';
</style>
