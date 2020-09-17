export default{
	// 开启命名空间
	namespaced:true,
	state:{
		wCname:'霜之哀伤'
	},
	mutations:{
		changeWC:function(state,payload){
			state.wCname=payload;
		}
	}
}