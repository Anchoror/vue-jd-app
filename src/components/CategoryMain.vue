<template>
	
    <main class="category_content">
        <CategoryLeft></CategoryLeft>
        <CategoryRight></CategoryRight> 
    </main>

</template>
<script>
	import CategoryLeft from '../components/CategoryLeft.vue';
	import CategoryRight from '../components/CategoryRight.vue';
	export default{
		components:{
			CategoryLeft,
			CategoryRight
		}
	}
</script>