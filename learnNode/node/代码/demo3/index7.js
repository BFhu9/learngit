let fs = require('fs')

let rs = fs.createReadStream('大炮.png');
let ws = fs.createWriteStream('重炮.png');

// 创建管道，将读取流通过管道流出
rs.pipe(ws)