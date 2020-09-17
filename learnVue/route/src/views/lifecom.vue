<template>
	<div id="app">
	<h1>测试生命周期</h1>
	<h3>{{ msg }}</h3>
	</div>
</template>
<script>
	export default{
		data: function(){
			return {
			msg:'你能看见我吗？'
			}
		},
		beforeCreate(){
			console.log('准备开始跳转');
			console.log(this.msg);
		},
		// created时可以获取组件属性
		created(){
			console.log('组件跳转成功');
			console.log(this.msg)
		},
		beforeMount(){
			console.log('开始挂载组件')
		},
		// mounted时可以选取DOM节点
		mounted(){ 
			console.log('组件挂载完成')
		},
		beforeUpdate(){
			console.log('数据准备更新')
		},
		updated(){
			console.log('数据更新成功')
		},
		beforeDestroy(){
			console.log('准备销毁组件')
		},
		// 销毁了watchers ,child component,event listener
		destroyed(){
			console.log('组件已销毁')
		}
	}
</script>