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
    //子组件定义接收数据类型内容
    // validator(value) --->  校验器(value是形参,实参为父组件传递的数据)
    //null和undefined会通过任何类型验证
    // props:{
    //   user:String,
    //   uList:[]
    // }
    methods:{
      // changeUser为自定义事件名称，参数changeUser为触发组件函数名！！！
      changeUser:function(){
        this.$emit('changeUser','Brthus')
      }
    }
}
</script>

