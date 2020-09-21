<template>
  <div class="home">
   <h1 class="h1">BUTTON</h1>
   <Button>Button</Button>
   <Button type="primary">主要按钮</Button>
   <Button type="info">信息按钮</Button>
   <Button type="default">默认按钮</Button>
   <Button type="warning">警告按钮</Button>
   <Button type="danger">危险按钮</Button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {getUserData} from '@/api/data'
import { Button } from 'vant';

export default {
  name: 'Home',
  components: {
    Button
  },
  //组件挂载成功后同步执行操作
 async mounted(){
  	let result = await getUserData();
    // 同时处理多个数据时的异步处理方式
    // 1、((async () =>{
    //   let result = await getUserData();
    // })())
    // 2、getUserData().then((res)=>{
    //   console.log(res)
    // })
  }
}
</script>
<style>
	.h1{
		width:3.75rem;
		height:1rem;
		background:skyblue;
		font-size:0.5rem;
		line-height:1rem;
	}
</style>