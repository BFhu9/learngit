let http = require('http');
let fs = require('fs');
//创建服务器实例
let server = http.createServer();
//监听请求事件
server.on('request',(req,res)=>{
	console.log(req.res);
	res.end(fs.readFileSync('/Users/darksoul/Desktop/LearnGit/learngit/BW/Bilibili.html'))
	// if(req.url=='/'){
	// 	console.log('这是首页');
	// }
	// else if(req.url=='/login'){
	// 	console.log('这是登录页');
	// }
	// else(
	// 	console.log('404 NOT FOUND')
	// 	)
})
//绑定监听的端口号
server.listen(1002,()=>{
	console.log('服务器启动');
})