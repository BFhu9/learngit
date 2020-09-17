import Vue from 'vue'
import Vuex from 'vuex'
import mall from './mall'
import weChat from './weChat'

Vue.use(Vuex)

export default new Vuex.Store({
	// 放置全局变量
  state: {
    username:'Brthus',
    age:20,
    List:[]
  },
  // 计算属性
  getters:{
    xysui:function(state){
      return state.age+1;
    }
  },
  // 修改数据状态方法
  mutations: {
    // payload为载荷，作用类似于参数
    addAge(state,payload){
      state.age += payload;
    },
    getList(state,payload){
      state.List = payload;
    }
  },
  // 修改异步数据
  actions: {
    // 参数context为$store
    getJoke(context){
    let url='http://api.apiopen.top/getJoke?page=1&count=10&type=text';
    fetch(url).then((res)=>{
      res.json();
    }).then((res)=>{
      console.log(res);
      //action中的是异步操作！！！不能直接对属性进行修改！需要通过mutations中的方法进行修改！
      context.commit('getList',res.result);
    })
    }
  },
  // 细分vuex模块
  modules: {
    mall,
    weChat
  }
})
