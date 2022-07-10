<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div id="category">
        <CategoryHeader></CategoryHeader>
        <CategoryMain></CategoryMain>
    </div>
</template>
<script>
	// import {myMoveScroll} from '../assets/js/category.js'
	import CategoryHeader from '../components/CategoryHeader.vue';
	import CategoryMain from '../components/CategoryMain.vue';
	export default{
		components:{
			CategoryHeader,
			CategoryMain
		},
		mounted(){
			// myMoveScroll();
		}

	}
</script>

<style> 
@import '../assets/css/category.css';
</style>