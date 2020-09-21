let express = require('express');
let app = express();
app.use(express.static('../server')) ;
app.use((req,res,next)=>{
	res.append('Access-Control-Allow-Origin','*');
	res.append('Access-Control-Allow-headers','*');
	next();
})
app.get('/',(req,res)=>{
	res.json({msg:'这是首页'})
})
app.get('/banner',(req,res)=>{
	res.json({msg:'这是banner页'})
})
app.listen(3000,()=>{
	console.log('服务器启动：127.0.0.1:3000')
})