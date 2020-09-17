<template>
  <div class="hello">
      <h2>你好{{ user }}、{{ uList.user1 }}、{{ uList.user2 }}、{{ uList.user3  }}</h2>
      <h3>这是HelloWorld组件</h3>
      <button type="button" @click='changeUser'>change User！</button>
  </div>
</template>

<script>
export default {
    props:['user','uList'],
    methods:{
      // changeUser为自定义事件名称，参数changeUser为出发组件函数名！！！
      changeUser:function(){
        this.$emit('changeUser','Brthus')
      }
    }
}
</script>

