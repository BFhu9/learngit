console.log(__filename); 					//当前执行脚本的路径
console.log(__dirname); 					//当前执行脚本目录名称 
let path = require('path');
let bname = path.basename(__filename);
// path.join(__dirname+'/bname');
bname = __dirname + '/' + bname;       //底层实现
console.log(bname);