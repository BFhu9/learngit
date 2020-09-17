let express = require('express');
let app = express();
app.use(express.static('./server'));
app.listen(3000,()=>{
	console.log('服务器已启动：127.0.0.1:3000')
})
//启动服务器前要给指定文件夹初始化   npm init -y
// 后安装依赖模块 