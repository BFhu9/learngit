let fs = require('fs')

let rs = fs.createReadStream('大炮.png');
let ws = fs.createWriteStream('中泡.png');

// 监听读取流打开
rs.once('open',function(){
    console.log('监听读取流')
})

// 监听读取流关闭
rs.once('close',function(){
    console.log('读取流关闭')
})


// 监听读取流打开
ws.once('open',function(){
    console.log('监听写入流')
})

// 监听读取流关闭
ws.once('close',function(){
    console.log('写入流关闭')
})

// 将读取的数据通过写入流写入
rs.on('data',(data)=>{
    ws.write(data)
})