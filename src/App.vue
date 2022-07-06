<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
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
@import url("./assets/css/base.css");
</style>

