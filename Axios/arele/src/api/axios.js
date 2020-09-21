import axios from 'axios'
import config from '@/config'

// 判断baseUrl的路径环境 -------在package.json中serve为开发者环境 build为生产环境
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro;

class HttpRequest{
	constructor(baseUrl){
		this.baseURL = baseUrl   //配置请求路径
		this.queue = {} //配置请求队列
	}
	//设置固定配置
	getInsideConfig(){
		const config = {
			baseURL:this.baseURL,
			header:{
				//
			}
		}
		return config
	}
	interceptors(instance,url){
		// console.log('-------------------');
		instance.interceptors.request.use((config)=>{
			//处理config
			console.log('拦截和处理请求')
			config.data = 'hello axios'
			// console.log(config)
			return config
		})
		instance.interceptors.response.use((res)=>{
			//处理响应
			console.log('处理响应')
			console.log(res.data)
			return res
		},(error)=>{
			//请求失败处理
			console.log(error)
			return {error:'网络出错了'}
		})
	} 
	// 实例化request对象
	request(options){
		const instance = axios.create()   //创建实例对象
		// 使用assign()方法对拦截的请求配置信息进行合并
		// console.log(options);
		options = Object.assign(this.getInsideConfig(),options)
		// console.log(options);
		this.interceptors(instance,options.url)
		return instance(options)
	}
}

// 实例化对象 
const axiosObj = new HttpRequest(baseUrl);

export default axiosObj





