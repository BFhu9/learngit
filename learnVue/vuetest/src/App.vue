<!-- 视图模板 -->
<template>
  <div id="app">
      <layout>
        <!-- v-slot后是绑定： -->
        <template v-slot:top>      
          <h1>{{ admin }}欢迎你</h1>
        </template>
        <template v-slot:buttom>
         <HelloWorld user = 'admin' :uList='userList' @changeUser='newUser'></HelloWorld>
        </template>
      </layout>
  </div>
</template>
<!-- 数据逻辑层 -->
<script>
import HelloWorld from './components/HelloWorld'
import layout from './components/layout'
export default {
  name: 'App',
  data: function(){
    return {
      admin:'Vue',
      userList:{
        user1:'admin1',
        user2:'admin2',
        user3:'admin3'
      }
    }
  },
methods:{
    newUser:function (event){
      console.log(event);
      this.admin = event
    }
  },
components:{
      HelloWorld,
      layout
  }
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
