let fs = require('fs');
// 底层实现
// let rs = fs.createReadStream('3.html');
// rs.once('open', () => {
// 	console.log('开启文件读取流');
// 	let ws = fs.createWriteStream('3.1.html');
// 	ws.once('open', () => {
// 		console.log('文件写入流打开');
// 		rs.on('data', (data) => {
// 			ws.write(data);
// 		})
// 	})
// 	ws.once('close', () => {
// 		console.log('文件写入流关闭');
// 	})
// })
// rs.once('close', () => {
// 	console.log('关闭文件读取流');
// })
// pipe()方法
let rs = fs.createReadStream('3.html');
let ws = fs.createWriteStream('3.1html');
rs.pipe(ws);