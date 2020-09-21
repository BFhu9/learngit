<template>
  <div class="Joke">
  	<button @click='getJoke'>讲个笑话吧！</button>
      <ul v-if='show'>
          <li v-for='(item) in jokes'>
            <img :src=item.header alt="header">
            <h3>{{ item.sid }}</h3>
            <p>{{ item.text }}</p>
          </li>
      </ul>
  </div>
</template>
<script>
	 import axios from '@/api/axios'
	 export default{
	  data: function(){
        return {
        jokes:[],
        show:false
      }
      },
      methods:{
           getJoke: function () {
            axios.request({
             url:'getJoke',
             method:'get'
           }).then((res)=>{
            this.jokes = res.data.result;
            console.log(this.jokes);
            this.show=true;
           })
        }
      }
  }
</script>
