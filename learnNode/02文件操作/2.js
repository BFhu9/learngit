let fs = require('fs');
// // 同步打开文件(可创建文件)
// let fd = fs.openSync('2.html','w');
// // console.log(fd);
// let str = "<h1>Create a html</h1>";
//  // 写入文件
// fs.writeFileSync(fd,str);
//  // 退出文件
// fs.closeSync(fd);
// // 异步打开文件
fs.open('2.1.html', 'w', (err, fd) => {
	fs.writeFile(fd, '<h1>异步操作</h1>', (err) => {
		console.log('文件已打开')
		if (!err) {
			fs.close(fd, () => {
				console.log('文件已关闭');
			})
		} else {
			console.log(err);
		}
	})
})
console.log('我是第一！');