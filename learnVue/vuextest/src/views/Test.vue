<template>
        <div id="">
   			用户名：{{ username}}
        地址：{{ mall.mallname }}
        武器：{{ wCname }}
   			年龄：{{ age }}
   			虚岁：{{ xysui }}
   			<button type="button" @click='addAge(30)'>+++</button>
        <button type='button' @click="changeName('达拉然')">修改地址</button>
        <button type='button' @click="changeWC('鸡腿杖')">修改武器</button>
        <ul>
          <!-- :key绑定key值标识每列 -->
          <li v-for='(item,i) in List' :key='i'>
            <h3>{{ item.name }}</h3>
            <p>{{ item.text }}</p>
          </li>
        </ul>
 	  	</div>
</template>
<script>
      import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
      export default {
      		mounted(){
          //触发action使用dispatch()方法
          // this.$store.dispatch('getJoke')
     		 	// console.log(this);
          this.getJoke();
      		},
      		methods:{
      			// addAge :function(){
         //    // 触发mutations使用commit()方法
      			// this.$store.commit('addAge',30);
      			// }
            // 方法调用可以直接导入方法名
            ...mapMutations(['addAge','getList','changeName']),
            ...mapActions(['getJoke']),
            // 解构独立空间模块Mutations
            ...mapMutations('weChat',['changeWC'])
   		   },
         computed:{
            ...mapState(['username','age','List','mall']),
            // 解构独立空间模块State
            ...mapState('weChat',['wCname']),
            ...mapGetters(['xysui'])
         }
   		}  
</script>
<style>
</style>