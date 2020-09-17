export default{
	state:{
		mallname:'冰霜王座'
	},
	mutations:{
		changeName:function(state,payload){
			state.mallname=payload;
		}
	}
}