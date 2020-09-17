<template>
	<h1>该页面动态路由id为：{{ $route.params.id }}</h1>
	<!-- $route存储路由信息相关内容 -->
	<!-- $router用于处理页面跳转 -->
</template>
<script>
	export default{
		mounted(){
			console.log(this)
		}//生命周期函数
	}
</script>