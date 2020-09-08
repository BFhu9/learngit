let fs = require('fs')

// 同步打开文件
let fd = fs.openSync('text1.html','w')
console.log(fd);

// 写入内容
let str = "<h1>老陈，你好！</h1>"
fs.writeFileSync(fd,str);

// 退出文件
fs.closeSync(fd)