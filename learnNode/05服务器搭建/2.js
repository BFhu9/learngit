let express = require('express');
let app = express();
//实现静态服务器
app.use(express.static('1'));
//启动服务器
app.listen(2006, () =>{
	console.log('服务器已启动') ;
})
// console.log(app.listen.constructor);
//自定义用户接口
app.get('/api/userList',(req,res)=>{
	res.json({
		state:"OK",
		userList:[
			{
				name:'1',
				age:1
			},
			{
				name:'2',
				age:2
			},
			{
				name:'3',
				age:3
			}
		]
	})
})