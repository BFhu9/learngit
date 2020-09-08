let fs = require('fs');
let events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('readFile',()=>{
	console.log('正在读取文件！');
})
fs.readFile('3.html', (err, data) => {
	if (!err) {
		console.log(data); //默认输出二进制数据，需要toString()方法转码
	} else {
		console.log(err);
	}
})
console.log('这是异步读取！');

let fd = fs.readFileSync('3.html');
console.log(fd.toString());
console.log('这是同步读取！');