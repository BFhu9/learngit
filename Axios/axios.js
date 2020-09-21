/**
	axios的配置文件
	1、设置post数据格式为表单格式
	2、设置基路径
	3、序列化字符串
*/
import axios from 'axios';
import qs from 'qs';
import Vue from 'vue';
import path from 'path';
//配置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//配置前后端数据交互的请求头：
axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = 'http://47.97.83.151:8080/Mcheck/index.php/home';
// axios.defaults.baseURL = 'http://www.huangyy.cn:8080/Mcheck/index.php/home';
axios.defaults.baseURL = 'http://127.0.0.1/Mcheck/index.php/home';
//拦截请求：
axios.interceptors.request.use((config) => {
    let token = sessionStorage.getItem('token');
    if (config.method === 'post') {
        config.data ? config.data = config.data : config.data = {};
    	config.data.token = token;  //拼接token。
        config.data = qs.stringify(config.data);
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
//拦截响应：
axios.interceptors.response.use(
response => {
    let f = 1,g = 1;
    if(response.data.code == '350'){//返回350，说明非法访问，清除token信息并跳转到登录页面
        if(f == 1){sw(response.data.code_error);}
        f++;
    }
    if(response.data.code == '500'){//越权访问
        if(g == 1){sw2(response.data.code_error);}
        g++;
    }
  return response;
},
error => {
  if (error.response) {
    return Promise.reject(error.response.data) //返回接口返回的错误信息
  }
});
function sw(e){//越权访问，清除token信息并跳转到登录页面
    new Vue().$notify({title:'警告',message:e});   
    new Vue().$router.push('/login');
}
function sw2(e){//返回上一页
    window.history.go(-1);//返回上一页。
    new Vue().$notify({title:'警告',message:e});   
}

export default axios;
