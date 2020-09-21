<!-- 视图模板 -->
<template>
  <div id="app">
      <h1>{{ msg }}</h1>
      <h1>{{ reverseMsg }}</h1>
      <hr>
       <!-- 绑定属性：完整写法为 v-bind -->
      <h1 :style='styleObj'>点击次数：{{ num }}</h1>       
      <!-- 监听事件@  完整写法v-on    -->
      <button type="button" @click='addNum()'>On</button>
      <hr>
      <!-- 绑定表单输入 -->
      <input v-model='username' type="text" placeholder="请输入用户名">
      <span>用户名：{{ username }}</span>
      <input v-model='check' type="checkbox"><span>选项状态：{{ check }}</span>
      <div>
        <textarea v-model='reaText' cols='5' rows='5'></textarea>
      </div>
      <h1>{{ reaText }}</h1>
      <hr> 
  </div>
</template>
<!-- 数据逻辑层 -->
<script>
// 导入模板

// 定义模板
export default {
  name: 'App',
  data: function(){
    {
    return {
      msg:'Hello Vue',
      num:0,
      styleObj:{},
      username:'',
      check:'',
      reaText:''
    }
  }
  },
  //  定义计算属性
  computed:{
    reverseMsg:function(){
      return this.msg.split('').reverse().join('')
    }
  },
  methods:{
    addNum:function() {
        this.num++
    }
  },
  watch:{
    num:function(newValue) {
      if(newValue>10){
        this.styleObj={
          backgroundColor:'red'
        }
      }
      // deep:true        深度监听
    }
  }
  // components: {
    
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
