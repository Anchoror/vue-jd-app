<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="user_i">
	<MineHeader></MineHeader>
	<MineMain></MineMain>
	</div>
</template>
<script>
	import MineHeader from '../components/MineHeader.vue';
	import MineMain from '../components/MineMain.vue';
	export default{
		components:{
			MineMain,
			MineHeader
		}
	}
</script>
<style>
@import '../assets/css/mine.css';
</style>