<template>
  <div id="app">
    <router-view></router-view>
    <NavBottomView/>
  </div>
</template>
<script>
import NavBottomView from "./components/NavBottom.vue";
export default{
  name:'app',
  // components:{
  //   NavBottomView
  // }
  components: {
    NavBottomView
  }
}
</script>
<style>
@import './assets/css/index.css';
</style>

