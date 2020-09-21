import axios from '@/api/axios'

// export const getBannerData = () =>{
// 	// console.log('emit')
// 	return axios.request({
// 		url:'getJoke',
// 		method:'get'
// 	})
// }
export const getUserData = () =>{
	return axios.request({
		url:'user',
		method:'get'
	})
}