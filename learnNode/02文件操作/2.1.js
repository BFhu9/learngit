let fs = require('fs');
// 创建文件流
let ws = fs.createWriteStream('3.html');
// 监听通道打开
ws.once('open', () => {
	console.log('通道已打开');
	// 写入文件
	ws.write("<h1>Node好难</h1><br>");
	ws.write("<h2>Node真的好难</h2><br>");
	ws.write("<h3>Node快点学会吧呜呜呜</h3>");
	// 写入结束
	ws.end();
});
// 监听通道关闭
ws.once('close', () => {
	console.log('通道已关闭');
})